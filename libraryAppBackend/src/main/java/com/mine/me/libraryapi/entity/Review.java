package com.mine.me.libraryapi.entity;
import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="review")
public class Review
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;
	
	@Column(name="user_email")
	private String userEmail;
	
	@Column(name="date")
	@CreationTimestamp
	private String date;
	
	@Column(name="rating")
	private float rating;
	
	@Column(name="book_id")
	private int bookId;
	
	@Column(name="review_description")
	private String reviewDescription;
}
