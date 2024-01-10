package com.streamtube.backend.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mongodb.lang.NonNull;
import com.streamtube.backend.model.Subscriber;
import com.streamtube.backend.service.SubscriberService;

import java.util.List;
import java.util.UUID;

import jakarta.validation.Valid;

@RequestMapping("api/v1/subscriber")
@RestController
public class SubscriberController {
    private final SubscriberService subscriberService;

    @Autowired
    public SubscriberController(SubscriberService subscriberService) {
        this.subscriberService = subscriberService;
    }

    @PostMapping
    public Object addSubscriber(@Valid @NonNull @RequestBody Subscriber subscriber) {
        return subscriberService.addSubscriber(subscriber);
    }

    @GetMapping
    public List<Subscriber> getAllSubscribers() {
        return subscriberService.getAllSubscribers();
    }

    @GetMapping(path = "{subscriptionId}")
    public Subscriber getSubscriberById(@PathVariable("subscriptionId") UUID subscriptionId) {
        return subscriberService.getSubscriberById(subscriptionId);
    }

    @GetMapping(path = "subscriber/{subscriberId}")
    public List<Subscriber> getSubscribersBysubscriberId(@PathVariable("subscriberId") UUID subscriberId) {
        return subscriberService.getSubscribersBysubscriberId(subscriberId);
    }

    @DeleteMapping(path = "{subscriptionId}")
    public Object deleteSubscriberById(@PathVariable("subscriptionId") UUID subscriptionId) {
        return subscriberService.deleteSubscriberById(subscriptionId);
    }

    @DeleteMapping(path = "subscriber/{subscriptionId}")
    public Object deleteSubscribersBysubscriberId(@PathVariable("subscriptionId") UUID subscriptionId) {
        return subscriberService.deleteSubscribersBysubscriberId(subscriptionId);
    }

    @PutMapping(path = "{subscriptionId}")
    public Object updateSubscriberById(@PathVariable("subscriptionId") UUID subscriptionId,
            @Valid @NonNull @RequestBody Subscriber subscriber) {
        return subscriberService.updateSubscriberById(subscriptionId, subscriber);
    }
}
