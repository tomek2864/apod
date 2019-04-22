keyApi = require("./key");

module.exports = {
  baseUrl: {
    protocol: "https",
    hostname: "api.nasa.gov",
    path: "/planetary/apod"
  },
  query: {
    date: "date"
  },

  APIkey: keyApi.APIkey
};
