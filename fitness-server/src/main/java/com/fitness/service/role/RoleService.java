package com.fitness.service.role;

import com.fitness.model.Role;

public interface RoleService {

    Role findByName(String name);

    Role save(Role role);
}
