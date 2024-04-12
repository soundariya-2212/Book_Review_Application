package com.binary.springboot.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id")
    private Long id;

    private String title;
    private String author;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonBackReference // Breaks the cyclic dependency when serializing
    private User user;

    public Book() {
    }
    
    // Getters and Setters

    public Book(Long id, String title, String author, User user) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    
}
