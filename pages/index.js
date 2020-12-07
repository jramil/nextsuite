
import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Home Principal do Projeto em 06/12/2020 23:43 </h1>
            <Contador />
            <div> Filipe Deschamps</div>
            <div> Como Eu Programo e Hospedo Sites da Forma Mais Moderna que Existe [GUIA DEFINITIVO]</div>
            <div> Youtube: https://www.youtube.com/watch?v=EW7m2WIvFgQ&t=53s </div>
        </div>
    )
}

function Contador() {
    const [contador, setcontador] = useState(1);

    function adicionarcontador() {
        setcontador(contador + 1);
    }
    return (
        < div >
            <div>{contador}</div>
            <button onClick={adicionarcontador}>Adicionar</button>
        </div >)
}
export default Home
