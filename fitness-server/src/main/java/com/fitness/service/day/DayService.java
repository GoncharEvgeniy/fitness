package com.fitness.service.day;

import com.fitness.model.Day;
import com.fitness.model.User;

import java.util.List;

public interface DayService {

    Day save(Day day);

    List<Day> getDaysByUser(User user);

}
