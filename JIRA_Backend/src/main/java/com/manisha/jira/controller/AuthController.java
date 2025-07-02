package com.manisha.jira.controller;

import com.manisha.jira.dto.RegisterUser;
import com.manisha.jira.entity.User;
import com.manisha.jira.repository.UserRepository;
import com.manisha.jira.service.UserDetailServiceImpl;
import com.manisha.jira.util.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
//    @Autowired
//    private AuthenticationManager authenticationManager;

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private UserDetailServiceImpl userDetailServices;

    @Autowired
    private UserRepository userRepository;

//    @Autowired
//    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterUser registerUser) {
        User user = User.builder()
                .username(registerUser.getUsername())
                .email(registerUser.getEmail())
                .password(registerUser.getPassword())
                .role(registerUser.getRole())
                .createdAt(LocalDateTime.now())
                .build();
        userRepository.save(user);
        return ResponseEntity.ok("User registered");
    }
}
