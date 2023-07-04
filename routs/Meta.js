const express = require("express");
const router = express.Router();
const {errormessage, successmessage} = require("../response/Response");
const Meta = require("../Model/Meta");
const Authenticate = require("../Middleware/Authenticate");

router.get("/meta_list", (req, res) => {

  Meta.find({}, {__v: 0})
    .then((result) => {
      return res.status(200).send(successmessage(result));
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send(errormessage(error));
    });
});
router.post("/meta_add", Authenticate,(req, res) => {
  // let {page_size, pageNumber} = req.body;
  console.log(req)
  let {url, title, description, key, schema} = req.body;

  let error = [];
  if (!url || !title || !description || !key || !schema) {
    if (!url) {
      error.push("Required");
    }
    if (!title) {
      error.push("Required");
    }
    if (!description) {
      error.push("Required");
    }
    if (!key) {
      error.push("Required");
    }
    if (!schema) {
      error.push("Required");
    }
    return res.status(402).send(errormessage(error));
  } else {
    Meta.create({
      url,
      title,
      description,
      key,
      schema,
    })
      .then((result) => {
        return res.status(200).send(successmessage(["Add Successfully"]));
      })
      .catch((error) => {
        console.log("err");
        return res.status(500).send(errormessage(error));
      });
  }
});
router.put("/meta_update/:id", Authenticate, async (req, res) => {

  let {url, title, description, key, schema} = req.body;
  let id = req.params.id;
  let error = [];
  if (!url || !title || !description || !key || !schema || !id) {
    if (!url) {
      error.push("Required");
    }
    if (!title) {
      error.push("Required");
    }
    if (!description) {
      error.push("Required");
    }
    if (!key) {
      error.push("Required");
    }
    if (!schema) {
      error.push("Required");
    }
    if (!id) {
      error.push("Id Required");
    }
    return res.status(402).send(errormessage(error));
  } else {
    let find_party = await Meta.findById(id);
    console.log(find_party);
    let new_data = {};
    // if
    if (url) {
      new_data.url = url;
    }
    if (title) {
      new_data.title = title;
    }
    if (description) {
      new_data.description = description;
    }
    if (key) {
      new_data.key = key;
    }
    if (schema) {
      new_data.schema = schema;
    }

    Meta.findByIdAndUpdate(id, {$set: new_data}, {new: true})
      .then((result) => {
        console.log(result);
        return res.status(200).send(successmessage(result));
      })
      .catch((err) => {
        console.log(err);
        return res.status(402).send(errormessage(error));
      });
  }
});
router.delete("/meta_delete/:id", Authenticate, (req, res) => {
  let id = req.params.id;
  if (!id) {
    return res.status(402).send(errormessage("Required"));
  } else {
    Meta.findByIdAndDelete(id)
      .then((result) => {
        return res.status(200).send(successmessage('Delete Successfully'));
      })
      .catch((err) => {
        return res.status(402).send(errormessage(err));
      });
  }
});

module.exports = router;
