import axios from 'axios';

const baseURL = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
