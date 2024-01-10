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
import com.streamtube.backend.model.Video;
import com.streamtube.backend.service.VideoService;

import java.util.List;
import java.util.UUID;

import jakarta.validation.Valid;

@RequestMapping("api/v1/video")
@RestController
public class VideoController {
    private final VideoService videoService;

    @Autowired
    public VideoController(VideoService videoService) {
        this.videoService = videoService;
    }

    @PostMapping
    public Object addVideo(@Valid @NonNull @RequestBody Video video) {
        return videoService.addVideo(video);
    }

    @GetMapping
    public List<Video> getAllVideos() {
        return videoService.getAllVideos();
    }

    @GetMapping(path = "{video_id}")
    public Video getVideoById(@PathVariable("video_id") UUID video_id) {
        return videoService.getVideoById(video_id);
    }

    @DeleteMapping(path = "{video_id}")
    public Object deleteVideoById(@PathVariable("video_id") UUID video_id) {
        return videoService.deleteVideoById(video_id);
    }

    @PutMapping(path = "{video_id}")
    public Object updateVideoById(@PathVariable("video_id") UUID video_id, @Valid @NonNull @RequestBody Video video) {
        return videoService.updateVideoById(video_id, video);
    }
}
