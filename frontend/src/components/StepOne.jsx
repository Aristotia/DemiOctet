/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Link } from "react-router-dom";

function StepOne({ register, formState }) {
  const { isDirty, isValid } = formState;

  return (
    <>
      <label htmlFor="title" className="labelform">
        Titre du projet :
        <input
          className="inputformprojet"
          placeholder="Titre du Projet"
          type="text"
          autoComplete="off"
          {...register("title", { required: true })}
        />
      </label>
      <label htmlFor="title" className="labelform">
        Lien Github :
        <input
          className="inputformprojet"
          placeholder="Lien Github"
          type="text"
          autoComplete="off"
          {...register("github_adress", { required: true })}
        />
      </label>

      <Link to="../StepTwo">
        <button
          type="button"
          className="btn-form"
          disabled={!isDirty || !isValid}
        >
          Suivant !
        </button>
      </Link>
    </>
  );
}

export default StepOne;
