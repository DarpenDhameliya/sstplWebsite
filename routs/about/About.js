const express = require("express");
const router = express.Router();
// const careerdetails = require("../Model/CareerDetails");
const {errormessage, successmessage} = require("../../response/Response");
const Authenticate = require("../../Middleware/Authenticate");
const commoncomponent = require("../../Model/CommonComponent");

router.get("/about_list", (req, res) => {
  commoncomponent
    .find({}, {__v: 0})
    .then((result) => {
      return res.status(200).send(successmessage(result));
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send(errormessage(error));
    });
});
router.post("/about_add", Authenticate, (req, res) => {
  // let {page_size, pageNumber} = req.body;
  console.log(req.body);
  let {abouthead, aboutcontent, visionheading, visioncontent, missionheading, missioncontent, valheading, valuecontent} = req.body;

  let error = [];

  if (!abouthead || !aboutcontent || !visionheading || !visioncontent || !missionheading || !missioncontent || !valheading) {
    if (!abouthead) {
      error.push("Required");
    }
    if (!aboutcontent) {
      error.push("Required");
    }
    if (!visionheading) {
      error.push("Required");
    }
    if (!visioncontent) {
      error.push("Required");
    }
    if (!missionheading) {
      error.push("Required");
    }
    if (!missioncontent) {
      error.push("Required");
    }
    if (!valheading) {
      error.push("Required");
    }

    return res.status(402).send(errormessage(error));
  } else {
    commoncomponent
      .create({
        about: abouthead,
        aboutcontent: aboutcontent,
        ourevision: visionheading,
        visionconten: visioncontent,
        ouremission: missionheading,
        missionconten: missioncontent,
        ourecorevalue: valheading,
        corevalueconten: valuecontent,
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
// router.get("/about_update_detail/:id", Authenticate, async (req, res) => {
//   let id = req.params.id;
//   console.log(id);
//   commoncomponent
//     .findById(id, {__v: 0})
//     .then((result) => {
//       return res.status(200).send(successmessage(result));
//     })
//     .catch((error) => {
//       console.log(error);
//       return res.status(500).send(errormessage(error));
//     });
// });
router.put("/about_update/:id", Authenticate, async (req, res) => {
  let {abouthead, aboutcontent, visionheading, visioncontent, missionheading, missioncontent, valheading, valuecontent} = req.body;
  let id = req.params.id;
  let error = [];
  if (!abouthead || !aboutcontent || !visionheading || !visioncontent || !missionheading || !missioncontent || !valheading) {
    if (!abouthead) {
      error.push("Required");
    }
    if (!aboutcontent) {
      error.push("Required");
    }
    if (!visionheading) {
      error.push("Required");
    }
    if (!visioncontent) {
      error.push("Required");
    }
    if (!missionheading) {
      error.push("Required");
    }
    if (!missioncontent) {
      error.push("Required");
    }
    if (!valheading) {
      error.push("Required");
    }

    return res.status(402).send(errormessage(error));
  } else {
    let find_party = await commoncomponent.findById(id);
    console.log(find_party);
    let new_data = {};
    // if
    if (abouthead) {
      new_data.about = abouthead;
    }
    if (aboutcontent) {
      new_data.aboutcontent = aboutcontent;
    }
    if (visionheading) {
      new_data.ourevision = visionheading;
    }
    if (visioncontent) {
      new_data.visionconten = visioncontent;
    }
    if (missionheading) {
      new_data.ouremission = missionheading;
    }
    if (missioncontent) {
      new_data.missionconten = missioncontent;
    }
    if (valheading) {
      new_data.ourecorevalue = valheading;
    }
    if (valuecontent) {
      new_data.corevalueconten = valuecontent;
    }

    commoncomponent
      .findByIdAndUpdate(id, {$set: new_data}, {new: true})
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
router.delete("/about_delete/:id", Authenticate, (req, res) => {
  let id = req.params.id;
  if (!id) {
    return res.status(402).send(errormessage("Required"));
  } else {
    commoncomponent
      .findByIdAndDelete(id)
      .then((result) => {
        return res.status(200).send(successmessage("Delete Successfully"));
      })
      .catch((err) => {
        return res.status(402).send(errormessage(err));
      });
  }
});

module.exports = router;
