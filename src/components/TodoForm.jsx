  
import React, { useState, useEffect, useRef } from 'react';

export default function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    // See add todo
    const handleChange = e => {
        setInput(e.target.value);
    };

    //No refresh page
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            {props.edit ? (
                <>
                    <input placeholder='Update your item'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                        className='todo-input edit' />

                    <button onClick={handleSubmit} className='todo-button edit'>Artualizar</button>
                </>
            ) : (
                <>
                    <input placeholder='Introduce una nueva tarea'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        className='todo-input'
                        ref={inputRef} />
                    <button onClick={handleSubmit} className='todo-button'>Añadir</button>
                </>
            )}
        </form>
    );
}