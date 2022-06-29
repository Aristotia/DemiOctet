/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from "react";

function StepThird({ register, formState }) {
  const { isDirty, isValid } = formState;

  const type = [
    "Banque",
    "Assurance",
    "Mutuelles/Retraites",
    "Telecoms",
    "Multimedia",
    "Retail",
    "Defense",
    "Aeronautique",
    "Spatial",
    "Automobile/Transport",
  ];
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
      <label htmlFor="title" className="labelform">
        Secteur d'activité:
        <select
          className="selectformprojet"
          type="text"
          name="category"
          {...register("sector", { required: "required" })}
        >
          <option selected disabled hiddenvalue="null">
            {" "}
            Merci de choisir une categorie
          </option>
          {type.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="btn-form"
        disabled={!isDirty || !isValid}
      >
        Suivant !
      </button>
    </>
  );
}

export default StepThird;
