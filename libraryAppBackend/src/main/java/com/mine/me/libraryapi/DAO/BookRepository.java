package com.mine.me.libraryapi.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mine.me.libraryapi.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>
{

}
