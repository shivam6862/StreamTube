package com.streamtube.backend.model;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Document(collection = "Channels")
public class Channel {

    @Id
    private UUID channelId;
    @NotNull
    private UUID userId;
    @NotBlank
    private String channelName;
    @NotBlank
    private String description;
    private String creationDate;

    public Channel(@JsonProperty("channelId") UUID channelId, @JsonProperty("userId") UUID userId,
            @JsonProperty("channelName") String channelName, @JsonProperty("description") String description) {
        this.channelId = (channelId == null) ? UUID.randomUUID() : channelId;
        this.userId = userId;
        this.channelName = channelName;
        this.description = description;
        this.creationDate = java.time.LocalDate.now().toString();
    }

    public void setChannelId(UUID channelId) {
        this.channelId = channelId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public void setChannelName(String channelName) {
        this.channelName = channelName;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCreationDate(String creationDate) {
        this.creationDate = creationDate;
    }

    public UUID getChannelId() {
        return this.channelId;
    }

    public UUID getUserId() {
        return this.userId;
    }

    public String getChannelName() {
        return this.channelName;
    }

    public String getDescription() {
        return this.description;
    }

    public String getCreationDate() {
        return this.creationDate;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;
        Channel channel = (Channel) obj;
        return this.channelId.equals(channel.getChannelId()) && this.userId.equals(channel.getUserId())
                && this.channelName.equals(channel.getChannelName());
    }
}
