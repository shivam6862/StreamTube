package com.streamtube.backend.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.streamtube.backend.database.ChannelDb;
import com.streamtube.backend.model.Channel;
import com.streamtube.backend.response.ErrorResponse;
import com.streamtube.backend.response.SucessResponse;

@Service
public class ChannelService {
    private final ChannelDb channelDb;

    @Autowired
    public ChannelService(ChannelDb channelDb) {
        this.channelDb = channelDb;
    }

    public Object addChannel(Channel channel) {
        Channel is_channel_present = channelDb.findAll().stream()
                .filter(c -> c.getChannelName().equals(channel.getChannelName())).findFirst().orElse(null);

        if (is_channel_present != null) {
            return new ErrorResponse("Channel already exists", "error");
        }
        Channel savChannel = channelDb.save(channel);
        return (savChannel == null) ? new ErrorResponse("Channel not added", "error")
                : new SucessResponse("Channel added successfully", "success", savChannel);
    }

    public List<Channel> getAllChannels() {
        return channelDb.findAll();
    }

    public List<Channel> getAllUserChannels(UUID userId) {
        return channelDb.findAll().stream().filter(c -> c.getUserId().equals(userId)).toList();
    }

    public Channel getChannelById(UUID channelId) {
        return channelDb.findById(channelId).orElse(null);
    }

    public Object deleteChannelById(UUID channelId) {
        channelDb.deleteById(channelId);
        return new SucessResponse("Channel deleted successfully", "success", null);
    }

    public Object updateChannelById(UUID channelId, Channel newChannel) {
        Channel oldChannel = channelDb.findById(channelId).orElse(null);
        if (oldChannel == null) {
            return new ErrorResponse("Channel not found", "error");
        }
        oldChannel.setChannelName(newChannel.getChannelName());
        oldChannel.setDescription(newChannel.getDescription());
        channelDb.save(oldChannel);
        return new SucessResponse("Channel updated successfully", "success", oldChannel);
    }
}
