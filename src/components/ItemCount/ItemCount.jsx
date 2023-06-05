// Creo un ESTADO para almacenar el valor del contador.
// Importo el HOOK "useState"
import { useState } from "react";

// useState retorna un array con dos elementos, el 1ero es un estado, el 2do es una funcion que actualiza el valor del estado
const ItemCount = () => {
    const [contador, setContador] = useState(1)
    // entre los () colocare un valor inicial del estado (en este caso, 1)
    // Siempre trabajo con los estados en la parte superior de mi componente
    
    let maximo = 10;
    // let minimo = stock;
    //Agrego funciones para aumentar y disminuir el contador
    
    const incrementar = () => {
        if(contador < maximo) {
            setContador(contador + 1); 
        }
    }

    const decrementar = () => { 
        setContador(contador - 1);
    }
    return (
        <div>
            <button onClick={decrementar}> - </button>
            <p> {contador}  </p>
            <button onClick={incrementar}> + </button>
        </div>
    )
}

// Incrementar y decrementar van sin parentisis para evitar que se ejecute al renderizarse. Solo se ejecuta al usar el boton

export default ItemCount