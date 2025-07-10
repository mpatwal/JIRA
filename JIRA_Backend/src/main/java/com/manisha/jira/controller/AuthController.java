package com.manisha.jira.controller;

import com.manisha.jira.dto.AuthRequest;
import com.manisha.jira.dto.AuthResponse;
import com.manisha.jira.dto.RegisterUser;
import com.manisha.jira.entity.User;
import com.manisha.jira.repository.UserRepository;
import com.manisha.jira.service.UserDetailServiceImpl;
import com.manisha.jira.util.JWTUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/auth")

public class AuthController {
    @Autowired private AuthenticationManager authenticationManager;
    @Autowired private JWTUtil jwtUtil;
    @Autowired private UserDetailServiceImpl userDetailService;
    @Autowired private  UserRepository userRepository;
    @Autowired private  PasswordEncoder passwordEncoder;


@CrossOrigin
@PostMapping("/register")
public ResponseEntity<String> register(@RequestBody RegisterUser request) {
        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .createdAt(LocalDateTime.now())
                .build();
        userRepository.save(user);
        return ResponseEntity.ok("User registered...");
    }
@CrossOrigin
@PostMapping("/login")
public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest authRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(),
                        authRequest.getPassword())
                );
        UserDetails userDetails = userDetailService.loadUserByUsername(authRequest.getUsername());
        User user = userRepository.findByUsername(authRequest.getUsername()).orElseThrow();
        String token = jwtUtil.generateToken(userDetails);
        return ResponseEntity.ok(new AuthResponse(token, user.getRole().toString()));
    }
}
