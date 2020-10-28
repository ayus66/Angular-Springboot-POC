package com.ayus.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ayus.model.Book;

@Service
public interface BookService {
	
	Book save(Book book);
//	
	Book get(int id);
	
	List<Book> list();
	
	void update(int id, Book book);
//	
	void delete(int id);

}
