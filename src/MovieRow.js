import React from 'react';

class MovieRow extends React.Component {
	state = {};

	viewMovie() {
		//console.log(this.props.movie.title);
		const url = 'http://www.themoviedb.org/movie/' + this.props.movie.id;
		window.location.href = url;
	}

	render() {
		const { movie } = this.props;
		return (
			<div>
				<table key={movie.id}>
					<tbody>
						<tr>
							<td>
								<img src={movie.poster_src} alt="poster" />
							</td>
							<td>
								<h3>{movie.title}</h3>
								<p>{movie.overview}</p>
								<input type="button" name="button" onClick={this.viewMovie.bind(this)} value="View" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default MovieRow;
