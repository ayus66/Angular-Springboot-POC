package com.ayus.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ayus.model.Book;

@Repository
public interface BookDAO extends JpaRepository<Book, Integer>{
	
}
