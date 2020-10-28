package com.ayus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ayus.model.Book;
import com.ayus.service.BookService;
import com.fasterxml.jackson.annotation.JsonIgnore;

@CrossOrigin("*")
@RestController
public class BookController {
	@Autowired
	private BookService BookService;
	
	@GetMapping("/api/book")
	public ResponseEntity<List<Book>> list(){
		List<Book> list = BookService.list();
		return ResponseEntity.ok().body(list);
	}
	
	@PostMapping("/api/book")
	@JsonIgnore
	public ResponseEntity<Book> save(@RequestBody Book book){
		Book obj =  BookService.save(book);
		return ResponseEntity.ok().body(obj);
	}
	
	@GetMapping("/api/book/{id}")
	public ResponseEntity<Book> get(@PathVariable("id") int id){
		Book obj =  BookService.get(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@PutMapping("/api/book/{id}")
	public void update(@PathVariable("id") int id, @RequestBody Book book){
		BookService.update(id, book);
	}
	
	@DeleteMapping("/api/book/{id}")
	public void delete(@PathVariable("id") int id){
		BookService.delete((int)id);
	}
}
