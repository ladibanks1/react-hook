import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');

    const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        posterURL: '',
        rating: ''
    });

    const handleAddMovie = () => {
        setMovies([...movies, newMovie]);
        setNewMovie({ title: '', description: '', posterURL: '', rating: '' }); // Reset form
    };

    const filteredMovies = movies.filter(movie => {
        const matchesTitle = movie.title.toLowerCase().includes(title.toLowerCase());
        const matchesRating = rating ? movie.rating >= rating : true;
        return matchesTitle && matchesRating;
    });

    return (
        <div className="app">
            <h1>Movie List</h1>

            <div className="add-movie">
                <input
                    type="text"
                    placeholder="Title"
                    value={newMovie.title}
                    onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newMovie.description}
                    onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Poster URL"
                    value={newMovie.posterURL}
                    onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Rating"
                    value={newMovie.rating}
                    onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
                    min="0"
                    max="10"
                />
                <button onClick={handleAddMovie}>Add Movie</button>
            </div>

            <Filter title={title} setTitle={setTitle} rating={rating} setRating={setRating} />
            <MovieList movies={filteredMovies} />
        </div>
    );
};

export default App;
