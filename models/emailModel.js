const nodemailer = require("nodemailer");

module.exports = {
  sendEmail: async (input) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'horizone217@gmail.com',
        pass: '01266547111Sss'
      }
    });

    var mailOptions = {
      from: 'horizone217@gmail.com',
      to: `${input.info_email}`,
      subject: 'Sending Email using Node.js',
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      
        <style type="text/css">
        @import url(http://fonts.googleapis.com/css?family=Droid+Sans);
      
        /* Take care of image borders and formatting */
      
        img {
          max-width: 600px;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        }
      
        a {
          text-decoration: none;
          border: 0;
          outline: none;
          color: #bbbbbb;
        }
      
        a img {
          border: none;
        }
      
        /* General styling */
      
        td, h1, h2, h3  {
          font-family: Helvetica, Arial, sans-serif;
          font-weight: 400;
        }
      
        td {
          text-align: center;
        }
      
        body {
          -webkit-font-smoothing:antialiased;
          -webkit-text-size-adjust:none;
          width: 100%;
          height: 100%;
          color: #37302d;
          background: #ffffff;
          font-size: 16px;
        }
      
         table {
          border-collapse: collapse !important;
        }
      
        .headline {
          color: #ffffff;
          font-size: 36px;
        }
      
       .force-full-width {
        width: 100% !important;
       }
      
       .force-width-80 {
        width: 80% !important;
       }
      
      
      
      
        </style>
      
        <style type="text/css" media="screen">
            @media screen {
               /*Thanks Outlook 2013! http://goo.gl/XLxpyl*/
              td, h1, h2, h3 {
                font-family: 'Droid Sans', 'Helvetica Neue', 'Arial', 'sans-serif' !important;
              }
            }
        </style>
      
        <style type="text/css" media="only screen and (max-width: 480px)">
          /* Mobile styles */
          @media only screen and (max-width: 480px) {
      
            table[class="w320"] {
              width: 320px !important;
            }
      
            td[class="mobile-block"] {
              width: 100% !important;
              display: block !important;
            }
      
      
          }
        </style>
      </head>
      <body class="body" style="padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none" bgcolor="#ffffff">
      <table align="center" cellpadding="0" cellspacing="0" class="force-full-width" height="100%" >
        <tr>
          <td align="center" valign="top" bgcolor="#ffffff"  width="100%">
            <center>
              <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" width="600" class="w320">
                <tr>
                  <td align="center" valign="top">
                      <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" class="force-full-width" bgcolor="#4dbfbf">
                        <tr>
                          <td class="headline">
                              Confirm Successfully!
                          </td>
                        </tr>
                      </table>
      
                      <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" class="force-full-width" bgcolor="#f5774e">
                        <tr>
                          <td style="background-color:#f5774e;">
                          <center>
                            <table style="margin:0 auto;" cellspacing="0" cellpadding="0" class="force-width-80">
                              <tr>
                                <td style="text-align:left; color:#933f24">
                                <br>
                                <br>
                                  <span style="color:#ffffff;">About Event</span> <br>
                                  Name: ${input.event_name} <br>
                                  ID: #${input.event_id}
                                </td>
                                <td style="text-align:right; vertical-align:top; color:#933f24">
                                <br>
                                <br>
                                  <span style="color:#ffffff;">Date</span> <br>
                                  ${input.event_date.getDate()}/${input.event_date.getMonth() + 1 }/${input.event_date.getFullYear()}
                                </td>
                              </tr>
                            </table>
      
      
                            <table style="margin:0 auto;" cellspacing="0" cellpadding="0" class="force-width-80">
                              <tr>
                                <td  class="mobile-block" >
                                <br>
                                <br>
      
                                  <table cellspacing="0" cellpadding="0" class="force-full-width">
                                    <tr>
                                      <td style="color:#ffffff; background-color:#ac4d2f; padding: 10px 0px;">
                                        Thank You
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="color:#933f24; padding:10px 0px; background-color: #f7a084;">
                                          Thank you for your business. Please <a style="color:#ffffff;" href="#">contact us</a> with any questions regarding your event.
                                      </td>
                                    </tr>
                                  </table>
      
                                  <br>
                                </td>
                              </tr>
                            </table>
                          </center>
                          </td>
                        </tr>
                      </table>
      
                      <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" class="force-full-width" bgcolor="#414141" style="margin: 0 auto">
                        <tr>
                          <td style="color:#bbbbbb; font-size:12px;">
                            <a href="#">View in browser</a> | <a href="#">Unsubscribe</a> | <a href="#">Contact</a>
                            <br><br>
                          </td>
                        </tr>
                        <tr>
                          <td style="color:#bbbbbb; font-size:12px;">
                             © 2014 All Rights Reserved
                             <br>
                             <br>
                          </td>
                        </tr>
                      </table>
                  </td>
                </tr>
              </table>
          </center>
          </td>
        </tr>
      </table>
      </body>
      </html>`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error + `${input.info_email}`);
      } else {
        console.log('Email sent: ' + info.response + `${input.info_email}`);
      }
    });
  }

}



