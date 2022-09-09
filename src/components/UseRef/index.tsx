import React, { useEffect, useRef, useState } from "react";

const UseRef: React.FC = () => {
    //Exemplo 1
    const [name, setName] = useState<string>('');

    const renders = useRef<number>(0);

    useEffect(() => {
        renders.current = renders.current + 1;
    })

    return (
        <div>
            <input value={name} onChange={(event) => setName(event.target.value)}></input>
            <p>Hello! My name is {name}</p>
            <p>Renders: {renders.current}</p>
        </div>
    )
}

export default UseRef;