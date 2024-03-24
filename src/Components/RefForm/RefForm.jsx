import React from 'react';

const RefForm = () => {
    const  handleRefForm = e => {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.password .value)
    }
    return (
        <form className='flex flex-col gap-3' onSubmit={handleRefForm}>
            <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
            <input type="email" name='email' placeholder="Your email" className="input input-bordered w-full max-w-xs" />
            <input type="password" placeholder='Your Password' name="password" id="" className="input input-bordered w-full max-w-xs" />
            <button type='submit' className="btn btn-success">Success</button>
        </form>
    );
};

export default RefForm;