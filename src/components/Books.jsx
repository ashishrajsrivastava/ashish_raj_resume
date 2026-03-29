import React from 'react';
import book1 from '../assets/book1.jpg';
import book2 from '../assets/book2.jpg';

const imageMap = {
  "book1.jpg": book1,
  "book2.jpg": book2
};

const Books = ({ books }) => {
  if (!books || books.length === 0) return null;

  return (
    <section className="main-section">
      <h2 className="main-section-title">
        <svg
          className="section-icon"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        Books &amp; Publications
      </h2>
      <div className="books-grid">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            {book.image && imageMap[book.image] && (
              <img src={imageMap[book.image]} alt={book.title} className="book-thumbnail" />
            )}
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-publisher">Published by {book.publisher}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Books;
