import User from "../../models/user";
import { CREATE_USER } from "../Actions/userAction";

const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      const newUser = new User(
        action.userData.nom,
        action.userData.prenom,
        action.userData.dateNais,
        action.userData.etat,
        action.userData.etablissementVac,
        action.userData.dateVac1,
        action.userData.dateVac2
      );
      return {
        ...state,
        users: state.users.push(newUser),
      };
  }
  return state;
};
