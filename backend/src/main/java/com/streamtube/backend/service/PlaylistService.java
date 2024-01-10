package com.streamtube.backend.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.streamtube.backend.database.PlaylistDb;
import com.streamtube.backend.model.Playlist;
import com.streamtube.backend.response.ErrorResponse;
import com.streamtube.backend.response.SucessResponse;

@Service
public class PlaylistService {
    private final PlaylistDb playlistDb;

    @Autowired
    public PlaylistService(PlaylistDb playlistDb) {
        this.playlistDb = playlistDb;
    }

    public Object addPlaylist(Playlist playlist) {
        Playlist savPlaylist = playlistDb.save(playlist);

        return (savPlaylist == null) ? new ErrorResponse("Playlist not added", "error")
                : new SucessResponse("Playlist added successfully", "success", savPlaylist);
    }

    public List<Playlist> getAllPlaylists() {
        return playlistDb.findAll();
    }

    public Playlist getPlaylistById(UUID playlist_id) {
        return playlistDb.findById(playlist_id).orElse(null);
    }

    public Optional<Playlist> getPlaylistByUserId(UUID user_id) {
        return playlistDb.findAll().stream().filter(c -> c.getUser_id().equals(user_id)).findFirst();
    }

    public Object deletePlaylistById(UUID playlist_id) {
        playlistDb.deleteById(playlist_id);
        return new SucessResponse("Playlist deleted successfully", "success", null);
    }

    public Object updatePlaylistById(UUID playlist_id, Playlist newplaylist) {
        Playlist oldPlaylist = playlistDb.findById(playlist_id).orElse(null);
        if (oldPlaylist == null) {
            return new ErrorResponse("Playlist not found", "error");
        }
        oldPlaylist.setTitle(newplaylist.getTitle());
        oldPlaylist.setDescription(newplaylist.getDescription());
        playlistDb.save(oldPlaylist);
        return new SucessResponse("Playlist updated successfully", "success", oldPlaylist);
    }
}
