package com.manisha.jira.controller;

import com.manisha.jira.entity.Project;
import com.manisha.jira.entity.User;
import com.manisha.jira.repository.ProjectRepository;
import com.manisha.jira.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    @Autowired
    ProjectRepository projectRepository;

    @Autowired
    private UserRepository userRepository;


    @PostMapping
    public ResponseEntity<Project> createProject(@RequestBody Project project,
                                                 Principal principal) {
        // Principal - refers to current authenticated user
        User user = userRepository.findByUsername(principal.getName()).orElseThrow();
        project.setCreatedBy(user);
        project.setCreatedAt(LocalDateTime.now());
        return ResponseEntity.ok(projectRepository.save(project));
    }
    //To-Do : Create getUserProjects function
    @GetMapping
    public ResponseEntity<List<Project>>getUserProjects(Principal principal) {
        User user = userRepository.findByUsername(principal.getName()).orElseThrow();
        List<Project>projectList = projectRepository.findByCreatedBy(user);
        return ResponseEntity.ok(projectList);
    }
    // Fetch all projects (ADMIN only)
    @GetMapping("/all")
    public ResponseEntity<Page<Project>> getAllProjects(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Project> pagedResult = projectRepository.findAll(pageable);
        return ResponseEntity.ok(pagedResult);
    }



}