import { apiProcessor } from "../../helpers/axios";

const userEP = "http://localhost:8020/api/v1/users";

export const signUpUser = (obj) => {
  const axiosObj = {
    url: userEP + "/register",
    method: "post",
    data: obj,
  };
  return apiProcessor(axiosObj);
};
export const signInUser = (obj) => {
  const axiosObj = {
    url: userEP + "/login",
    method: "post",
    data: obj,
  };
  return apiProcessor(axiosObj);
};
