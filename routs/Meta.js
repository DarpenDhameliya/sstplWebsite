const express = require("express");
const router = express.Router();
const {errormessage, successmessage} = require("../response/Response");
const Meta = require("../Model/Meta");
const Authenticate = require("../Middleware/Authenticate");

router.get("/meta_list", (req, res) => {
  Meta.find({}, {__v: 0,date:0 , _id:0})
    .then((result) => {
      return res.status(200).send(successmessage(result));
    })
    .catch((error) => {
      return res.status(500).json(errormessage(error));
    });
});
router.get("/meta_list_server",Authenticate, (req, res) => {
  Meta.find({}, {__v: 0,date:0 , _id:0})
    .then((result) => {
      return res.status(200).send(successmessage(result));
    })
    .catch((error) => {
      return res.status(500).json(errormessage(error));
    });
});

router.post("/meta_add", Authenticate, (req, res) => {
  try {
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
      return res.status(402).json(errormessage(error));
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
          return res.status(500).json(errormessage(error));
        });
    }
  } catch (error) {
    return res.status(500).json(errormessage(error));
  }
});

router.put("/meta_update/:id", Authenticate, async (req, res) => {
  try {
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

      return res.status(402).json(errormessage(error));
    } else {
      let find_party = await Meta.findById(id);
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
          return res.status(200).send(successmessage(result));
        })
        .catch((err) => {
          return res.status(402).json(errormessage(error));
        });
    }
  } catch (error) {
    return res.status(500).json(errormessage(error));
  }
});

router.delete("/meta_delete/:id", Authenticate, (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.status(402).json(errormessage("Required"));
    } else {
      Meta.findByIdAndDelete(id)
        .then((result) => {
          return res.status(200).send(successmessage("Delete Successfully"));
        })
        .catch((err) => {
          return res.status(402).json(errormessage(err));
        });
    }
  } catch (error) {
    return res.status(500).json(errormessage(error));
  }
});

module.exports = router;
