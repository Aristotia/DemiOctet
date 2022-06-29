/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { Route, Routes } from "react-router-dom";
import StepOne from "../components/StepOne";
import "../assets/css/createproject.css";
import StepTwo from "../components/StepTwo";
import StepThird from "../components/StepThird";

function CreateProject() {
  const { register, handleSubmit, formState } = useForm({ mode: "onTouched" });

  const onSubmit = (data) => console.error(data);
  return (
    <div className="containerform">
      <div className="centralcardform">
        <div className="leftside">
          <h1 className="titlepresentation">
            Creation de votre <span className="colortextchange"> Projet </span>
          </h1>
          <p className="textpresentation">
            Merci de repondre a tout le formulaire
          </p>
        </div>
        <div className="rightside">
          <form className="formProject" onSubmit={handleSubmit(onSubmit)}>
            <div className="containerstep">
              <Routes>
                <Route
                  path="/"
                  element={
                    <StepOne register={register} formState={formState} />
                  }
                />
                <Route
                  path="StepTwo"
                  element={
                    <StepTwo register={register} formState={formState} />
                  }
                />
                <Route
                  path="StepThird"
                  element={
                    <StepThird register={register} formState={formState} />
                  }
                />
              </Routes>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProject;
