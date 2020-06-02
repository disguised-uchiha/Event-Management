const eventModel = require("../models/events");

module.exports.createEvent = (req, res, next) => {
  console.log(req.body);
  let event = new eventModel({
    //NOTE: never use the hyphen to name you html elements
    Name: req.body["event-name"],
    Description: req.body["event-description"],
    time: req.body["event-time"],
    date: req.body["event-date"],
    location: req.body["event-location"],
    certificate: req.body["certified"],
    fees: req.body["event-fees"],
    type: req.body["event-type"],
    // createdBy: ,
    // enrolled: ,
  });
  event
    .save()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  res.redirect("/");
};
