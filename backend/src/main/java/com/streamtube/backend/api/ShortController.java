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

import java.util.UUID;
import java.util.List;
import com.mongodb.lang.NonNull;
import com.streamtube.backend.model.Short;
import com.streamtube.backend.service.ShortService;

import jakarta.validation.Valid;

@RequestMapping("api/v1/shorts")
@RestController
public class ShortController {

    private final ShortService shortsService;

    @Autowired
    public ShortController(ShortService shortsService) {
        this.shortsService = shortsService;
    }

    @PostMapping
    public Object addShort(@Valid @NonNull @RequestBody Short _short) {
        return shortsService.addShort(_short);
    }

    @GetMapping
    public List<Short> getAllShorts() {
        return shortsService.getAllShorts();
    }

    @GetMapping(path = "{short_id}")
    public Short getShortById(@PathVariable("short_id") UUID short_id) {
        return shortsService.getShortById(short_id);
    }

    @DeleteMapping(path = "{short_id}")
    public Object deleteShortById(@PathVariable("short_id") UUID short_id) {
        return shortsService.deleteShortById(short_id);
    }

    @PutMapping(path = "{short_id}")
    public Object updateShortById(@PathVariable("short_id") UUID short_id, @Valid @NonNull @RequestBody Short _short) {
        return shortsService.updateShortById(short_id, _short);
    }
}
