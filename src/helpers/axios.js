import axios from "axios";

export const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};

export const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};

export const apiProcessor = async (axiosObj) => {
  try {
    const { url, method, data, isPrivate, isRefresh } = axiosObj;
    const headers = {
      Authorization: isPrivate
        ? isRefresh
          ? getRefreshJWT()
          : getAccessJWT()
        : null,
    };

    const result = await axios({
      url,
      method,
      data,
      headers,
    });
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
