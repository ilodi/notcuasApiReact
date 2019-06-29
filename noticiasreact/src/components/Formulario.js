import React, { Component } from 'react';

class Formulario extends Component {
   state = {
      categoria: ''
   }

   componentDidMount() {
      this.setState({
         categoria: 'general'
      })
   }

   //Al poner la e es para poder tener acceso a los valores cuandos e seleccionen
   handleChange = e => {
      this.setState({
         categoria: e.target.value
      }, () => {
         //Pasarlo a la pagina principal para que vea la consulta Mediante un callback
         this.props.consultarNoticias(this.state.categoria);
      })
   }

   render() {
      return (<>
         <div className="buscador row">
            <div className="col s12 m8 offset-m2">
               <form>
                  <h2>Encuentra Noticias por categoría</h2>
                  <div className="input-field col s12 m8">
                     <select
                        onChange={this.handleChange}
                     >
                        <option value="general">
                           General
                            </option>
                        <option value="business">
                           business
                            </option>
                        <option value="entertainment">
                           entertainment
                            </option>
                        <option value="science">
                           science
                            </option>
                        <option value="technology">
                           technology
                            </option>
                     </select>
                  </div>
               </form>
            </div>
         </div>
      </>);
   }
}

export default Formulario;