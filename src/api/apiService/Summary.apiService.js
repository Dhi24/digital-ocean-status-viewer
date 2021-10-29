import axios from "axios";
import GET_SUMMARY_BY_ID from "./../urls";

const getSummaryById = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(GET_SUMMARY_BY_ID)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getSummaryById;
