/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";

function StepThird({ register, formState }) {
  const { isDirty, isValid } = formState;

  return (
    <>
      <label htmlFor="title" className="labelform">
        Date du debut du projet :
        <input
          className="inputformprojet"
          type="date"
          autoComplete="off"
          {...register("debut_date", { required: true })}
        />
      </label>
      <label htmlFor="title" className="labelform">
        Date de fin de projet :
        <input
          className="inputformprojet"
          type="date"
          autoComplete="off"
          {...register("estimate_deadline", { required: true })}
        />
      </label>

      <Link to="../StepThird">
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

export default StepThird;
