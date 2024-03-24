import React, { useEffect, useRef } from 'react';

const UnControllRefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(()=>{
        nameRef.current.focus()
    },[])

    const handleRefForm = e => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)

    }
    return (
        <form className='flex flex-col gap-3' onSubmit={handleRefForm}>
            <input ref={nameRef} type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
            <input ref={emailRef} type="email" name='email' placeholder="Your email" className="input input-bordered w-full max-w-xs" />
            <input ref={passwordRef} type="password" placeholder='Your Password' name="password" id="" className="input input-bordered w-full max-w-xs" />
            <button type='submit' className="btn btn-success">Submit</button>
        </form>
    );
};

export default UnControllRefForm;