package com.streamtube.backend.database;

import java.util.UUID;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.streamtube.backend.model.User;

public interface UserDb extends MongoRepository<User, UUID> {

}
