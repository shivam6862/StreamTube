package com.streamtube.backend.model;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;

@Document(collection = "Playlists")
public class Playlist {
    @Id
    private UUID playlist_id;
    @NotBlank
    private String title;
    @NotBlank
    private String description;
    private UUID user_id;

    public Playlist(@JsonProperty("playlist_id") UUID playlist_id, @JsonProperty("title") String title,
            @JsonProperty("description") String description, @JsonProperty("user_id") UUID user_id) {
        this.playlist_id = (playlist_id == null) ? UUID.randomUUID() : playlist_id;
        this.title = title;
        this.description = description;
        this.user_id = user_id;
    }

    public UUID getPlaylist_id() {
        return this.playlist_id;
    }

    public String getTitle() {
        return this.title;
    }

    public String getDescription() {
        return this.description;
    }

    public UUID getUser_id() {
        return this.user_id;
    }

    public void setPlaylist_id(UUID playlist_id) {
        this.playlist_id = playlist_id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setUser_id(UUID user_id) {
        this.user_id = user_id;
    }

}
