import React, { Component } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = {
    noticias: []
  }

  componentDidMount() {
    //llamar metodo
    this.consultarNoticias();
  }

  //Creando metodo via Arrow 
  //Puedes pasar este metodo por un props
  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category${categoria}&apiKey=4c286d9d2ebd402897fa358d403e863a`;

    //fetch perdir datos mediante un json
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      //como se llama igual en el estado y en la varible solo se puede dejar uno
      noticias: noticias.articles
    })
  }

  render() {
    return (
      <>
        <Header titulo="Noticias API" />
        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias={this.consultarNoticias} />
          <ListaNoticias
            noticias={this.state.noticias} />
        </div>
      </>
    );
  }
}


export default App;
