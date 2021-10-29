import axios from "axios";
import { GET_INCIDENTS_BY_ID } from "./../urls";

const getIncidentsById = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(GET_INCIDENTS_BY_ID)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getIncidentsById;
