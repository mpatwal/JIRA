package com.manisha.jira.entity;

import jakarta.annotation.Priority;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.catalina.User;

import java.time.LocalDateTime;

@Entity
@Data@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Issue {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;

    @Enumerated(EnumType.STRING)
    private Status status;

    @Enumerated(EnumType.STRING)
    private Priority priority;

    @ManyToOne
    private Project project;

    @ManyToOne
    private User createdBy;

    @ManyToOne
    private User assignedTo;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
