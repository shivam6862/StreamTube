package com.streamtube.backend.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.streamtube.backend.database.WatchLaterDb;
import com.streamtube.backend.model.WatchLater;
import com.streamtube.backend.response.ErrorResponse;
import com.streamtube.backend.response.SucessResponse;

@Service
public class WatchLaterService {
    private final WatchLaterDb watchLaterDb;

    @Autowired
    public WatchLaterService(WatchLaterDb watchLaterDb) {
        this.watchLaterDb = watchLaterDb;
    }

    public Object addWatchLater(WatchLater watchLater) {

        WatchLater savWatchLater = watchLaterDb.save(watchLater);
        return (savWatchLater == null) ? new ErrorResponse("WatchLater not added", "error")
                : new SucessResponse(
                        "WatchLater added successfully", "success", savWatchLater);
    }

    public List<WatchLater> getAllWatchLaters() {
        return watchLaterDb.findAll();
    }

    public WatchLater getWatchLaterById(UUID watchLater_id) {
        return watchLaterDb.findById(watchLater_id).orElse(null);
    }

    public Optional<WatchLater> getWatchLaterByUserId(UUID user_id) {
        return watchLaterDb.findAll().stream().filter(c -> c.getUser_id().equals(user_id)).findFirst();
    }

    public Object deleteWatchLaterById(UUID watchLater_id) {
        watchLaterDb.deleteById(watchLater_id);
        return new SucessResponse("WatchLater deleted successfully", "success", null);
    }

    public Object updateWatchLaterById(UUID watchLater_id, WatchLater newwatchLater) {
        WatchLater oldWatchLater = watchLaterDb.findById(watchLater_id).orElse(null);
        if (oldWatchLater == null) {
            return new ErrorResponse("WatchLater not found", "error");
        }
        oldWatchLater.setVideo_id(newwatchLater.getVideo_id());
        oldWatchLater.setUser_id(newwatchLater.getUser_id());
        watchLaterDb.save(oldWatchLater);
        return new SucessResponse("WatchLater updated successfully", "success", oldWatchLater);
    }
}
