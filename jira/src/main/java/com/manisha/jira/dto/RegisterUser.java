package com.manisha.jira.dto;

import com.manisha.jira.entity.Role;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterUser {
    private String username;
    private String email;
    private String password;
    private Role role;
}
