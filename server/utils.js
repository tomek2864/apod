const url = require("url");
const config = require("./config");

module.exports = {
  generateWebAppURL: function(dateApodConfigData) {
    const baseUrlConfig = config.baseUrl;
    const APIkey = config.APIkey;
    const queryConfig = config.query;

    let requestQuery = { api_key: APIkey };

    requestQuery[queryConfig.date] = dateApodConfigData;

    return url.format({
      protocol: baseUrlConfig.protocol,
      hostname: baseUrlConfig.hostname,
      pathname: baseUrlConfig.path,
      query: requestQuery
    });
  }
};
