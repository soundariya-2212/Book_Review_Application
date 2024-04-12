
package com.binary.springboot.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;



import jakarta.persistence.*;
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(unique=true)
    private String username;
    
    @Column(unique=true)
    private String password;
    
    @Column(unique=true)
    private String email;
    
    @Column(unique=true)
    private String phone;

    @OneToOne(mappedBy = "user" ,cascade = CascadeType.ALL)
    @JsonManagedReference
    private Review review;

    
    public User() {
    }

    public User(Long id,String username, String password, String email, String phone) {
        this.id=id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    
    // @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    // @JsonManagedReference
    // private List<Book> bookdata=new ArrayList<>();
   
    // public List<Book> getBookdata() {
    //     return bookdata;
    // }
    // public void setBooddata(List<Book> bookdata) {
    //     this.bookdata = bookdata;
    // }

}
