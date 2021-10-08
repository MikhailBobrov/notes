import React from 'react';
import { Mode, MiniTask, Task } from '../../types';
import { Form, Input, Button } from "antd";

// React.FunctionComponent<TaskFormProps> - я могу задать типы пропсов {  } + передали дженерик <>
// task - omSubmit - это объект (такой же как {text} в AddTask.js)
// defaultTask - полноценная Taska, которую мы нарисуем в данном компоненте, id - нужен для идентефикации при изменении

// типы пропсов :
export type TaskFormProps = {
    onSubmit: (task : MiniTask | Task)=> void;  // тип для функции, которая будет добавлять или изменять задачу
    mode: Mode;
    defaultTask : Task
};

export const TaskForm: React.FunctionComponent<TaskFormProps> = ({ onSubmit, mode, defaultTask }) => {

    // @ts-ignore
    return (
        <Form>
            {/*<Form.Item name="text" label="Task">*/}
            {/*    <Input.TextArea rows="3" />*/}
            {/*</Form.Item>*/}
            {/*<Form.Item>*/}
            {/*    <Button type="primary" htmlType="submit">*/}
            {/*        {mode === "add" ? "Add" : "Save"}*/}
            {/*    </Button>*/}
            {/*</Form.Item>*/}
        </Form>
    )
};