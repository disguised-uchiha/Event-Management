const eventModel = require("../models/events");

module.exports.home = (req, res, next) => {

    eventModel.find().then(events => {
        res.render("index", {
            pageTitle: "RCOE Events",
            events: events,
          });
    }).catch(err => console.log(err));
  
};
