import User from "../../models/user";

export const CREATE_USER = "CREATE_USER";

export const createUser = (
  nom,
  prenom,
  dateNais,
  etat,
  etablissementVac,
  dateVac1,
  dateVac2
) => {
  return async (dispatch) => {
    // any async code you want!
    const response = await fetch(
      "https://passvacc-157d4-default-rtdb.europe-west1.firebasedatabase.app/users.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom,
          prenom,
          dateNais,
          etat: "init",
          etablissementVac: "none",
          dateVac1: "00/00/0000",
          dateVac2: "00/00/0000",
        }),
      }
    );

    const resData = await response.json();

    dispatch({
      type: CREATE_USER,
      userData: {
        nom,
        prenom,
        dateNais,
        etat,
        etablissementVac,
        dateVac1,
        dateVac2,
      },
    });
  };
};
