package com.manisha.jira.repository;

import com.manisha.jira.entity.Issue;
import com.manisha.jira.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IssueRepository extends JpaRepository<Issue, Long> {
    //whenever we create a repository we need to extend JpaRepository, as this has built in method such as FindById,Delete
    List<Issue> findByProject(Project project);
}
