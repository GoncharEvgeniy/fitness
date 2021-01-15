package com.fitness.repository;

import com.fitness.model.Day;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DayRepo extends JpaRepository<Day, Long> {
}
