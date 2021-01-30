package com.fitness.dto;

import com.fitness.model.User;

public class RegistrationFormDto {

    private String username;

    private String password;

    private String email;

    public static User toUser(RegistrationFormDto registrationFormDto) {
        return User.builder()
            .username(registrationFormDto.getUsername())
            .email(registrationFormDto.getEmail())
            .password(registrationFormDto.getPassword())
            .isAccountNonExpired(true)
            .isAccountNonLocked(true)
            .isCredentialsNonExpired(true)
            .isEnabled(true)
            .build();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
