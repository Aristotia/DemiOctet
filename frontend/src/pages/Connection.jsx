/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from "react";

import "../assets/css/connection.css";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import perso from "../assets/image/perso1.png";
import logo from "../assets/image/logo.png";

function Connection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [displayConReg, setDisplayConReg] = useState(true);
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  const manageDisplay = () => {
    setDisplayConReg(!displayConReg);
  };

  const handleRegister = (data) => {
    setDisplayConReg(!displayConReg);
    axios
      .post(`http://localhost:5000/users/register`, data)
      .then(() => console.log(data), setPopup(!popup))
      .catch((error) => console.error(error));
  };

  const handleConnexion = (data) => {
    axios
      .post(`http://localhost:5000/users/login`, data)
      .then(() => {
        navigate("/home", { replace: true });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="homecontainer">
      <div className="centralcard">
        <div className="leftside">
          <h1 className="titlepresentation">
            Bienvenue sur <span className="colortextchange"> Unknow </span>
          </h1>
          <p className="textpresentation">
            La plateforme de management projet de{" "}
            <span className="colortextchange"> Apside </span>
          </p>
          <img src={perso} alt="perso" className="imgperso" />
        </div>
        {displayConReg ? (
          <div className="rightside">
            <img src={logo} alt="logo" className="logo" />

            <h1 className="title">Connexion</h1>

            <form
              className="formconnection"
              onSubmit={handleSubmit(handleConnexion)}
            >
              <input
                className="inputformlogin"
                placeholder="Email"
                autoComplete="off"
                {...register("email", { required: true })}
              />

              <input
                className="inputformlogin"
                placeholder="Password"
                type="password"
                autoComplete="off"
                {...register("password", { required: true })}
              />

              {errors.exampleRequired && <span>This field is required</span>}

              <button type="submit" className="submitbutton">
                Connexion
              </button>
            </form>

            <button
              type="button"
              className="register-button"
              onClick={manageDisplay}
            >
              <h2>S'enregistrer</h2>
            </button>
          </div>
        ) : (
          <div className="rightsideregister">
            <img src={logo} alt="logo" className="logo" />
            <h1 className="title">S'enregistrer</h1>

            <form
              className="formregister"
              onSubmit={handleSubmit(handleRegister)}
            >
              <input
                className="inputformregister"
                placeholder="Email"
                autoComplete="off"
                {...register("email", { required: true })}
              />

              <input
                className="inputformregister"
                type="password"
                placeholder="Password"
                autoComplete="off"
                {...register("password", { required: true })}
              />
              <input
                className="inputformregister"
                placeholder="Firstname"
                autoComplete="off"
                {...register("firstname", { required: true })}
              />
              <input
                className="inputformregister"
                placeholder="Lastname"
                autoComplete="off"
                {...register("lastname", { required: true })}
              />
              <input
                className="inputformregister"
                placeholder="Status"
                autoComplete="off"
                {...register("status", { required: true })}
              />
              <input
                className="inputformregister"
                placeholder="Phone Number"
                autoComplete="off"
                {...register("phone_number", { required: true })}
              />
              <input
                className="inputformregister"
                placeholder="Github"
                autoComplete="off"
                {...register("github_address", { required: true })}
              />

              {errors.exampleRequired && <span>This field is required</span>}

              <button type="submit" className="submitbutton">
                S'enregistrer
              </button>
            </form>
            {popup ? (
              <div className="popup-container">
                <h3>Enregistrement réussi !</h3>
                <button
                  type="button"
                  onClick={() => {
                    setPopup(!popup);
                  }}
                >
                  Fermer
                </button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default Connection;
