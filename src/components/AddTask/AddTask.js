import React from "react";
import { useState } from 'react';
import './AddTask.css'


function AddTask({onAdd}) {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert ('Please add a task');
            return
        }

        onAdd ({text})
        // очищает ввод
        setText('')
    }

    return (
        <div>
            <form className='add-form' onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Task</label>
                    <input value={text}
                           onChange={(e) => setText(e.target.value)}
                           type="text" id="text"
                           placeholder="Введите заметку"/>
                </div>

                <input className='btn btn-block' type='submit' value='Save Task'/>
            </form>

        </div>

    );
}

export default AddTask;