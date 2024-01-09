package com.streamtube.backend.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.streamtube.backend.database.UserDb;
import com.streamtube.backend.response.ErrorResponse;
import com.streamtube.backend.response.SucessResponse;
import com.streamtube.backend.model.User;

@Service
public class UserService {
    private final UserDb userDb;

    @Autowired
    public UserService(UserDb userDb) {
        this.userDb = userDb;
    }

    public Object addUser(User user) {
        User is_user_present = userDb.findAll().stream().filter(u -> u.getEmail().equals(user.getEmail())).findFirst()
                .orElse(null);
        if (is_user_present != null) {
            return new ErrorResponse("User already exists", "error");
        }
        User savUser = userDb.save(user);
        return (savUser == null) ? new ErrorResponse("User not added", "error")
                : new SucessResponse(
                        "User added successfully", "success", savUser);
    }

    public List<User> getAllUsers() {
        return userDb.findAll();
    }

    public User getUserById(UUID user_id) {
        return userDb.findById(user_id).orElse(null);
    }

    public Object deleteUserById(UUID user_id) {
        userDb.deleteById(user_id);
        return new SucessResponse("User deleted successfully", "success", null);
    }

    public Object updateUserById(UUID user_id, User newuser) {
        User oldUser = userDb.findById(user_id).orElse(null);
        if (oldUser == null) {
            return new ErrorResponse("User not found", "error");
        }
        oldUser.setEmail(newuser.getEmail());
        oldUser.setPassword(newuser.getPassword());
        oldUser.setUsername(newuser.getUsername());
        userDb.save(oldUser);
        return new SucessResponse("User updated successfully", "success", oldUser);
    }
}
