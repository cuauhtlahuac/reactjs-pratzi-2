    //ESTA ES UNA FORMA DE IMPORTAR REACT Y EL COMPONENTE COMO React.Component
//import React from 'react' y en la clase estaba class Media extends Component
    //SE PUEDE HACER DE LA OTRA FORMA QUE ES DESCOMPONIENDO EL OBJETO.
import React, { Component } from 'react';
//Gracias a la configuracion de webpack se pueden importar aqui, archivos css
import './media.css';

    //Se crea la clase con el nombre del componente (Media en este caso) los componentes 
    //Se les coloca la primer letra en mayusculas, con la siguiente sintaxis; 

class Media extends Component{
    //Aqui es donde se va a renderizar
    render(){
    //En esta seccion se colocan los estilos
        const styles = {
            container: {
                cursor: 'pointer',
                color: '#44546b',
                border: '1px solid red',
            }
        }
        //se retorna el valor de JSX
        return (           
            <div className="Media">
            {/* style se aplica directo en el componente, className se aplica importando el archivo css */}
                <div>
                    <img src='./images/covers/bitcoin.jpg' alt='bit' width={260} height={160}/>
                    <h1 className='Media-title'>Por que aprender react?</h1>  
                    <p className='Media-author'>Cuitlahuac Aristeo</p>
                </div>
                <p style={styles.container}>Ejemplo de poner styles dentro del componente</p>
            </div>
        )
    }
}
//se debe exportar el componente creado
export default Media;