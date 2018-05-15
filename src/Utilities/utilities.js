/* se creo un archivo donde se pueden crear funciones y posteriormente llamarlas
esta funcion la usamos en el componente

*/



//Aquí creamos la funcion leftPad que returna dos digitos en lugar de uno
function leftPad(number){
    const pad = "00";
    return pad.substring(0, pad.length - number.length) + number;
}

//Aqui declaramos una function para que se formateen los minutos y segundos
//y no se vean feos:
const formattedTime = (secs)=> {
    const minutes = parseInt(secs / 60, 10);
    const seconds = parseInt(secs % 60, 10);
    return `${minutes.toString()} : ${leftPad(seconds.toString())}`;
}

export default formattedTime;