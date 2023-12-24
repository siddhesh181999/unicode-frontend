import React from 'react'
import "./Account.css"

const Register = () => {

    const handleSubmit = (event)=>{
        event.preventDefault()
        debugger;
        const data=new FormData(event.currentTarget);

        const userData={
            firstName:data.get("firstname"),
            lastName:data.get("lastName"),
            email:data.get("email"),
            password:data.get("password")
        }
        // console.log("userData",userData);
    }
  return (
    <section>
            <div className="sign_container">
                {/*<div className="sign_header">
                    <img src="../../../images/blacklogoamazon.png" alt="signupimg" />
                </div>*/}
                <div className="sign_form">
                    <form onSubmit={handleSubmit}>
                        <h1>Create account</h1>
                        <div className="form_data">
                            <label htmlFor="firstname">First name</label>
                            <input type="text" name="firstname"
                               required
                                id="firstname" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="lastName" name="lastName"
                                required
                                id="lastName" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">email</label>
                            <input type="email" name="email"
                                required
                                id="email" />
                        </div>

                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                 required
                                id="password" placeholder="At least 6 characters" />
                        </div>

                        <div className="form_data">
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password" name="confirmPassword"
                                 required
                                id="confirmPassword" placeholder="At least 6 characters" />
                        </div>
                        
                        <div className="signin_info">
                        <input type="checkbox" name='' id='' />
                            <p>By continuing, I agree to the terms of use and privacy policy</p>
                        </div>
                        
                        <button type="submit" className="signin_btn" >Continue</button>
                    </form>
                </div>
               
            </div>
        </section>
  )
}

export default Register