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
import com.streamtube.backend.model.User;
import com.streamtube.backend.service.UserService;

import jakarta.validation.Valid;

@RequestMapping("api/v1/user")
@RestController
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public Object addUser(@Valid @NonNull @RequestBody User user) {
        return userService.addUser(user);
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(path = "{user_id}")
    public User getUserById(@PathVariable("user_id") UUID user_id) {
        return userService.getUserById(user_id);
    }

    @DeleteMapping(path = "{user_id}")
    public Object deleteUserById(@PathVariable("user_id") UUID user_id) {
        return userService.deleteUserById(user_id);
    }

    @PutMapping(path = "{user_id}")
    public Object updateUserById(@PathVariable("user_id") UUID user_id, @Valid @NonNull @RequestBody User user) {
        return userService.updateUserById(user_id, user);
    }
}
