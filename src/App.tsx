import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './styles/main.css'
import { AppBar } from './components/AppBar'
import { GoogleAuthProvider, User, signInWithPopup } from 'firebase/auth'
import { auth } from './services/firebase'


function App() {

  const [user, setUser] = useState<User>({} as User)

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider()

    await signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user)
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return <>
    <AppBar handleLogin={handleGoogleSignIn} />
    <div className='flex-col justify-center'>
      {user?.photoURL && <img src={user?.photoURL} alt="profile img" />}
      <strong className='text-white'>{user?.email}</strong>
    </div>
    <div className='max-w-lg mx-auto  text-slate-200'>
      <h1 className='text-6xl font-semibold text-center my-8'>GitHub Finder</h1>
      <Outlet />
    </div>
  </>
}

export default App
