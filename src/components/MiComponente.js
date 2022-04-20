import React,{Component} from "react";

class MiComponente extends Component{

    render(){

        let receta = {
            nombre: 'Te mando mis energías positivas amor',
            ingredientes: ['armonia', 'felicidad ', 'bendiciones'],
            calorias: 'Te deseo exitos en tu examen amor y  :)'
        };

        return(
            <div className="mi-componente">
                <h1> {receta.nombre}</h1>
                <h2> {receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingredientes, i) =>{
                            console.log(ingredientes);
                            return (
                                <li key= {i} >
                                    {ingredientes}
                                </li>
                            );
                        })
                    }
                </ol>
                <hr/>
            </div>
        );
    }
}


export default MiComponente;