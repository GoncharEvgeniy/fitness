package com.fitness.controller;

import com.fitness.dto.RegistrationFormDto;
import com.fitness.dto.UserDto;
import com.fitness.exception.UsernameOrEmailExistException;
import com.fitness.model.User;
import com.fitness.service.user.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/")
public class MainController {

    private final UserService userService;

    @Autowired
    public MainController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("reg")
    public ResponseEntity registration(@RequestBody @Valid RegistrationFormDto registrationFormDto) {
        User user = RegistrationFormDto.toUser(registrationFormDto);
        UserDto savedUser;
        try {
            savedUser = new UserDto(userService.save(user));
        } catch (UsernameOrEmailExistException e) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN.value())
                    .body(e.getMessage());
        }
        return ResponseEntity.ok(savedUser);
    }

}
