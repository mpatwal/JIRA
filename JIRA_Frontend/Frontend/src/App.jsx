import './App.css'
import { Register } from './components/auth/Register'

function App() {
  return (
    <div className='p-10 justify-center w-screen h-screen flex items-center  bg-no-repeat bg-cover bg-center' style={{ backgroundColor: "oklch(78.9% 0.154 211.53)" }}>
      <Register />
    </div>
  )
}

export default App