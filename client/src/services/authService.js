import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if(!role || !email || !password){
        return alert("Please Provide All Fields")
    }
    store.dispatch(userLogin({e, email, password, role}));
  } catch (error) {
    console.log("Error in login: ", error);
  }
};
export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  organisationName,
  hospitalName,
  website,
  address,
  phone
) => {
  e.preventDefault();
  try {
    store.dispatch(userRegister(
      {name,
      role,
      email,
      password,
      organisationName,
      hospitalName,
      website,
      address,
      phone}
    ))
  } catch (error) {
    console.log("Error in Register: ", error);
  }
};
