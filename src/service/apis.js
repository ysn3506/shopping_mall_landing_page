import API from "./base_api";


export const getAssets = async (path) => {
  try {
    const response = await API.get(`/photos/${path}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


