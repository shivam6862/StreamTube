package com.streamtube.backend.model;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

@Document(collection = "Historys")
public class History {
    @Id
    private UUID history_id;
    private UUID user_id;
    private UUID video_id;
    private String watch_date;

    public History(@JsonProperty("history_id") UUID history_id, @JsonProperty("user_id") UUID user_id,
            @JsonProperty("video_id") UUID video_id) {
        this.history_id = (history_id == null) ? UUID.randomUUID() : history_id;
        this.user_id = user_id;
        this.video_id = video_id;
        this.watch_date = java.time.LocalDate.now().toString();
    }

    public UUID getHistory_id() {
        return this.history_id;
    }

    public UUID getUser_id() {
        return this.user_id;
    }

    public UUID getVideo_id() {
        return this.video_id;
    }

    public String getWatch_date() {
        return this.watch_date;
    }

    public void setHistory_id(UUID history_id) {
        this.history_id = history_id;
    }

    public void setUser_id(UUID user_id) {
        this.user_id = user_id;
    }

    public void setVideo_id(UUID video_id) {
        this.video_id = video_id;
    }
}
