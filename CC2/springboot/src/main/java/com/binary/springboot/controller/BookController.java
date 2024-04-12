package com.binary.springboot.controller;

import com.binary.springboot.model.Book;
import com.binary.springboot.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/book")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping("/save")
    public ResponseEntity<String> saveBook(@RequestBody Book book) {
        bookService.saveBook(book);
        return ResponseEntity.ok("Book saved successfully");
    }

    @GetMapping("/byTitle")
    public ResponseEntity<List<Book>> getBooksByTitle(@RequestParam String title) {
        List<Book> books = bookService.getBooksByTitle(title);
        if (books.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(books, HttpStatus.OK);
    }



}
