package com.fitness.service.user;

import com.fitness.model.Role;
import com.fitness.model.User;
import com.fitness.repository.UserRepo;
import com.fitness.service.role.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static java.util.Objects.*;

@Service
public class UserServiceImpl implements UserService {

    public static final String DEFAULT_ROLE_NAME = "user";

    private final UserRepo userRepo;

    private final RoleService roleService;

    @Autowired
    public UserServiceImpl(UserRepo userRepo, RoleService roleService) {
        this.userRepo = userRepo;
        this.roleService = roleService;
    }

    @Override
    public User save(User user) {
        if (isNull(user.getRole())) {
            Role role = roleService.findByName(DEFAULT_ROLE_NAME);
            if (isNull(role)) {
                role = Role.builder().name(DEFAULT_ROLE_NAME).build();
                roleService.save(role);
            }
            user.setRole(role);
        }
        return userRepo.save(user);
    }
}
