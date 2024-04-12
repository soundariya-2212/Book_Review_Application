
package com.binary.springboot.service;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.binary.springboot.model.User;
import com.binary.springboot.repository.UserRepository;

import jakarta.transaction.Transactional;
@Transactional
@Service
public class UserService {

    @Autowired
    private final UserRepository userRepository;

    public ResponseEntity<String> saveUsers(User users) {
        try {
            userRepository.save(users);
            return ResponseEntity.ok("Users created successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save users: " + e.getMessage());
        }
    }

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public ResponseEntity<?> saveUser(User user) {
        Optional<User> userExists = userRepository.findByEmail(user.getEmail());
        if (!userExists.isPresent()) {
            userRepository.save(user);
            return new ResponseEntity<>("User created successfully", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("User with email already exists", HttpStatus.CONFLICT);
        }
    }

    //jpql query
    public List<User> getUsersByEmail(String email) {
        return userRepository.findByEmailJPQL(email);
    }


    public ResponseEntity<?> updateUser(String email, User user) {
        Optional<User> userExists = userRepository.findByEmail(email);
        if (userExists.isPresent()) {
            User existingUser = userExists.get();
            existingUser.setUsername(user.getUsername());
            existingUser.setPassword(user.getPassword());
            // existingUser.setEmail(user.getEmail());
            // existingUser.setPhone(user.getPhone());
            userRepository.save(existingUser);
            return new ResponseEntity<>(existingUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User with email " + email + " not found", HttpStatus.NOT_FOUND);
        }
    }
    // public List<User> getAllUsers() {
    //     return userRepository.findAll();
    // }
    public Page<User> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    public boolean deleteUser(String username) {
        Optional<User> userExists = userRepository.findByUsername(username);
        if (userExists.isPresent()) {
            userRepository.delete(userExists.get());
            return true; // User found and deleted successfully
        }
        return false; // User not found
    }
    public ResponseEntity<?> patchUser(String email, User user) {
        Optional<User> userExists = userRepository.findByEmail(email);
        if (userExists.isPresent()) {
            User existingUser = userExists.get();
            
            // Update only the fields that are not null in the request
            if (user.getUsername() != null) {
                existingUser.setUsername(user.getUsername());
            }
            if (user.getPassword() != null) {
                existingUser.setPassword(user.getPassword());
            }
            if (user.getEmail() != null) {
                existingUser.setEmail(user.getEmail());
            }
            if (user.getPhone() != null) {
                existingUser.setPhone(user.getPhone());
            }

            // Save the updated user
            userRepository.save(existingUser);
            
            return new ResponseEntity<>(existingUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User with email " + email + " not found", HttpStatus.NOT_FOUND);
        }
    }

}
