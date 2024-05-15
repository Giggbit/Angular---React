import User from './components/user/User'
import './App.css'
import InputTodo from './components/todos/InputTodo'

const App = () => {
  return (
    <>
      <div className='container'>
        <User/>
        <hr />
        <InputTodo />
        <hr />
      </div>
     
    </>
  )
}

export default App
