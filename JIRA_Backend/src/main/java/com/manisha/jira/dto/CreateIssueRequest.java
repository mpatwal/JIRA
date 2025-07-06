package com.manisha.jira.dto;

import com.manisha.jira.entity.Priority;
import lombok.Data;

@Data
public class CreateIssueRequest {
    private String title;
    private String description;
    private Priority priority;
    private Long projectId;
}
//The data that needs to be tranfered