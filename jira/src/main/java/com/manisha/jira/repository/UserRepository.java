package com.manisha.jira.repository;

import com.manisha.jira.entity.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Issue,Long> {
}
