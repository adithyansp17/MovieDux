import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All");
  const [rating, setRating] = useState("All");

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const filterMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="Search movies here..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All</option>
            <option>Action</option>
            <option>Horror</option>
            <option>Fantasy</option>
            <option>Drama</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filterMovies.map((movie) => (
          <MovieCard movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
}
