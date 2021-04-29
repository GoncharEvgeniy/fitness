package com.fitness.repository;

import com.fitness.model.Day;
import com.fitness.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DayRepo extends JpaRepository<Day, Long> {

    List<Day> findByUser(User user);
}
