package com.fitness.securyty;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fitness.dto.LoginFormDto;
import com.fitness.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final static String USERNAME = "username";
    private final static String ROLE = "role";
    private final static Logger LOGGER = LoggerFactory.getLogger(JwtAuthenticationFilter.class);

    private final AuthenticationManager authenticationManager;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {
        LoginFormDto loginFormDto = null;
        try {
            loginFormDto = new ObjectMapper().readValue(request.getInputStream(), LoginFormDto.class);
        } catch (IOException e) {
            LOGGER.error(e.getMessage());
        }
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                loginFormDto.getUsername(), loginFormDto.getPassword(), new ArrayList<>());
        Authentication authenticate = authenticationManager.authenticate(token);
        return authenticate;
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {
        User user = (User) authResult.getPrincipal();
        String role = user.getRole().getName();
        String token = JWT.create()
                .withSubject(user.getUsername())
                .withClaim(USERNAME, user.getUsername())
                .withClaim(ROLE, role)
                .sign(Algorithm.HMAC512(JwtProperties.SECRET.getBytes()));
        response.addHeader(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + token);
    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                              AuthenticationException failed) throws IOException, ServletException {
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, failed.getMessage());
    }
}
