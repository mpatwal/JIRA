package com.manisha.jira.controller;

import com.manisha.jira.dto.CreateIssueRequest;
import com.manisha.jira.entity.Issue;
import com.manisha.jira.entity.Project;
import com.manisha.jira.entity.Status;
import com.manisha.jira.entity.User;
import com.manisha.jira.repository.IssueRepository;
import com.manisha.jira.repository.ProjectRepository;
import com.manisha.jira.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/issue")
public class IssueController {
    @Autowired
    private IssueRepository issueRepository;
    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<Issue> createIssue(@RequestBody CreateIssueRequest request,
                                             Principal principal) {
        User user = userRepository.findByUsername(principal.getName()).orElseThrow();
        Project project = projectRepository.findById(request.getProjectId()).orElseThrow();

        Issue issue = Issue.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .priority(request.getPriority())
                .status(Status.OPEN)
                .project(project)
                .createdBy(user)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();
        return ResponseEntity.ok(issueRepository.save(issue));
    }


    @GetMapping("/project/{projectId}")
    public ResponseEntity<List<Issue>> getIssueByProject(@PathVariable Long projectId) {
        Project project = projectRepository.findById(projectId).orElseThrow();
        return ResponseEntity.ok(issueRepository.findByProject(project));
    }
    //put is for update
    @PutMapping("/{id}/assign/{userId}")
    public ResponseEntity<Issue> assignIssue(@PathVariable Long id,
                                             @PathVariable Long userId) {
        Issue issue = issueRepository.findById(id).orElseThrow();
        User user = userRepository.findById(userId).orElseThrow();
        issue.setAssignedTo(user);
        issue.setUpdatedAt(LocalDateTime.now());
        return ResponseEntity.ok(issueRepository.save(issue));
    }

}