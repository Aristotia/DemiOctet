/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import SearchBar from "../components/SearchBar";
// import BurgerMenu from "../components/BurgerMenu";
import "../assets/css/connection.css";

import React, { useEffect, useState } from "react";
import { annotate } from "rough-notation";
import "../assets/css/connectihttps://github.com/Aristotia/DemiOctet/pull/19/conflict?name=frontend%252Fsrc%252Fpages%252FConnection.jsx&ancestor_oid=c37ba6af42e755881e39b8561ca151ea4f87eab6&base_oid=4b86caa92b0ae29b02c8e19e29366643f26fb4c8&head_oid=b98d5b74cab0cdf64c3998eba9f8fe662b0b37b4on.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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

  useEffect(() => {
    const e = document.querySelector(".colortextchange");
    const annotation = annotate(e, {
      type: "highlight",
      animationDuration: "1500",
    });
    annotation.show();
  }, []);

  return (
    <div className="homecontainer">
      <div className="centralcard">
        <div className="leftside">
          <h1
            className="titlepresentation"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Bienvenue sur <span className="colortextchange"> Unknow </span>
          </h1>
          {}
          <p
            className="textpresentation"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            La plateforme de management projet de{" "}
            <span className="colortextchange"> Apside </span>
          </p>

          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            src={perso}
            alt="perso"
            className="imgperso"
          />
        </div>
        <div className="rightside">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="title">Connexion</h1>

          <form className="formconnection" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="inputform"
              placeholder="Email"
              autoComplete="off"
              {...register("email", { required: true })}
            />

            <input
              className="inputform"
              placeholder="Password"
              autoComplete="off"
              {...register("password", { required: true })}
            />

            {errors.exampleRequired && <span>This field is required</span>}

            <div className="leftside">coucou</div>
            <div className="rightside"> lol</div>
            <SearchBar />

            <button type="submit" className="submitbutton">
              Connexion
              </button>
        {displayConReg ? (
          <div
            className="rightside"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
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

              <div className="leftside">coucou</div>
              <div className="rightside"> lol</div>
              <SearchBar />
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
              <div
                className="popup-container"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h3>Enregistrement réussi !</h3>
                <h3>Vous pouvez vous connecter !</h3>
                <button
                  type="button"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  onClick={() => {
                    location.reload();
                    setPopup(!popup);
                    setDisplayConReg(!displayConReg);
                  }}
                >
                  <h4>Fermer</h4>
                </button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
    </div>
    </div>
  );
}

export default Connection;
