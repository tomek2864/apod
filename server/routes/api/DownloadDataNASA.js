const fetch = require("node-fetch");
const generateWebAppURL = require("../../utils").generateWebAppURL;

module.exports = app => {
  app.post("/nasa-apod", (req, res) => {
    const requestBody = req.body;
    const apiUrl = generateWebAppURL(requestBody.dateApod);
    console.log(apiUrl);
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        res.redirect("/error");
      });
  });
};
