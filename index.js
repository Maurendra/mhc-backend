const express = require("express");
const mongoose = require("mongoose");
const app = express();

const UserModel = require("./models/User");
const EventModel = require("./models/Event");

app.use(express.json());
app.disable("etag");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

mongoose.connect(
  "mongodb+srv://maurendra:mhcmongo@cluster0.tykbn.mongodb.net/mhc?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.get("/", async (req, res) => {
  const user = new UserModel({
    id: 5,
    username: "company_3",
    password: "company_3",
    type: "company",
    name: "Company 3",
  });

  try {
    // await user.save();
  } catch (error) {
    console.log(error);
  }
});

app.get("/users", (req, res) => {
  UserModel.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/users/vendor", (req, res) => {
  UserModel.find({ type: "vendor" })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/events", (req, res) => {
  EventModel.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/events", async (req, res) => {
  let body = req.body;
  const event = new EventModel({
    company_id: body.company_id,
    vendor_id: body.vendor_id,
    vendor_name: body.vendor_name,
    event_name: body.event_name,
    proposed_date_1: body.proposed_date_1,
    proposed_date_2: body.proposed_date_2,
    proposed_date_3: body.proposed_date_3,
    confirm_date: body.confirm_date,
    status: body.status,
    created_at: body.created_at,
    location: body.location,
    note: "",
  });

  try {
    await event.save();
    res.send(200);
  } catch (error) {
    console.log(error);
  }
});

app.put("/events", async (req, res) => {
  let body = req.body;
  const event = {
    confirm_date: body.confirm_date,
    status: body.status,
    note: body.note,
  };
  console.log(body.id, event);

  try {
    await EventModel.findByIdAndUpdate(body.id, event);
    res.send(200);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
