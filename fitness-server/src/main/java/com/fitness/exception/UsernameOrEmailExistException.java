package com.fitness.exception;

public class UsernameOrEmailExistException extends Exception {

    public UsernameOrEmailExistException(String message) {
        super(message);
    }
}
