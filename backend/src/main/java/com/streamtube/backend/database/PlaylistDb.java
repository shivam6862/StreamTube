package com.streamtube.backend.database;

import java.util.UUID;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.streamtube.backend.model.Playlist;

public interface PlaylistDb extends MongoRepository<Playlist, UUID> {

}
