package com.streamtube.backend.model;

import java.util.Objects;
import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

@Document(collection = "Subscribers")
public class Subscriber {
    @Id
    private UUID subscriptionId;
    private UUID subscriberId;
    private UUID channelId;
    private String subscriptionDate;

    public Subscriber(@JsonProperty("subscriptionId") UUID subscriptionId,
            @JsonProperty("subscriberId") UUID subscriberId, @JsonProperty("channelId") UUID channelId) {
        this.subscriptionId = (subscriptionId == null) ? UUID.randomUUID() : subscriptionId;
        this.subscriberId = subscriberId;
        this.channelId = channelId;
        this.subscriptionDate = java.time.LocalDate.now().toString();
    }

    public UUID getSubscriptionId() {
        return this.subscriptionId;
    }

    public UUID getSubscriberId() {
        return this.subscriberId;
    }

    public UUID getChannelId() {
        return this.channelId;
    }

    public String getSubscriptionDate() {
        return this.subscriptionDate;
    }

    public void setSubscriptionId(UUID subscriptionId) {
        this.subscriptionId = subscriptionId;
    }

    public void setSubscriberId(UUID subscriberId) {
        this.subscriberId = subscriberId;
    }

    public void setChannelId(UUID channelId) {
        this.channelId = channelId;
    }

    public void setSubscriptionDate(String subscriptionDate) {
        this.subscriptionDate = subscriptionDate;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;
        Subscriber subscriber = (Subscriber) obj;
        return Objects.equals(subscriptionId, subscriber.subscriptionId)
                && Objects.equals(subscriberId, subscriber.subscriberId)
                && Objects.equals(channelId, subscriber.channelId);
    }
}
