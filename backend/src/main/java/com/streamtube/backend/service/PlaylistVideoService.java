package com.streamtube.backend.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.streamtube.backend.database.PlaylistVideoDb;
import com.streamtube.backend.model.PlaylistVideo;
import com.streamtube.backend.response.ErrorResponse;
import com.streamtube.backend.response.SucessResponse;

@Service
public class PlaylistVideoService {

    private final PlaylistVideoDb playlistVideoDb;

    @Autowired
    public PlaylistVideoService(PlaylistVideoDb playlistVideoDb) {
        this.playlistVideoDb = playlistVideoDb;
    }

    public Object addPlaylistVideo(PlaylistVideo playlistVideo) {

        PlaylistVideo savPlaylistVideo = playlistVideoDb.save(playlistVideo);
        return (savPlaylistVideo == null) ? new ErrorResponse("PlaylistVideo not added", "error")
                : new SucessResponse(
                        "PlaylistVideo added successfully", "success", savPlaylistVideo);
    }

    public List<PlaylistVideo> getAllPlaylistVideos() {
        return playlistVideoDb.findAll();
    }

    public PlaylistVideo getPlaylistVideoById(UUID playlistVideo_id) {
        return playlistVideoDb.findById(playlistVideo_id).orElse(null);
    }

    public Object deletePlaylistVideoById(UUID playlistVideo_id) {
        playlistVideoDb.deleteById(playlistVideo_id);
        return new SucessResponse("PlaylistVideo deleted successfully", "success", null);
    }

    public Object updatePlaylistVideoById(UUID playlistVideo_id, PlaylistVideo newplaylistVideo) {
        PlaylistVideo oldPlaylistVideo = playlistVideoDb.findById(playlistVideo_id).orElse(null);
        if (oldPlaylistVideo == null) {
            return new ErrorResponse("PlaylistVideo not found", "error");
        }
        oldPlaylistVideo.setPlaylist_id(newplaylistVideo.getPlaylist_id());
        oldPlaylistVideo.setVideo_id(newplaylistVideo.getVideo_id());
        playlistVideoDb.save(oldPlaylistVideo);
        return new SucessResponse("PlaylistVideo updated successfully", "success", oldPlaylistVideo);
    }
}
