
import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Contador />
            <div>teste</div>
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
