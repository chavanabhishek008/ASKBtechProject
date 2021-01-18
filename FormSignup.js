//rface to bring the code snippet
import useForm from './useForm'
import React from 'react'
import validate from './validateInfo'
import './Form.css';
import validateInfo from './validateInfo';

const FormSignup = (submitForm) => {
    const{handledChange,handledSubmit, values,errors}=useForm(submitForm, validate);
    return (
    

        <div className="form-content-right">
            <form className="form" onSubmit={handledSubmit}
            >
                <h1>Get started with us today!
                    Create your account by filling the information.
                </h1>
                {/*code division to print the box of username */}
                <div className='form-inputs'>
                    <label 
                    htmlfor='username' 
                    className='form-label'>
                    Username 
                    </label>
                    <input 
                    id="username"
                    type='username' 
                    name='username'
                    className='form-inputs'
                    placeholder="Enter your name"
                    value={values.username}
                    onChange={handledChange}
                    />
                    {errors.username && <p>{errors.username}</p>}

                </div>

                <div className="form-inputs">
                    <label 
                    htmlfor="Email" 
                    className="form-label">
                    Email ID 
                    </label>
                    <input 
                    id='Email'
                    type="text" 
                    name='email'
                    className="form-inputs"
                    placeholder="Enter your E-mail"
                    value={values.Email}
                    onChange={handledChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className="form-inputs">
                    <label 
                    htmlfor="Password" 
                    className="form-label">
                    Password 
                    </label>
                    <input 
                    id='Password'
                    type="Password" 
                    name='Password'
                    className="form-inputs"
                    placeholder="Enter your password"
                    value={values.Password}
                    onChange={handledChange}
                    />
                    {errors.Password && <p>{errors.Password}</p>}
                </div>

                <div className="form-inputs">
                    <label 
                    htmlfor="password2" 
                    className="form-label">
                    Confirm password 
                    </label>
                    <input 
                    id='password2'
                    type="Password" 
                    name='password2'
                    className="form-inputs"
                    placeholder="Re-enter your password"
                    value={values.password2}
                    onChange={handledChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>

                <button className="form-input-button" type="submit">
                    Sign up
                </button>
                <span className="form-input-login">
                    Already have an account? Login <a 
                    href='#'>here</a>
                </span>

            </form>

    
        </div>
    )
}

export default FormSignup
