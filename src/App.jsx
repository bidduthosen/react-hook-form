import './App.css'
import RefForm from './Components/RefForm/RefForm'
import OnChangeForm from './Components/OnChangeForm/OnChangeForm'
import UnControllRefForm from './Components/UnControllRefForm/UnControllRefForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'

function App() {

  const handleSignUpForm = data => {
    console.log("sign up",data)
  }
  const handleUpdateForm = data => {
    console.log('handleUpdateForm',data)
  }


  return (
    <>
      <h1 className='text-3xl font-semibold text-purple-500 uppercase text-center pt-8'>Form</h1>
      <div className='flex justify-center items-center'>
        {/* <RefForm></RefForm> */}
        {/* <OnChangeForm></OnChangeForm> */}
        {/* <UnControllRefForm></UnControllRefForm> */}
        <div className=' space-y-11'>

            <ReusableForm 
            handleFormSubmit={handleSignUpForm}
            formText= "Sign Up"
            >
              <div className='text-center font-bold pb-4 pt-3'>
                <h1>Sign UP</h1>
                <p>Sign up now, your email provited now.</p>
              </div>
            </ReusableForm>

            <ReusableForm 
            handleFormSubmit={handleUpdateForm} 
            submitBtnText='Update'
            formText= "Update Now"
            >
              <div className='text-center font-bold pb-4'>
                <h1>Update NOw</h1>
                <p>Update Your information. go first</p>
              </div>
            </ReusableForm>
        </div>
      </div>
    </>
  )
}

export default App
