package com.streamtube.backend.api;

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
import com.streamtube.backend.model.Playlist;
import com.streamtube.backend.service.PlaylistService;

import jakarta.validation.Valid;

@RequestMapping("api/v1/playlist")
@RestController
public class PlaylistController {

    private final PlaylistService playlistService;

    @Autowired
    public PlaylistController(PlaylistService playlistService) {
        this.playlistService = playlistService;
    }

    @PostMapping
    public Object addPlaylist(@Valid @NonNull @RequestBody Playlist playlist) {
        return playlistService.addPlaylist(playlist);
    }

    @GetMapping
    public Object getAllPlaylists() {
        return playlistService.getAllPlaylists();
    }

    @GetMapping(path = "{playlist_id}")
    public Object getPlaylistById(@PathVariable("playlist_id") UUID playlist_id) {
        return playlistService.getPlaylistById(playlist_id);
    }

    @GetMapping(path = "user/{user_id}")
    public Object getPlaylistByUserId(@PathVariable("user_id") UUID user_id) {
        return playlistService.getPlaylistByUserId(user_id);
    }

    @DeleteMapping(path = "{playlist_id}")
    public Object deletePlaylistById(@PathVariable("playlist_id") UUID playlist_id) {
        return playlistService.deletePlaylistById(playlist_id);
    }

    @PutMapping(path = "{playlist_id}")
    public Object updatePlaylistById(@PathVariable("playlist_id") UUID playlist_id,
            @Valid @NonNull @RequestBody Playlist playlist) {
        return playlistService.updatePlaylistById(playlist_id, playlist);
    }
}
