package com.github.jean.solutions.dto;

import com.github.jean.solutions.domain.Post;

import java.io.Serializable;

public class PostDto implements Serializable {

    private String id;
    private String title;
    private String body;

    public PostDto() {

    }

    public PostDto(String id, String title, String body) {
        this.id = id;
        this.title = title;
        this.body = body;
    }

    public PostDto( Post entity) {
        id = entity.getId();
        title = entity.getTitle();
        body = entity.getBody();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

}
