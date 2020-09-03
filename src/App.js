import React, { useState, useEffect  } from 'react';
import './App.css';
import Todo from './Todo';
import db from './services/firebase';
import firebase from 'firebase';
import Header from './Header';

function App() {

  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState('');

  useEffect(() => {

    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})));
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="App">
      <Header />

      <form>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={addTodo} type='submit'>Add Todo</button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
