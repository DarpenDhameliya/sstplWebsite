const mongoose = require('mongoose')
const mongourl = `mongodb+srv://${process.env.MONGO_ID}@cluster0.udjynea.mongodb.net/?retryWrites=true&w=majority`


const mongoconnect = async () => {
  try {
    mongoose.connect(mongourl,{
              useNewUrlParser: true,
              useUnifiedTopology: true,
              dbName:'sstpl_admin'
          })
      .then(() => console.log('Connected!'));
  } catch (error) {
    console.log('mongoose error ===================>',error)
  }

  
}

module.exports = mongoconnect;

{/* <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9f9f9;">
<tbody>
  <tr>
    <td>
      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; background-color: #fff; width: 600px; margin: 0 auto;" width="600">
        <tbody>
          <tr>
            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 20px; padding-top: 40px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
              <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody><tr>
                  <td class="pad" style="padding-bottom:40px;">
                    <div class="alignment" align="center">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <tbody><tr>
                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 20px solid #F9F9F9;"><span> </span></td>
                        </tr>
                      </tbody></table>
                    </div>
                  </td>
                </tr>
              </tbody></table>
              <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody><tr>
                  <td class="pad" style="text-align:center;width:100%;">
                    <h1 style="margin: 0; color: #2a3940; direction: ltr; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong><span class="tinyMce-placeholder">Why SoftStrom</span></strong></h1>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
</table>
<table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9f9f9;">
<tbody>
  <tr>
    <td>
      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; background-color: #fff; width: 600px; margin: 0 auto;" width="600">
        <tbody>
          <tr>
            <td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 20px; padding-left: 10px; padding-right: 10px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
              <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody><tr>
                  <td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; font-weight: 400; text-align: center;">
                    <table class="alignment" cellpadding="0" cellspacing="0" role="presentation" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                      <tbody><tr>
                        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img class="icon" src="./HR Mail_files/80-X-80.png" alt="" height="64" width="64" align="center" style="height: auto; display: block; margin: 0 auto; border: 0;"></td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody></table>
              <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                <tbody><tr>
                  <td class="pad" style="padding-top:10px;">
                    <div style="color:#393d47;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
                      <p style="margin: 0;"><strong>Friendly Culture</strong></p>
                    </div>
                  </td>
                </tr>
              </tbody></table>
            </td>
            <td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 20px; padding-left: 10px; padding-right: 10px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
              <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody><tr>
                  <td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; font-weight: 400; text-align: center;">
                    <table class="alignment" cellpadding="0" cellspacing="0" role="presentation" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                      <tbody><tr>
                        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img class="icon" src="./HR Mail_files/80-X-80.png" alt="" height="64" width="64" align="center" style="height: auto; display: block; margin: 0 auto; border: 0;"></td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody></table>
              <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                <tbody><tr>
                  <td class="pad" style="padding-top:10px;">
                    <div style="color:#393d47;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
                      <p style="margin: 0;"><strong>Annual Picnic</strong></p>
                    </div>
                  </td>
                </tr>
              </tbody></table>
            </td>
            <td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 20px; padding-left: 10px; padding-right: 10px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
              <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody><tr>
                  <td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; font-weight: 400; text-align: center;">
                    <table class="alignment" cellpadding="0" cellspacing="0" role="presentation" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                      <tbody><tr>
                        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img class="icon" src="./HR Mail_files/80-X-80.png" alt="" height="64" width="64" align="center" style="height: auto; display: block; margin: 0 auto; border: 0;"></td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody></table>
              <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                <tbody><tr>
                  <td class="pad" style="padding-top:10px;">
                    <div style="color:#393d47;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
                      <p style="margin: 0;"><strong>On-time Salary</strong></p>
                    </div>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
</table>
<table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9f9f9;">
<tbody>
  <tr>
    <td>
      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; background-color: #fff; width: 600px; margin: 0 auto;" width="600">
        <tbody>
          <tr>
            <td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 20px; padding-left: 10px; padding-right: 10px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
              <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody><tr>
                  <td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; font-weight: 400; text-align: center;">
                    <table class="alignment" cellpadding="0" cellspacing="0" role="presentation" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                      <tbody><tr>
                        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img class="icon" src="./HR Mail_files/80-X-80.png" alt="" height="64" width="64" align="center" style="height: auto; display: block; margin: 0 auto; border: 0;"></td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody></table>
              <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                <tbody><tr>
                  <td class="pad" style="padding-top:10px;">
                    <div style="color:#393d47;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
                      <p style="margin: 0;"><strong>Monthly Paid Leaves &amp; Benefits</strong></p>
                    </div>
                  </td>
                </tr>
              </tbody></table>
            </td>
            <td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 20px; padding-left: 10px; padding-right: 10px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
              <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody><tr>
                  <td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; font-weight: 400; text-align: center;">
                    <table class="alignment" cellpadding="0" cellspacing="0" role="presentation" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                      <tbody><tr>
                        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img class="icon" src="./HR Mail_files/80-X-80.png" alt="" height="64" width="64" align="center" style="height: auto; display: block; margin: 0 auto; border: 0;"></td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody></table>
              <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                <tbody><tr>
                  <td class="pad" style="padding-top:10px;">
                    <div style="color:#393d47;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
                      <p style="margin: 0;"><strong>Skilled &amp; Supportive Teammates</strong></p>
                    </div>
                  </td>
                </tr>
              </tbody></table>
            </td>
            <td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 20px; padding-left: 10px; padding-right: 10px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
              <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody><tr>
                  <td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; font-weight: 400; text-align: center;">
                    <table class="alignment" cellpadding="0" cellspacing="0" role="presentation" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                      <tbody><tr>
                        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img class="icon" src="./HR Mail_files/80-X-80.png" alt="" height="64" width="64" align="center" style="height: auto; display: block; margin: 0 auto; border: 0;"></td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody></table>
              <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                <tbody><tr>
                  <td class="pad" style="padding-top:10px;">
                    <div style="color:#393d47;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
                      <p style="margin: 0;"><strong>Open Communication</strong></p>
                    </div>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
</table>
<table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9f9f9;">
<tbody>
  <tr>
    <td>
      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; background-color: #fff; width: 600px; margin: 0 auto;" width="600">
        <tbody>
          <tr>
            <td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 20px; padding-left: 10px; padding-right: 10px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
              <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody><tr>
                  <td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; font-weight: 400; text-align: center;">
                    <table class="alignment" cellpadding="0" cellspacing="0" role="presentation" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                      <tbody><tr>
                        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img class="icon" src="./HR Mail_files/80-X-80.png" alt="" height="64" width="64" align="center" style="height: auto; display: block; margin: 0 auto; border: 0;"></td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody></table>
              <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                <tbody><tr>
                  <td class="pad" style="padding-top:10px;">
                    <div style="color:#393d47;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
                      <p style="margin: 0;"><strong>Celebration</strong></p>
                    </div>
                  </td>
                </tr>
              </tbody></table>
            </td>
            <td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 20px; padding-left: 10px; padding-right: 10px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
              <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody><tr>
                  <td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; font-weight: 400; text-align: center;">
                    <table class="alignment" cellpadding="0" cellspacing="0" role="presentation" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                      <tbody><tr>
                        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img class="icon" src="./HR Mail_files/80-X-80.png" alt="" height="64" width="64" align="center" style="height: auto; display: block; margin: 0 auto; border: 0;"></td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody></table>
              <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                <tbody><tr>
                  <td class="pad" style="padding-top:10px;">
                    <div style="color:#393d47;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
                      <p style="margin: 0;"><strong>Trending Technology</strong></p>
                    </div>
                  </td>
                </tr>
              </tbody></table>
            </td>
            <td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 20px; padding-left: 10px; padding-right: 10px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
              <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody><tr>
                  <td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; font-weight: 400; text-align: center;">
                    <table class="alignment" cellpadding="0" cellspacing="0" role="presentation" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                      <tbody><tr>
                        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img class="icon" src="./HR Mail_files/80-X-80.png" alt="" height="64" width="64" align="center" style="height: auto; display: block; margin: 0 auto; border: 0;"></td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody></table>
              <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                <tbody><tr>
                  <td class="pad" style="padding-top:10px;">
                    <div style="color:#393d47;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
                      <p style="margin: 0;"><strong>Employment Training</strong></p>
                    </div>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
</table>
<table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9f9f9;">
<tbody>
  <tr>
    <td>
      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; background-color: #fff; width: 600px; margin: 0 auto;" width="600">
        <tbody>
          <tr>
            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 30px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
              <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                <tbody><tr>
                  <td class="pad">
                    <div style="color:#393d47;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
                      <p style="margin: 0;">Due to the amount of applications we receive, we will only be able to notify shortlisted candidates. Please check your spam folder as well.&nbsp;</p>
                    </div>
                  </td>
                </tr>
              </tbody></table>
              <table class="divider_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody><tr>
                  <td class="pad" style="padding-bottom:20px;padding-top:40px;">
                    <div class="alignment" align="center">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <tbody><tr>
                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 20px solid #F9F9F9;"><span> </span></td>
                        </tr>
                      </tbody></table>
                    </div>
                  </td>
                </tr>
              </tbody></table>
              <table class="image_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody><tr>
                  <td class="pad" style="padding-bottom:30px;padding-left:20px;padding-right:20px;width:100%;">
                    <div class="alignment" align="center" style="line-height:10px"><img src="./HR Mail_files/Our_Company_image.png" style="height: auto; display: block; border: 0; max-width: 560px; width: 100%;" width="560" alt="Team looking at computer in a meeting" title="Team looking at computer in a meeting"></div>
                  </td>
                </tr>
              </tbody></table>
              <table class="heading_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody><tr>
                  <td class="pad" style="padding-bottom:20px;text-align:center;width:100%;">
                    <h1 style="margin: 0; color: #2a3940; direction: ltr; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong><span class="tinyMce-placeholder">About our company</span></strong></h1>
                  </td>
                </tr>
              </tbody></table>
              <table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                <tbody><tr>
                  <td class="pad" style="padding-left:20px;padding-right:20px;">
                    <div style="color:#393d47;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:justify;mso-line-height-alt:19.2px;">
                      <p style="margin: 0;">SoftStorm is your trusted digital transformation partner, providing customised services in software development, business intelligence, and mobile/web app development. We have a solid track record of delivering over 50 successful projects with 100% client satisfaction to 30+ worldwide clients in five years. Our team's substantial 100K+ hours of freelancing experience ensures that your idea will be realised. We keep you ahead in the shifting business scene by ranking among the top 1% talent on platforms such as Upwork, freelance, fiverr, and peopletowork.</p>
                    </div>
                  </td>
                </tr>
              </tbody></table>
              <table class="button_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody><tr>
                  <td class="pad" style="padding-top:30px;text-align:center;">
                    <div class="alignment" align="center"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.example.com/" style="height:41px;width:174px;v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#c20004"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="https://www.example.com/" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#c20004;border-radius:4px;width:auto;border-top:0px solid #8a3b8f;font-weight:400;border-right:0px solid #8a3b8f;border-bottom:0px solid #8a3b8f;border-left:0px solid #8a3b8f;padding-top:5px;padding-bottom:5px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:40px;padding-right:40px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;">Know More...</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
                  </td>
                </tr>
              </tbody></table>
              <table class="divider_block block-7" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody><tr>
                  <td class="pad" style="padding-bottom:40px;padding-top:40px;">
                    <div class="alignment" align="center">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <tbody><tr>
                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 20px solid #F9F9F9;"><span> </span></td>
                        </tr>
                      </tbody></table>
                    </div>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
</table>
<table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9f9f9;">
<tbody>
  <tr>
    <td>
      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; background-color: #fff; width: 600px; margin: 0 auto;" width="600">
        <tbody>
          <tr>
            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; border-bottom: 6px solid #C20004; padding-bottom: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-left: 0px;">
              <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody><tr>
                  <td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 20px; font-weight: 400; text-align: center;">
                    <table class="alignment" cellpadding="0" cellspacing="0" role="presentation" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                      <tbody><tr>
                        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img class="icon" src="./HR Mail_files/logo.png" alt="" height="64" width="205" align="center" style="height: auto; display: block; margin: 0 auto; border: 0;"></td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody></table>
              <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                <tbody><tr>
                  <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                    <div style="font-family: sans-serif">
                      <div class="" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #66787f; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                        <p style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 14.399999999999999px;">305-306, Amby Valley Arcade, Opp. Santosa Heights, Uttran, Surat, Gujarat, India - 394105<br>0261-3560756, 9099919947</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody></table>
              <table class="social_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody><tr>
                  <td class="pad">
                    <div class="alignment" align="center">
                      <table class="social-table" width="184px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
                        <tbody><tr>
                          <td style="padding:0 7px 0 7px;"><a href="https://www.facebook.com/" target="_blank"><img src="./HR Mail_files/facebook@2x.png" width="32" height="32" alt="Facebook" title="facebook" style="height: auto; display: block; border: 0;"></a></td>
                          <td style="padding:0 7px 0 7px;"><a href="https://www.twitter.com/" target="_blank"><img src="./HR Mail_files/twitter@2x.png" width="32" height="32" alt="Twitter" title="twitter" style="height: auto; display: block; border: 0;"></a></td>
                          <td style="padding:0 7px 0 7px;"><a href="https://www.linkedin.com/" target="_blank"><img src="./HR Mail_files/linkedin@2x.png" width="32" height="32" alt="Linkedin" title="linkedin" style="height: auto; display: block; border: 0;"></a></td>
                          <td style="padding:0 7px 0 7px;"><a href="https://www.instagram.com/" target="_blank"><img src="./HR Mail_files/instagram@2x.png" width="32" height="32" alt="Instagram" title="instagram" style="height: auto; display: block; border: 0;"></a></td>
                        </tr>
                      </tbody></table>
                    </div>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
</table> */}