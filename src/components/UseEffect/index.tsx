import React, { useState, useEffect } from "react";

const UseEffect: React.FC = () => {
    const [items, setItems] = useState<any[]>([]);

    const [resourceType, setResourceType] = useState<string>('posts');

    useEffect(() => {
        
        const fetchResourseType = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
            const responseJson = await response.json();
            setItems(responseJson);
        }

        fetchResourseType();

    }, [resourceType]);

    const changeResourseType = (resourceTypee: string) => {
        setResourceType(resourceTypee);
    };
    
    return (
        <div>
            <h1>{resourceType}</h1>
            <div style={{display: "flex", alignItems: "center"}}>
                <button onClick={() => changeResourseType('posts')}>Posts</button>
                <button onClick={() => changeResourseType('comments')}>Comments</button>
                <button onClick={() => changeResourseType('todos')}>To do</button>
            </div>

            {items.map(item => (
                <p key={item.id}>{item.title}</p>
            ))}
        </div>
    );
}

export default UseEffect;