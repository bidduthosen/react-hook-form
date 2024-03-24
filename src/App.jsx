import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RefForm from './Components/RefForm/RefForm'
import OnChangeForm from './Components/OnChangeForm/OnChangeForm'
import UnControllRefForm from './Components/UnControllRefForm/UnControllRefForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-semibold text-purple-500 uppercase text-center pt-8'>Form</h1>
      <div className='flex justify-center items-center'>
        {/* <RefForm></RefForm> */}
        {/* <OnChangeForm></OnChangeForm> */}
        <UnControllRefForm></UnControllRefForm>
      </div>
    </>
  )
}

export default App
