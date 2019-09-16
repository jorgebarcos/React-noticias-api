import React, { Component } from 'react';

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
		return <h1>Noticias API React</h1>;
	}
}

export default App;
