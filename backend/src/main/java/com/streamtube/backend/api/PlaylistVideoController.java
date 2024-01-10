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
import com.streamtube.backend.model.PlaylistVideo;
import com.streamtube.backend.service.PlaylistVideoService;

import jakarta.validation.Valid;

@RequestMapping("api/v1/playlistvideo")
@RestController
public class PlaylistVideoController {
    private final PlaylistVideoService playlistVideoService;

    @Autowired
    public PlaylistVideoController(PlaylistVideoService playlistVideoService) {
        this.playlistVideoService = playlistVideoService;
    }

    @PostMapping
    public Object addPlaylistVideo(@Valid @NonNull @RequestBody PlaylistVideo playlistVideo) {
        return playlistVideoService.addPlaylistVideo(playlistVideo);
    }

    @GetMapping
    public List<PlaylistVideo> getAllPlaylistVideos() {
        return playlistVideoService.getAllPlaylistVideos();
    }

    @GetMapping(path = "{playlistVideo_id}")
    public PlaylistVideo getPlaylistVideoById(@PathVariable("playlistVideo_id") UUID playlistVideo_id) {
        return playlistVideoService.getPlaylistVideoById(playlistVideo_id);
    }

    @DeleteMapping(path = "{playlistVideo_id}")
    public Object deletePlaylistVideoById(@PathVariable("playlistVideo_id") UUID playlistVideo_id) {
        return playlistVideoService.deletePlaylistVideoById(playlistVideo_id);
    }

    @PutMapping(path = "{playlistVideo_id}")
    public Object updatePlaylistVideoById(@PathVariable("playlistVideo_id") UUID playlistVideo_id,
            @Valid @NonNull @RequestBody PlaylistVideo playlistVideo) {
        return playlistVideoService.updatePlaylistVideoById(playlistVideo_id, playlistVideo);
    }
}
