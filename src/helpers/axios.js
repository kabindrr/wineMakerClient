import axios from "axios";

export const apiProcessor = async (axiosObj) => {
  console.log(axiosObj);
  try {
    const { url, method, data } = axiosObj;
    const result = await axios({
      url,
      method,
      data,
    });
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
