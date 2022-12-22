import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissions = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
