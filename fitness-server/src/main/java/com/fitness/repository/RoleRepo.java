package com.fitness.repository;

import com.fitness.model.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Exercise, Long> {
}