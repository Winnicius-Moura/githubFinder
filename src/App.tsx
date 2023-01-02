import { Outlet } from 'react-router-dom'
import './styles/main.css'

function App() {
  return <>
    <div className='max-w-lg mx-auto  text-slate-200'>
      <h1 className='text-6xl font-semibold text-center my-8'>GitHub Finder</h1>
      <Outlet />
    </div>
  </>
}

export default App
