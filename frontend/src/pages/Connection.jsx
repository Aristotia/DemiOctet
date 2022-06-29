/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from "react";

import SearchBar from "../components/SearchBar";
import BurgerMenu from "../components/BurgerMenu";
import "../assets/css/connection.css";
import { set, useForm } from "react-hook-form";
import perso from "../assets/image/perso1.png";
import logo from "../assets/image/logo.png";

function Connection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [displayConReg, setDisplayConReg] = useState(true);

  const manageDisplay = () => {
    setDisplayConReg(!displayConReg);
  };

  const handleregister = () => {
    setDisplayConReg(!displayConReg);
  };

  const onSubmit = (data) => console.log(data);
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

            <form className="formconnection" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="inputformlogin"
                placeholder="Email"
                autoComplete="off"
                {...register("email", { required: true })}
              />

              <input
                className="inputformlogin"
                placeholder="Password"
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
              <h2 className="register-title">S'enregistrer</h2>
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
          </div>
        ) : (
          <div className="rightsideregister">
            <img src={logo} alt="logo" className="logo" />
            <h1 className="title">S'enregistrer</h1>

            <form className="formregister" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="inputformregister"
                placeholder="Email"
                autoComplete="off"
                {...register("email", { required: true })}
              />

              <input
                className="inputformregister"
                placeholder="Password"
                autoComplete="off"
                {...register("password", { required: true })}
              />
              <input
                className="inputformregister"
                placeholder="Firstname"
                autoComplete="off"
                {...register("Firstname", { required: true })}
              />
              <input
                className="inputformregister"
                placeholder="Lastname"
                autoComplete="off"
                {...register("Lastname", { required: true })}
              />
              <input
                className="inputformregister"
                placeholder="Status"
                autoComplete="off"
                {...register("Status", { required: true })}
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
                {...register("github_adress", { required: true })}
              />

              {errors.exampleRequired && <span>This field is required</span>}

              <button
                type="submit"
                className="submitbutton"
                onClick={handleregister}
              >
                S'enregistrer
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Connection;
