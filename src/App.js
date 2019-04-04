import React, { Component } from 'react';

import './App.css';
import MovieRow from './MovieRow';

class App extends Component {
	constructor(props) {
		super(props);

		const movies = [
			{
				id: 0,
				title: 'Avengers: EndGame',
				poster_src: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/dHjLaIUHXcMBt7YxK1TKWK1end9.jpg',
				overview:
					'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan'
			},
			{
				id: 1,
				title: 'The Avengers',
				poster_src: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/cezWGskPY5x7GaglTTRN4Fugfb8.jpg',
				overview:
					'When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D.'
			}
		];
		var movieRows = [];
		movies.forEach((movie) => {
			const movieRow = <MovieRow movie={movie} />;

			movieRows.push(movieRow);
		});

		this.state = {
			rows: movieRows
		};
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

				<input type="text" placeholder="Search..." className="search" />

				{this.state.rows}
			</div>
		);
	}
}

export default App;
