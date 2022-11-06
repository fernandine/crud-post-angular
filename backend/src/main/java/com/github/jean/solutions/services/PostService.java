package com.github.jean.solutions.services;

import com.github.jean.solutions.domain.Post;
import com.github.jean.solutions.dto.PostDto;
import com.github.jean.solutions.repositories.PostRepository;
import com.github.jean.solutions.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostService {

    @Autowired
    private PostRepository repository;

    public List<PostDto> findAll() {
        List<Post> list = repository.findAll();
        return list.stream().map(x -> new PostDto(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public PostDto findById(String id) {
        Optional<Post> obj = repository.findById(id);
        Post post = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
        return new PostDto(post);
    }

    @Transactional
    public PostDto insert(PostDto dto) {
    Post entity = new Post();
    entity.setId(dto.getId());
    entity.setTitle(dto.getTitle());
    entity.setBody(dto.getBody());
    entity = repository.save(entity);
    return new PostDto(entity);
    }

    @Transactional
    public PostDto update(String id, PostDto dto) {
        Post entity = repository.findById(id).get();
        entity.setId(dto.getId());
        entity.setTitle(dto.getTitle());
        entity.setBody(dto.getBody());
        entity = repository.save(entity);
        return new PostDto(entity);
    }

    public void delete(String id) {
        repository.deleteById(id);
    }
}
