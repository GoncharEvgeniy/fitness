package com.fitness.service.user;

import com.fitness.exception.UsernameOrEmailExistException;
import com.fitness.model.User;

public interface UserService {

    User save(User user) throws UsernameOrEmailExistException;
}
