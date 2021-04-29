package com.fitness.controller;

import com.fitness.model.Day;
import com.fitness.model.User;
import com.fitness.service.day.DayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/day")
public class DayController {
    
    private final DayService dayService;

    @Autowired
    public DayController(DayService dayService) {
        this.dayService = dayService;
    }

    @PostMapping("/save")
    public ResponseEntity save(@RequestBody Day day) {
        return ResponseEntity.ok(dayService.save(day));
    }

    @GetMapping("/getDays")
    public ResponseEntity getDays(@RequestBody User user) {
        return ResponseEntity.ok(dayService.getDaysByUser(user));
    }

}
