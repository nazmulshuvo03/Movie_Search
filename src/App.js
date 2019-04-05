import React, { Component } from 'react';
import $ from 'jquery';

import './App.css';
import MovieRow from './MovieRow';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.performSearch('iron');
	}

	performSearch(searchTerm) {
		const urlString =
			'https://api.themoviedb.org/3/search/movie?api_key=65f79409283878f174a96aea0dc77a36&query=' + searchTerm;
		$.ajax({
			url: urlString,
			success: (searchResults) => {
				//console.log('Fetched Data Successfully');
				const results = searchResults.results;
				const movieRows = [];

				results.forEach((movie) => {
					movie.poster_src = 'http://image.tmdb.org/t/p/w185' + movie.poster_path;
					//console.log(movie);
					const movieRow = <MovieRow key={movie.id} movie={movie} />;
					movieRows.push(movieRow);
				});

				this.setState({
					rows: movieRows
				});
			},
			error: (xhr, status, err) => {
				console.error('Failed to fetch data');
			}
		});
	}

	searchChangeHandler(event) {
		const boundObject = this;
		const serchTerm = event.target.value;
		boundObject.performSearch(serchTerm);
	}

	render() {
		return (
			<div>
				<table className="titleBar">
					<tbody>
						<tr>
							<td>
								<img width="50" src="movie_db.png" alt="icon" />
							</td>
							<td width="8" />
							<td>
								<h1>Movie Search</h1>
							</td>
						</tr>
					</tbody>
				</table>

				<input
					type="text"
					placeholder="Search..."
					className="search"
					onChange={this.searchChangeHandler.bind(this)}
				/>

				{this.state.rows}
			</div>
		);
	}
}

export default App;
