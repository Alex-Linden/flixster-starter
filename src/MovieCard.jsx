import React from 'react';

export default function MovieCard({ movie }) {
    const { backdrop_path, title, vote_average } = movie;

    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
            <h2>{title}</h2>
            <p>Rating: {vote_average}</p>
        </div>
    );
}

