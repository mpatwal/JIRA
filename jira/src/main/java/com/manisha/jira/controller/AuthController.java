package com.manisha.jira.controller;

import com.manisha.jira.dto.RegisterUser;
import com.manisha.jira.entity.Role;
import com.manisha.jira.entity.User;
import com.manisha.jira.repository.UserRepository;
import com.manisha.jira.util.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired private AuthenticationManager authenticationManager;
    @Autowired private JWTUtil jwtUtil;
    // @Autowired private UserDetailServiceImpl userDetailService; // ❌ Remove if unused
    @Autowired private UserRepository userRepository;
    @Autowired private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterUser request) {
        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword())) // ✅ encode password
                .role(request.getRole()) // ✅ safely convert string to enum
                .createdAt(LocalDateTime.now())
                .build();

        userRepository.save(user);
        return ResponseEntity.ok("User registered...");
    }
}
