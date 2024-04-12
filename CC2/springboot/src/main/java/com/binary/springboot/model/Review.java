package com.binary.springboot.model;
import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="review")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="review_id")
    private Long id;

    @Column(unique=true)
    private String comment;
    @Column(unique=true)
    private int rating;
    @Column(columnDefinition = "TIMESTAMP", nullable = false, updatable = false)
    private LocalDateTime createdAt; // Date and time when the review was created

    @Column(unique = true)
    private String bookName;

    @OneToOne
    @JsonBackReference
    @JoinColumn(name = "user_id")
    private User user;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    public Review() {
    }

    public Review(Long id, String comment, int rating, LocalDateTime createdAt, String bookName, User user) {
        this.id = id;
        this.comment = comment;
        this.rating = rating;
        this.createdAt = createdAt;
        this.bookName = bookName;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    

    
    

    
}
