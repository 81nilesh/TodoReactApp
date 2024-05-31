import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [todo, seTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    setTodos([...todos, { todo, isCompleted: false }])
    seTodo("");
  }

  const handleEdit = () => {

  }

  const handleDelete = () => {

  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input type="text" className='w-80' />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>Add</button>
        </div>
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text">
              {todo}
            </div>
            <div className="buttons">
              <button onClick={handleEdit} className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-2">Delete</button>
              <button onClick={handleDelete} className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-2">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
