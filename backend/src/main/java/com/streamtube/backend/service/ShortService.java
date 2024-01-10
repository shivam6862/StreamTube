package com.streamtube.backend.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.streamtube.backend.model.Short;
import com.streamtube.backend.response.ErrorResponse;
import com.streamtube.backend.response.SucessResponse;
import com.streamtube.backend.database.ShortsDb;

@Service
public class ShortService {
    private final ShortsDb shortsDb;

    @Autowired
    public ShortService(ShortsDb shortsDb) {
        this.shortsDb = shortsDb;
    }

    public Object addShort(Short _short) {
        Short savShort = shortsDb.save(_short);

        return (savShort == null) ? new ErrorResponse("Short not added", "error")
                : new SucessResponse(
                        "Short added successfully", "success", savShort);
    }

    public List<Short> getAllShorts() {
        return shortsDb.findAll();
    }

    public Short getShortById(UUID short_id) {
        return shortsDb.findById(short_id).orElse(null);
    }

    public Object deleteShortById(UUID short_id) {
        shortsDb.deleteById(short_id);
        return new SucessResponse("Short deleted successfully", "success", null);
    }

    public Object updateShortById(UUID short_id, Short newshort) {
        Short oldShort = shortsDb.findById(short_id).orElse(null);
        if (oldShort == null) {
            return new ErrorResponse("Short not found", "error");
        }
        oldShort.setTitle(newshort.getTitle());
        oldShort.setDescription(newshort.getDescription());
        oldShort.setChannel_image_url(newshort.getChannel_image_url());
        oldShort.setThumbnail_image_url(newshort.getThumbnail_image_url());
        oldShort.setTags(newshort.getTags());
        shortsDb.save(oldShort);
        return new SucessResponse("Short updated successfully", "success", oldShort);
    }
}
