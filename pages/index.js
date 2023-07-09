import React, { useState } from 'react';

function Home() {
return <DisplayContador />;
}

function DisplayContador(){

const [contador, SetContador ] = useState(1);

function AdicionarContador(){

SetContador(contador + 1);

}

return (<div> 
            <div>
               {contador}  
            </div>
            <div>  
                <button onClick={AdicionarContador}>Adicionar</button>
            </div> 
        </div>
        )
}

export default Home;