package com.manisha.jira.repository;

import com.manisha.jira.entity.Issue;
import com.manisha.jira.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IssueRepository extends JpaRepository<Issue, Long> {
    List<Issue> findByProject(Project project);
}
