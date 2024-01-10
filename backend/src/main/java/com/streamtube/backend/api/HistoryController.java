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
import com.streamtube.backend.model.History;
import com.streamtube.backend.service.HistoryService;

import jakarta.validation.Valid;

@RequestMapping("api/v1/history")
@RestController
public class HistoryController {
    private final HistoryService historyService;

    @Autowired
    public HistoryController(HistoryService historyService) {
        this.historyService = historyService;
    }

    @PostMapping
    public Object addHistory(@Valid @NonNull @RequestBody History history) {
        return historyService.addHistory(history);
    }

    @GetMapping
    public List<History> getAllHistorys() {
        return historyService.getAllHistorys();
    }

    @GetMapping(path = "{history_id}")
    public History getHistoryById(@PathVariable("history_id") UUID history_id) {
        return historyService.getHistoryById(history_id);
    }

    @GetMapping(path = "user/{user_id}")
    public Object getHistoryByUserId(@PathVariable("user_id") UUID user_id) {
        return historyService.getHistoryByUserId(user_id);
    }

    @DeleteMapping(path = "{history_id}")
    public Object deleteHistoryById(@PathVariable("history_id") UUID history_id) {
        return historyService.deleteHistoryById(history_id);
    }

    @PutMapping(path = "{history_id}")
    public Object updateHistoryById(@PathVariable("history_id") UUID history_id,
            @Valid @NonNull @RequestBody History history) {
        return historyService.updateHistoryById(history_id, history);
    }
}
