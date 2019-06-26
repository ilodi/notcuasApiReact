import React, { Component } from 'react';

class App extends Component {
  state = {}

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=4c286d9d2ebd402897fa358d403e863a`;

    //fetch perdir datos mediante un json
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    console.log(noticias);
  }


  render() {
    return (
      <>
        <h1>ss</h1>
      </>
    );
  }
}


export default App;
