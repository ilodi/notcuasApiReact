import React from 'react';

const Noticia = ({ noticia }) => {
	//codigo js es mejor aquí
	//Extraer Datos mediante distrocchorin
	const { urlToImage, url, title, description, source } = noticia;
	//Condicionalemnte cargar la imagen si esta disponible

	const imagen = {urlToImage} ? 
		<div className="card-image">
			<img src={urlToImage} alt={title}/>
			<span className="card-title">
				{source.name}
			</span>
		</div>
	: null;
	return (
		<div className="col s12 m6 l4">
			<div className="card">
				{imagen}
				<div className="card-content">
					<h3>{title}</h3>
					<p>
						{description}
					</p>
				</div>
				<div className="card-action"> 
					<a href={url} target="_black" rel="noopener noreferrer" className="waves-effect waves-light btn" >
						Ver Más
					</a>
				</div>
			</div>
		</div>
	);
}

export default Noticia;