import React from 'react';

class MovieRow extends React.Component {
	state = {};
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
								{movie.title}
								<p>{movie.overview}</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default MovieRow;
