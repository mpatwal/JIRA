package com.manisha.jira.repository;

import com.manisha.jira.entity.Issue;
import com.manisha.jira.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
