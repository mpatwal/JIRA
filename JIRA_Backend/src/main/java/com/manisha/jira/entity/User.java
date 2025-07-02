package com.manisha.jira.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="users")

public class User{
     @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id;
     private String username;
     private String email;
     private String password;

     @Enumerated(EnumType.STRING)
     private Role role;
     private LocalDateTime createdAt;

}
