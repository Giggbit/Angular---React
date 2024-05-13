import User from './components/user/User'
import './App.css'

const App = () => {
  return (
    <>
      <div className='container'>
        <User/>
        <hr />
        <InputTodo/>
        <hr />
      </div>
     
    </>
  )
}

export default App
