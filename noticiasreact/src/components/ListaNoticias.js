import React from 'react';
import Noticia from './Noticia';

const ListaNoticias = ({ noticias }) => {
    return (
        <div className="row">
            {noticias.map(noticia => (
                <Noticia
                key={noticias.url}
                    noticia={noticia}
                />
            ))}
        </div>
    );
}

export default ListaNoticias;