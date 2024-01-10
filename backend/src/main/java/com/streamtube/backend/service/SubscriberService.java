package com.streamtube.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.streamtube.backend.database.SubscriberDb;
import com.streamtube.backend.model.Subscriber;
import com.streamtube.backend.response.ErrorResponse;
import com.streamtube.backend.response.SucessResponse;

import java.util.List;
import java.util.UUID;

@Service
public class SubscriberService {

    private final SubscriberDb subscriberDb;

    @Autowired
    public SubscriberService(SubscriberDb subscriberDb) {
        this.subscriberDb = subscriberDb;
    }

    public Object addSubscriber(Subscriber subscriber) {
        Subscriber is_subscriber_present = subscriberDb.findAll().stream()
                .filter(s -> s.getSubscriberId().equals(subscriber.getSubscriberId())).findFirst().orElse(null);

        if (is_subscriber_present != null) {
            return new ErrorResponse("Subscriber already exists", "error");
        }

        Subscriber savSubscriber = subscriberDb.save(subscriber);
        return (savSubscriber == null) ? new ErrorResponse("Subscriber not added", "error")
                : new SucessResponse("Subscriber added successfully", "success", savSubscriber);
    }

    public List<Subscriber> getAllSubscribers() {
        return subscriberDb.findAll();
    }

    public Subscriber getSubscriberById(UUID subscriptionId) {
        return subscriberDb.findById(subscriptionId).orElse(null);
    }

    public List<Subscriber> getSubscribersBysubscriberId(UUID subscriberId) {
        return subscriberDb.findAll().stream().filter(s -> s.getSubscriberId().equals(subscriberId))
                .collect(java.util.stream.Collectors.toList());
    }

    public Object deleteSubscriberById(UUID subscriptionId) {
        subscriberDb.deleteById(subscriptionId);
        return new SucessResponse("Subscriber deleted successfully", "success", null);
    }

    public Object deleteSubscribersBysubscriberId(UUID subscriberId) {
        subscriberDb.findAll().stream().filter(s -> s.getSubscriberId().equals(subscriberId))
                .forEach(s -> subscriberDb.deleteById(s.getSubscriptionId()));
        return new SucessResponse("Subscriber Of subscriberId  deleted successfully", "success", null);
    }

    public Object updateSubscriberById(UUID subscriptionId, Subscriber newSubscriber) {
        Subscriber oldSubscriber = subscriberDb.findById(subscriptionId).orElse(null);
        if (oldSubscriber == null) {
            return new ErrorResponse("Subscriber not found", "error");
        }
        oldSubscriber.setChannelId(newSubscriber.getChannelId());
        oldSubscriber.setSubscriberId(newSubscriber.getSubscriberId());
        oldSubscriber.setSubscriptionDate(newSubscriber.getSubscriptionDate());
        subscriberDb.save(oldSubscriber);
        return new SucessResponse("Subscriber updated successfully", "success", oldSubscriber);
    }
}
