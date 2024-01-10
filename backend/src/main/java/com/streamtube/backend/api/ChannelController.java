package com.streamtube.backend.api;

import java.util.List;
import java.util.UUID;

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
import com.streamtube.backend.model.Channel;
import com.streamtube.backend.service.ChannelService;

import jakarta.validation.Valid;

@RequestMapping("api/v1/channel")
@RestController
public class ChannelController {
    private final ChannelService channelService;

    @Autowired
    public ChannelController(ChannelService channelService) {
        this.channelService = channelService;
    }

    @PostMapping
    public Object addChannel(@Valid @NonNull @RequestBody Channel channel) {
        return channelService.addChannel(channel);
    }

    @GetMapping
    public List<Channel> getAllChannels() {
        return channelService.getAllChannels();
    }

    @GetMapping(path = "/user/{userId}")
    public Object getAllUserChannels(@PathVariable("userId") UUID userId) {
        return channelService.getAllUserChannels(userId);
    }

    @GetMapping(path = "/{channel_id}")
    public Object getChannelById(@PathVariable("channel_id") UUID channelId) {
        return channelService.getChannelById(channelId);
    }

    @DeleteMapping(path = "/{channel_id}")
    public Object deleteChannelById(@PathVariable("channel_id") UUID channelId) {
        return channelService.deleteChannelById(channelId);
    }

    @PutMapping(path = "/{channel_id}")
    public Object updateChannelById(@PathVariable("channel_id") UUID channelId,
            @Valid @NonNull @RequestBody Channel channel) {
        return channelService.updateChannelById(channelId, channel);
    }
}
