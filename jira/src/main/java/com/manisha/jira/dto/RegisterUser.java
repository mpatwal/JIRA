package com.manisha.jira.dto;

import com.manisha.jira.entity.Role;
import lombok.Data;

@Data
public class RegisterUser {
    private String username;
    private String email;
    private String password;
    private Role role;
}
