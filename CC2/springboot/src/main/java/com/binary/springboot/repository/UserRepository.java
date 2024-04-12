
package com.binary.springboot.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;

import com.binary.springboot.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE u.email = :email")
    List<User> findByEmailJPQL(String email);
    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);
}
