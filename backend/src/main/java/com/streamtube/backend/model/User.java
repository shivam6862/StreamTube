package com.streamtube.backend.model;

import java.util.Objects;
import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;

@Document(collection = "Users")
public class User {
    @Id
    private UUID user_id;
    @NotBlank
    private String username;
    @NotBlank
    private String email;
    @NotBlank
    private String password;
    @NotBlank
    private String registration_date;

    public User(@JsonProperty("user_id") UUID user_id, @JsonProperty("username") String username,
            @JsonProperty("email") String email, @JsonProperty("password") String password) {
        this.user_id = (user_id == null) ? UUID.randomUUID() : user_id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.registration_date = java.time.LocalDate.now().toString();
    }

    public UUID getUser_id() {
        return this.user_id;
    }

    public String getUsername() {
        return this.username;
    }

    public String getEmail() {
        return this.email;
    }

    public String getPassword() {
        return this.password;
    }

    public String getRegistration_date() {
        return this.registration_date;
    }

    public void setUser_id(UUID user_id) {
        this.user_id = user_id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRegistration_date(String registration_date) {
        this.registration_date = registration_date;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;
        User curr_user = (User) obj;
        return user_id == curr_user.user_id &&
                Objects.equals(email, curr_user.email) &&
                Objects.equals(username, curr_user.username);
    }

    @Override
    public int hashCode() {
        return Objects.hash(user_id, email, username);
    }

}
