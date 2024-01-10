package com.streamtube.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.streamtube.backend.database.VideoDb;
import com.streamtube.backend.model.Video;
import com.streamtube.backend.response.ErrorResponse;
import com.streamtube.backend.response.SucessResponse;

import java.util.List;
import java.util.UUID;

@Service
public class VideoService {
    private final VideoDb videoDb;

    @Autowired
    public VideoService(VideoDb videoDb) {
        this.videoDb = videoDb;
    }

    public Object addVideo(Video video) {
        Video savVideo = videoDb.save(video);
        return (savVideo == null) ? new ErrorResponse("Video not added", "error")
                : new SucessResponse(
                        "Video added successfully", "success", savVideo);
    }

    public List<Video> getAllVideos() {
        return videoDb.findAll();
    }

    public Video getVideoById(UUID video_id) {
        return videoDb.findById(video_id).orElse(null);
    }

    public Object deleteVideoById(UUID video_id) {
        videoDb.deleteById(video_id);
        return new SucessResponse("Video deleted successfully", "success", null);
    }

    public Object updateVideoById(UUID video_id, Video newvideo) {
        Video oldVideo = videoDb.findById(video_id).orElse(null);
        if (oldVideo == null) {
            return new ErrorResponse("Video not found", "error");
        }
        oldVideo.setTitle(newvideo.getTitle());
        oldVideo.setDescription(newvideo.getDescription());
        oldVideo.setChannel_image_url(newvideo.getChannel_image_url());
        oldVideo.setThumbnail_image_url(newvideo.getThumbnail_image_url());
        oldVideo.setTags(newvideo.getTags());
        videoDb.save(oldVideo);
        return new SucessResponse("Video updated successfully", "success", oldVideo);
    }
}
