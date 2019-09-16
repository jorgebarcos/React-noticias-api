import React, { Component, Fragment } from 'react';
import Header from './components/Header';

class App extends Component {
	state = {
		noticias: []
	};

	componentDidMount() {
		this.consultarNoticias();
	}

	consultarNoticias = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=e8f71163bb6340cc86dd69f051bc0b7c`;

		const respuesta = await fetch(url);
		const noticias = await respuesta.json();

		this.setState({
			noticias: noticias.articles
		});
	};

	render() {
		return (
			<Fragment>
				<Header titulo="Noticias React API" />

				<div className="container white contenedor-noticias" />
			</Fragment>
		);
	}
}

export default App;
