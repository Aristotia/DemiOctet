/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import "../assets/css/connection.css";
import { useForm } from "react-hook-form";
import perso from "../assets/image/perso1.png";
import logo from "../assets/image/logo.png";

function Connection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

            <button type="submit" className="submitbutton">
              Connexion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Connection;
