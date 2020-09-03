import React from 'react';
import db from '../services/firebase';

import './styles.css';

function Todo(props) {
    return (
        <div className='container-todo'>
             <li>{props.todo.todo}</li>
             <button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete Todo</button>
        </div>
    );
}

export default Todo;