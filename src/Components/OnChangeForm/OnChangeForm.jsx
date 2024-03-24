import React, { useState } from 'react';

const OnChangeForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');


    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleForm = (e) => {
        e.preventDefault()
        if(password.length < 6){
            setError('password must be 6 character')
        }
        else{
            setError('')
        }
        console.log(name)
        console.log(email)
        console.log(password)
    }
    return (
        <form onSubmit={handleForm} className='flex flex-col gap-3'>
            <input onChange={handleNameChange} type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
            <input onChange={handleEmailChange} type="email" name='email' placeholder="Your email" className="input input-bordered w-full max-w-xs" />
            <input onChange={handlePasswordChange} type="password" placeholder='Your Password' name="password" id="" className="input input-bordered w-full max-w-xs" />
            <button type='submit' className="btn btn-success">Success</button>
            <p>{error}</p>
            <div className='pt-7 flex gap-4  flex-col'>
                <h2>{name}</h2>
                <h2>{email}</h2>
                <h2>{password}</h2>
            </div>
        </form>
    );
};

export default OnChangeForm;