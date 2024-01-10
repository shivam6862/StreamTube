package com.streamtube.backend.model;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;

@Document(collection = "Videos")
public class Video {
    @Id
    private UUID video_id;
    @NotBlank
    private String title;
    @NotBlank
    private String description;
    private String upload_date;
    private UUID channel_id;
    @NotBlank
    private String timestamp;
    @NotBlank
    private String channel_image_url;
    @NotBlank
    private String thumbnail_image_url;
    private String tags;

    public Video(@JsonProperty("video_id") UUID video_id, @JsonProperty("title") String title,
            @JsonProperty("description") String description,
            @JsonProperty("channel_id") UUID channel_id, @JsonProperty("timestamp") String timestamp,
            @JsonProperty("channel_image_url") String channel_image_url,
            @JsonProperty("thumbnail_image_url") String thumbnail_image_url, @JsonProperty("tags") String tags) {
        this.video_id = (video_id == null) ? UUID.randomUUID() : video_id;
        this.title = title;
        this.description = description;
        this.upload_date = java.time.LocalDate.now().toString();
        this.channel_id = channel_id;
        this.timestamp = timestamp;
        this.channel_image_url = channel_image_url;
        this.thumbnail_image_url = thumbnail_image_url;
        this.tags = tags;
    }

    public UUID getVideo_id() {
        return this.video_id;
    }

    public String getTitle() {
        return this.title;
    }

    public String getDescription() {
        return this.description;
    }

    public UUID getChannel_id() {
        return this.channel_id;
    }

    public String getUpload_date() {
        return this.upload_date;
    }

    public String getTimestamp() {
        return this.timestamp;
    }

    public String getChannel_image_url() {
        return this.channel_image_url;
    }

    public String getThumbnail_image_url() {
        return this.thumbnail_image_url;
    }

    public String getTags() {
        return this.tags;
    }

    public void setVideo_id(UUID video_id) {
        this.video_id = video_id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setChannel_id(UUID channel_id) {
        this.channel_id = channel_id;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public void setChannel_image_url(String channel_image_url) {
        this.channel_image_url = channel_image_url;
    }

    public void setThumbnail_image_url(String thumbnail_image_url) {
        this.thumbnail_image_url = thumbnail_image_url;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

}
