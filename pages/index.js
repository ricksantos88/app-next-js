import { useState } from "react";

function Home() {
    return (
        <div>
            <h1>Home - Teste</h1>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, setcontador] = useState(1);

    function adicionarContador(){
        setcontador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Contar</button>
        </div>
    )

}

export default Home;