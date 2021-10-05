import React from "react";
import { useState } from 'react';
import './AddTask.css';
import { Form, Input, Button } from "antd";

function AddTask({onAdd, mode}) {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert ('Please add a task');
            return
        }

        onAdd ( {text} )
        // очищает ввод
        setText('');
    }

    return (
        <div>
            <form className='add-form' onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Task</label>
                    <input value={text}
                           onChange={ (e) => setText(e.target.value)}
                           type="text" id="text"
                           placeholder="Введите заметку"/>
                </div>

                <input className='btn btn-block' type='submit' value='Add Task'/>
            </form>

            <Form>
                <Form.Item name="text" label="Task">
                    <Input.TextArea rows="3" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        {mode === "add" ? "Add" : "Save"}
                    </Button>
                </Form.Item>
            </Form>
        </div>



    );
}

export default AddTask;