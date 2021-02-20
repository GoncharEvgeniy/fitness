package com.fitness.securyty;

import org.springframework.beans.factory.annotation.Value;

public class JwtProperties {

    @Value("${securyty.secret.key}")
    public static final String SECRET = "secretKey";

    @Value("${securyty.token.prefix}")
    public static final String TOKEN_PREFIX = "Bearer ";

    @Value("${securyty.header.string }")
    public static final String HEADER_STRING = "Authorization";

}
