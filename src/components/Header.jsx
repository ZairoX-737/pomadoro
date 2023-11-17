import React from "react";
import "../App.css";

import check from '../images/check.png'
import report from '../images/report.png'
import setting from "../images/setting.png";
import account from "../images/account.png";

function Header(){
    const Auth = () =>{
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
      var span = document.getElementsByClassName("close")[0];
      span.onclick = function() {
        modal.style.display = "none";
      }
      
      window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      } 
    }
    return (
      <div className="header">
        <a href="/" className="__logo">
          <img src={check} alt="" />
          <span>Pomofocus</span>
        </a>
        <div className="header_buttons">
          <button>
            <img src={report} alt="" />
            Report
          </button>
          <button>
            <img src={setting} alt="" />
            Setting
          </button>
          <button onClick={Auth}>
            <img src={account} alt="" />
            Login
          </button>
        </div>

        <div id="myModal" class="modal">
          <div className="modal-content-wrapper">
            <div className="modal-content">
              <span className="close">Close</span>
              <div className="modal-form-wrapper">
                <span>Login</span>
                <form className="modal-form">
                  <span>EMAIL</span>
                  <input type="text" placeholder="example@mail.com" />

                  <span>PASSWORD</span>
                  <input type="password" />

                  <button type="submit">Log in with Email</button>
                  <a href="/">Forgot Password</a>
                </form>
              </div>
            </div>
            <div className="form-create">
              <span>Do not have an account?</span>
              <a href="/">Create Account</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header;