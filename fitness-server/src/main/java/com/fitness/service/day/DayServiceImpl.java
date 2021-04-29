package com.fitness.service.day;

import com.fitness.model.Day;
import com.fitness.model.User;
import com.fitness.repository.DayRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DayServiceImpl implements DayService {

    private final DayRepo dayRepo;

    @Autowired
    public DayServiceImpl(DayRepo dayRepo) {
        this.dayRepo = dayRepo;
    }

    @Override
    public Day save(Day day) {
        return dayRepo.save(day);
    }

    @Override
    public List<Day> getDaysByUser(User user) {
        return dayRepo.findByUser(user);
    }
}
