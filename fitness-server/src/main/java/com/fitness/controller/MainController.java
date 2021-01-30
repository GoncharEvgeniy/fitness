package com.fitness.controller;

import com.fitness.dto.RegistrationFormDto;
import com.fitness.dto.UserDto;
import com.fitness.model.User;
import com.fitness.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class MainController {

    private final UserService userService;

    @Autowired
    public MainController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("reg")
    public ResponseEntity Registration(@RequestBody RegistrationFormDto registrationFormDto) {
        User user = RegistrationFormDto.toUser(registrationFormDto);
        UserDto savedUser = new UserDto(userService.save(user));
        return ResponseEntity.ok(savedUser);
    }

}
