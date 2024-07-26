import { fetchUser, signInUser, signUpUser } from "./userAxios";

export const fetchUserAction = () => async (dispatch) => {
  const { status, message } = await fetchUser();
};

export const loginUserAction = (obj) => async (dispatch) => {
  console.log(obj);
  const { status, message, tokens } = await signInUser(obj);

  if (status === "success") {
    localStorage.setItem("refreshJWT", tokens?.refreshJWT);
    sessionStorage.setItem("accessJWT", tokens?.accessJWT);
  }
};

export const signUpUserAction = (obj, navigate) => async (dispatch) => {
  const { status, message } = await signUpUser(obj);
  console.log(status, message);

  //navigate to login page if status is success
  if (status === "success") {
    navigate("/login");
  }
};
