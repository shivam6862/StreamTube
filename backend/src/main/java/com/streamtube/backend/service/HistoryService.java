package com.streamtube.backend.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.streamtube.backend.database.HistoryDb;
import com.streamtube.backend.model.History;
import com.streamtube.backend.response.ErrorResponse;
import com.streamtube.backend.response.SucessResponse;

import java.util.List;
import java.util.Optional;

@Service
public class HistoryService {
    private final HistoryDb historyDb;

    @Autowired
    public HistoryService(HistoryDb historyDb) {
        this.historyDb = historyDb;
    }

    public Object addHistory(History history) {

        History savHistory = historyDb.save(history);
        return (savHistory == null) ? new ErrorResponse("History not added", "error")
                : new SucessResponse(
                        "History added successfully", "success", savHistory);
    }

    public List<History> getAllHistorys() {
        return historyDb.findAll();
    }

    public History getHistoryById(UUID history_id) {
        return historyDb.findById(history_id).orElse(null);
    }

    public Optional<History> getHistoryByUserId(UUID user_id) {
        return historyDb.findAll().stream().filter(c -> c.getUser_id().equals(user_id)).findFirst();
    }

    public Object deleteHistoryById(UUID history_id) {
        historyDb.deleteById(history_id);
        return new SucessResponse("History deleted successfully", "success", null);
    }

    public Object updateHistoryById(UUID history_id, History newhistory) {
        History oldHistory = historyDb.findById(history_id).orElse(null);
        if (oldHistory == null) {
            return new ErrorResponse("History not found", "error");
        }
        oldHistory.setVideo_id(newhistory.getVideo_id());
        oldHistory.setUser_id(newhistory.getUser_id());
        historyDb.save(oldHistory);
        return new SucessResponse("History updated successfully", "success", oldHistory);
    }
}
