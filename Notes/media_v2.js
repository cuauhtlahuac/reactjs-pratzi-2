    //ESTA ES UNA FORMA DE IMPORTAR REACT Y EL COMPONENTE COMO React.Component
//import React from 'react' y en la clase estaba class Media extends Component
    //SE PUEDE HACER DE LA OTRA FORMA QUE ES DESCOMPONIENDO EL OBJETO.
import React, { Component } from 'react';
//Gracias a la configuracion de webpack se pueden importar aqui, archivos css
import './media.css';
//Se importa el validador tipado en propiedades
import PropTypes from 'prop-types';

    //Se crea la clase con el nombre del componente (Media en este caso) los componentes 
    //Se les coloca la primer letra en mayusculas, con la siguiente sintaxis; 

class Media extends Component{
        /*    //Aqui se coloca el constructor que sera llamado cuando el componente se renderize sin arrow function en el evento
        //constructor(props){
            //super(props) asi vamos a usar nuestras propiedades. sin arrow function en el evento
        //super(props);
            //Esto se coloca para usar un dato que necesitemos, lo enlazamos para que se muestre cuando se realize algun evento
            //Es decir enlazar el evento que pertenece al DOM con mi clase sin arrow function en el evento   
        //this.handleClick = this.handleClick.bind(this);
        }   */
        state = {
            autor: "Rodrigo Aristeo"
        }

        //Aqui se pueden poner los eventos, LEONIDAS USA EL ARROW FUNCTION PARA EVITAR EL CONSTRUCTOR Y AHORRARNOS CODIGO, ESTO PERTENECE AL ECMA script 6(2015)
        //handleClick(event){alert(this.props.title);}    
    handleClick = (event) => {
        this.setState({
            autor: 'Ricardo Celis'
        })
    }
        //Aqui es donde se va a renderizar
    render(){
        //En esta seccion se colocan los estilos
        const styles = {
            container: {
                cursor: 'pointer',
                color: '#44546b',
                border: '1px solid red',
                display: 'none',
            }
        }
        //se retorna el valor escrito en JSX
        return (           
            <div className="Media">
            {/* style se aplica directo en el componente, className se aplica importando el archivo css */}
                <div className='Media-cover' onClick={this.handleClick}>
                    <img src={this.props.img} alt='bit' width={260} height={160}/>
                    <h1 className='Media-title'>{this.props.title}</h1>  
                    <p className='Media-author'>{this.state.autor}</p>
                </div>
                <p style={styles.container}>Ejemplo de poner styles dentro del componente</p>
            </div>
        )
    }
}
/*Se installo desde 'npm install prop-types --save', posteriormente se crea un objeto como el siguiente/ esto sirve para hacer muchas valdaciones
para ver todas las validaciones posibles checar el enlace https://reactjs.org/docs/typechecking-with-proptypes.html */
Media.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    autor: PropTypes.string.isRequired,
    media: PropTypes.oneOf(['video','audio'])
}

//se debe exportar el componente creado
export default Media;