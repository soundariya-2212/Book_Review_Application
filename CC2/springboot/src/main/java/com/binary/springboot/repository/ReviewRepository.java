package com.binary.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.binary.springboot.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
