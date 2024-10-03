import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function NewTodoForm({addTodo}) {
    const [newTodo, setNewTodo] = useState('');
    const [newDate, setNewDate] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodo({
            title: newTodo,
            dueDate: newDate,
            description: '',
        });
        setNewDate('');
        setNewTodo('');
    }


    return (
       
            <Form onSubmit={handleSubmit} className='form'>
                <Form.Group className='form-group' controlId="todoItem">
                    <Form.Label>ToDo item</Form.Label>
                    <Form.Control type="text" placeholder="Add todo item" 
                    value={newTodo}
                    onChange={(e)=> setNewTodo(e.target.value)}/>
                </Form.Group>
                <Form.Group className='form-group' controlId="dueDate">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control type="date" 
                    value={newDate}
                    onChange={(e)=> setNewDate(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Todo
                </Button>
            </Form>
        

    );

}


export default NewTodoForm;