package com.streamtube.backend.model;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

@Document(collection = "PlaylistVideos")
public class PlaylistVideo {
    @Id
    private UUID playlistvideo_id;
    private UUID playlist_id;
    private UUID video_id;

    public PlaylistVideo(@JsonProperty("playlistvideo_id") UUID playlistvideo_id,
            @JsonProperty("playlist_id") UUID playlist_id, @JsonProperty("video_id") UUID video_id) {
        this.playlistvideo_id = (playlistvideo_id == null) ? UUID.randomUUID() : playlistvideo_id;
        this.playlist_id = playlist_id;
        this.video_id = video_id;
    }

    public UUID getPlaylistvideo_id() {
        return this.playlistvideo_id;
    }

    public UUID getPlaylist_id() {
        return this.playlist_id;
    }

    public UUID getVideo_id() {
        return this.video_id;
    }

    public void setPlaylistvideo_id(UUID playlistvideo_id) {
        this.playlistvideo_id = playlistvideo_id;
    }

    public void setPlaylist_id(UUID playlist_id) {
        this.playlist_id = playlist_id;
    }

    public void setVideo_id(UUID video_id) {
        this.video_id = video_id;
    }

}
