package com.manisha.jira.repository;

import com.manisha.jira.entity.Project;
import com.manisha.jira.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findByCreatedBy(User user);
}
