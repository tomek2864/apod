import { NASA_APOD_API_ENDPOINT } from "./control/constans";
const axios = require("axios");

export async function dataApod(requestBody, callback) {
  const requestEndpoint = NASA_APOD_API_ENDPOINT;
  const requestOptions = {
    body: requestBody
  };

  axios.defaults.headers.post["Content-Type"] = "application/json";
  try {
    const response = await axios.post(requestEndpoint, requestOptions.body);
    return callback(response.data, null);
  } catch (error) {
    return callback(error);
  }
}
