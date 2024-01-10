package com.streamtube.backend.model;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

@Document(collection = "WatchLaters")
public class WatchLater {
    @Id
    private UUID watchlater_id;
    private UUID user_id;
    private UUID video_id;
    private String added_date;

    public WatchLater(@JsonProperty("watchlater_id") UUID watchlater_id, @JsonProperty("user_id") UUID user_id,
            @JsonProperty("video_id") UUID video_id) {
        this.watchlater_id = (watchlater_id == null) ? UUID.randomUUID() : watchlater_id;
        this.user_id = user_id;
        this.video_id = video_id;
        this.added_date = java.time.LocalDate.now().toString();
    }

    public UUID getWatchlater_id() {
        return this.watchlater_id;
    }

    public UUID getUser_id() {
        return this.user_id;
    }

    public UUID getVideo_id() {
        return this.video_id;
    }

    public String getAdded_date() {
        return this.added_date;
    }

    public void setWatchlater_id(UUID watchlater_id) {
        this.watchlater_id = watchlater_id;
    }

    public void setUser_id(UUID user_id) {
        this.user_id = user_id;
    }

    public void setVideo_id(UUID video_id) {
        this.video_id = video_id;
    }
}
