package com.mine.me.libraryapi.DAO;
import org.springframework.data.jpa.repository.JpaRepository;

import com.mine.me.libraryapi.entity.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> 
{

}
