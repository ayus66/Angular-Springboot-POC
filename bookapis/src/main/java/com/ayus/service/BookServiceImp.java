package com.ayus.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ayus.dao.BookDAO;
import com.ayus.model.Book;
@Service
public class BookServiceImp implements BookService {
	@Autowired
	private BookDAO BookDAO;
	
	@Override
	@Transactional
	public Book save(Book book) {
		// TODO Auto-generated method stub
		return BookDAO.save(book);
	}
//
	@Override
	@Transactional
	public Book get(int id) {
		// TODO Auto-generated method stub
		return BookDAO.findById(id).get();
	}

	@Override
	@Transactional
	public List<Book> list() {
		// TODO Auto-generated method stub
		return BookDAO.findAll();
	}

	@Override
	@Transactional
	public void update(int id, Book book) {
		// TODO Auto-generated method stub
		Book obj = BookDAO.getOne(id);
		obj.setAuthor(book.getAuthor());
		obj.setTitle(book.getTitle());
		BookDAO.save(obj);
	}

	@Override
	@Transactional
	public void delete(int id) {
		Book obj = BookDAO.findById(id).get();
		BookDAO.deleteById((int)obj.getId());
	}
}
