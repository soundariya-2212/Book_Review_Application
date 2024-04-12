
package com.binary.springboot.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.RequestParam;
import com.binary.springboot.model.User;
import com.binary.springboot.service.UserService;


@RestController
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public ResponseEntity<String> saveUsers(@RequestBody User userData) {
        userService.saveUsers(userData);
        return ResponseEntity.ok("Users created successfully");
    }

    @PutMapping("/update/{email}")
    public ResponseEntity<?> updateUser(@PathVariable String email, @RequestBody User user) {
        try {
            return userService.updateUser(email, user);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/byEmail")
    public ResponseEntity<List<User>> getUsersByEmail(@RequestParam String email) {
        List<User> users = userService.getUsersByEmail(email);
        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
   
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(
        @RequestParam(defaultValue = "0") Integer pageNo,
        @RequestParam(defaultValue = "2") Integer pageSize,
        @RequestParam(defaultValue = "id") String sortBy,
        @RequestParam(defaultValue = "asc") String sortOrder) {

        try {
            Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.by(Sort.Direction.fromString(sortOrder), sortBy));
            Page<User> usersPage = userService.getAllUsers(pageable);
            List<User> users = usersPage.getContent();

            if (users.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @DeleteMapping("/delete/{username}")
    public ResponseEntity<?> deleteUser(@PathVariable String username) {
        try {
            // Call the service method to delete the user
            userService.deleteUser(username);
            return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete user", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PatchMapping("/update/{email}")
    public ResponseEntity<?> patchUser(@PathVariable String email, @RequestBody User user) {
        try {
            return userService.patchUser(email, user);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}



    

