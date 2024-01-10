package com.streamtube.backend.database;

import java.util.UUID;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.streamtube.backend.model.Video;

public interface VideoDb extends MongoRepository<Video, UUID> {

}
