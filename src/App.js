import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div className="App">
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
			</div>
		);
	}
}

export default App;
