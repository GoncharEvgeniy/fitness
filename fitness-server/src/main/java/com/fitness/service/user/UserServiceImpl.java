package com.fitness.service.user;

import com.fitness.exception.UsernameOrEmailExistException;
import com.fitness.model.Role;
import com.fitness.model.User;
import com.fitness.repository.UserRepo;
import com.fitness.service.role.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import static java.util.Objects.isNull;
import static java.util.Objects.nonNull;

@Service
public class UserServiceImpl implements UserService {

    @Value("${default.role.name}")
    private String DEFAULT_ROLE_NAME;

    @Value("${username.exist.error.message}")
    private String USERNAME_EXIST;

    @Value("${email.exist.error.message}")
    private String EMAIL_EXIST;

    private final UserRepo userRepo;

    private final RoleService roleService;

    @Autowired
    public UserServiceImpl(UserRepo userRepo, RoleService roleService) {
        this.userRepo = userRepo;
        this.roleService = roleService;
    }

    @Override
    public User save(User user) throws UsernameOrEmailExistException {
        User userFromDb = userRepo.findByUsername(user.getUsername());
        if (nonNull(userFromDb)) {
            throw new UsernameOrEmailExistException(USERNAME_EXIST);
        }
        userFromDb = userRepo.findByEmail(user.getEmail());
        if (nonNull(userFromDb)) {
            throw new UsernameOrEmailExistException(EMAIL_EXIST);
        }
        if (isNull(user.getRole())) {
            Role role = getRole();
            user.setRole(role);
        }
        return userRepo.save(user);
    }

    private Role getRole() {
        Role role = roleService.findByName(DEFAULT_ROLE_NAME);
        if (isNull(role)) {
            role = Role.builder().name(DEFAULT_ROLE_NAME).build();
            roleService.save(role);
        }
        return role;
    }
}
