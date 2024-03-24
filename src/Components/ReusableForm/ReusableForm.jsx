import React from 'react';

const ReusableForm = ({handleFormSubmit, submitBtnText= 'Submit',children}) => {

    const handleLocalFormSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleFormSubmit(data)
    }
    return (
        <div>
            {children}
            <form className='flex flex-col gap-3' onSubmit={handleLocalFormSubmit}>
                <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                <input type="email" name='email' placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                <input type="password" placeholder='Your Password' name="password" id="" className="input input-bordered w-full max-w-xs" />
                <button type='submit' className="btn btn-success">{submitBtnText}</button>
            </form>
        </div>
    );
};

export default ReusableForm;