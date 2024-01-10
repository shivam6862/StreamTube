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
import com.streamtube.backend.model.WatchLater;
import com.streamtube.backend.service.WatchLaterService;

import jakarta.validation.Valid;

@RequestMapping("api/v1/watchlater")
@RestController
public class WatchLaterController {
    private final WatchLaterService watchLaterService;

    @Autowired
    public WatchLaterController(WatchLaterService watchLaterService) {
        this.watchLaterService = watchLaterService;
    }

    @PostMapping
    public Object addWatchLater(@Valid @NonNull @RequestBody WatchLater watchLater) {
        return watchLaterService.addWatchLater(watchLater);
    }

    @GetMapping
    public List<WatchLater> getAllWatchLaters() {
        return watchLaterService.getAllWatchLaters();
    }

    @GetMapping(path = "{watchLater_id}")
    public WatchLater getWatchLaterById(@PathVariable("watchLater_id") UUID watchLater_id) {
        return watchLaterService.getWatchLaterById(watchLater_id);
    }

    @GetMapping(path = "user/{user_id}")
    public Object getWatchLaterByUserId(@PathVariable("user_id") UUID user_id) {
        return watchLaterService.getWatchLaterByUserId(user_id);
    }

    @DeleteMapping(path = "{watchLater_id}")
    public Object deleteWatchLaterById(@PathVariable("watchLater_id") UUID watchLater_id) {
        return watchLaterService.deleteWatchLaterById(watchLater_id);
    }

    @PutMapping(path = "{watchLater_id}")
    public Object updateWatchLaterById(@PathVariable("watchLater_id") UUID watchLater_id,
            @Valid @NonNull @RequestBody WatchLater watchLater) {
        return watchLaterService.updateWatchLaterById(watchLater_id, watchLater);
    }
}
