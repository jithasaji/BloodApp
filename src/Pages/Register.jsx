import React, { useState } from 'react'
import './Register.css'
import loginimage from '../Assets/login.jpg'
import { Link } from 'react-router-dom'

export default function Register() {
  const [hover, setHover] = useState(false)
  const [usertype, setUserType] = useState("User")
  console.log(hover);

  const handleChangeUser = (res) => {
    setUserType(res)
    setHover(false)

  }

  return (
    <div>
      <div className="login">
        <img src={loginimage} alt="login image" className="login__img" />

        <form action="" className="login__form">
          <div onMouseLeave={() => setHover(false)} className='Change-User'>
            <i onMouseEnter={() => setHover(true)} className="ri-settings-5-fill settings-icon" ></i>

            {!hover &&
              <p>
                {usertype}
              </p>
            }
            {hover &&


              <div className='drop-down-user'>
                <ul>
                  <li onClick={() => handleChangeUser("Hospital")}>Hospital</li>
                  <li onClick={() => handleChangeUser("Person")}>Person</li>
                </ul>
              </div>
            }
          </div>
          <h1 className="login__title">Register</h1>

          <div className="login__content">

            <div className="login__box">
              <i className="ri-user-3-line login__icon"></i>

              <div className="login__box-input">
                <input type="Full Name" required className="login__input" id="login-email" placeholder=" " />
                <label for="login-email" className="login__label">{usertype === "Person" ? "Full Name" : "Hospital Name"}</label>
              </div>
            </div>
            <div className="login__box">
              <i class="ri-mail-fill"></i>
              <div className="login__box-input">
                <input type="email" required className="login__input" id="login-email" placeholder=" " />
                <label for="login-email" className="login__label">Email</label>
              </div>
            </div>
            <div className="login__box">
              <i class="ri-lock-line"></i>

              <div className="login__box-input">
                <input type="password" required className="login__input" id="login-email" placeholder=" " />
                <label for="login-email" className="login__label">Password</label>
              </div>
            </div>
            {usertype === "Person" &&
              <div className="login__box">
                <i class="ri-heart-pulse-fill"></i>
                <div className="login__box-input">
                  <input type="Blood Group" required className="login__input" id="login-email" placeholder=" " />
                  <label for="login-email" className="login__label">Blood Group</label>
                </div>
              </div>
            }

            <div className="login__box">
              <i class="ri-map-pin-fill"></i>
              <div className="login__box-input">
                <input type="Location" required className="login__input" id="login-email" placeholder=" " />
                <label for="login-email" className="login__label">Location</label>
              </div>
            </div>



          </div>


          <button type="submit" className="login__button">Register</button>

          <p className="login__register">
            Already have an account? <Link to={'/Login'}>Login</Link>
          </p>
        </form>
      </div>

      <script src="assets/js/main.js"></script>
    </div>
  )
}
