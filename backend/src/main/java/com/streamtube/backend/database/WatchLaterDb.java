package com.streamtube.backend.database;

import java.util.UUID;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.streamtube.backend.model.WatchLater;

public interface WatchLaterDb extends MongoRepository<WatchLater, UUID> {

}
