/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Link } from "react-router-dom";

function StepTwo({ register, formState }) {
  const { isDirty, isValid } = formState;
  return (
    <>
      <label htmlFor="title" className="labelform">
        Etat de progression:
        <input
          className="inputformprojet"
          placeholder="40%"
          type="number"
          max="100"
          min="0"
          autoComplete="off"
          {...register("progress", { required: true })}
        />
      </label>
      <label htmlFor="title" className="labelform">
        Description:
        <input
          className="inputformdescription"
          placeholder="Description"
          type="text"
          autoComplete="off"
          {...register("description", { required: true })}
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

export default StepTwo;
