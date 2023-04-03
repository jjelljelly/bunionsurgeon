export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)

    // Guard clause checks for details in body
    // and returns early if they are not found
    if (!body.name || !body.contact || !body.email || !body.enquiry || !body.funding) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: 'Provide full details' })
    }
    console.log(process.env.EMAIL)

    // Node function to handle contact form submission
    if (req.body.oh_no_honey) {
        //handle as spam
        console.log("spam")
        // res.send('spam')
    } else {
        console.log('Sending mail');

        //nodemailer transporter
        const nodemailer = require('nodemailer');

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secureConnection: true,
            port: 587,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }
        });
        //site owner email content (HTML)
        let emailToSend =
            `
            <p>Dear team,</p>
            <p>We have received an enquiry from the below patient:</p>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Contact number: ${req.body.contact}</li>
                <li>Email: ${req.body.email}</li>
                <li>Enquiry: ${req.body.enquiry}</li>
                <li>Payment method: ${req.body.funding}</li>
            </ul>`

        // forward email to site owner
        let forwardMail = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: 'Bunion Surgeon | Initial Enquiry',
            text: req.body.enquiry,
            html: emailToSend,
        };

        transporter.sendMail(forwardMail, async (error, info) => {
            // if (error) await console.log(error)
            if (error) {
                console.log("error")
            }
            //res.send(info)
        });

        //send email confirmation to form user
        let confirmMail = {
            from: process.env.EMAIL,
            to: `${req.body.email}`,
            subject: 'Bunion Surgeon | Thank you for your enquiry',
            text: "This is an automated confirmation: Thank you for getting in touch with The Bunion Surgeon. We will come back to you as soon as possible.",
            html: `
                    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
        <!--[if gte mso 9]>
        <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="x-apple-disable-message-reformatting">
        <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
        <title></title>
        
            <style type="text/css">
            @media only screen and (min-width: 620px) {
        .u-row {
            width: 600px !important;
        }
        .u-row .u-col {
            vertical-align: top;
        }

        .u-row .u-col-100 {
            width: 600px !important;
        }

        }

        @media (max-width: 620px) {
        .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
        }
        .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
        }
        .u-row {
            width: 100% !important;
        }
        .u-col {
            width: 100% !important;
        }
        .u-col > div {
            margin: 0 auto;
        }
        }
        body {
        margin: 0;
        padding: 0;
        }

        button {
            cursor: pointer;
            transition-duration: 0.5s;
        }

        button:hover {
        background-color: rgba(230, 231, 232, 0.8);
        }

        table,
        tr,
        td {
        vertical-align: top;
        border-collapse: collapse;
        }

        p {
        margin: 0;
        }

        .ie-container table,
        .mso-container table {
        table-layout: fixed;
        }

        * {
        line-height: inherit;
        }

        a[x-apple-data-detectors='true'] {
        color: inherit !important;
        text-decoration: none !important;
        }

        table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: none; }

            </style>
        
        

        </head>

        <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
        <tbody>
        <tr>
            <td style="display:none !important;visibility:hidden;mso-hide:all;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
            Bunion Surgeon | Thank you for your enquiry
            </td>
        </tr>
        
        <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
            

        <div class="u-row-container" style="padding: 0px;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
            
        <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #063b5e;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
        <div style="background-color: #063b5e;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
        <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
        
        <table style="font-family: "Playfair Display", serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
            <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:25px 15px;y:times new roman,times;" align="left">
                
        <h2 style="margin: 0px; color: #ffffff; line-height: 190%; text-align: center; word-wrap: break-word; font-weight: normal; font-size: 20px;">Thank you for your enquiry</h2>

            </td>
            </tr>
        </tbody>
        </table>

        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
        </div>
        </div>



        <div class="u-row-container" style="padding: 0px;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
            
        <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #e6e7e8;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
        <div style="background-color: #e6e7e8;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
        <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
        
        <table style="font-family: "Playfair Display", serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
            <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 20px 23px;font-family: "Playfair Display", serif;" align="left">
                
        <div style="color: #063b5e; line-height: 300%; text-align: center; word-wrap: break-word;">
            <p style="font-size: 14px; line-height: 300%;">Dear ${req.body.name},</p>
        <p style="font-size: 14px; line-height: 300%;">Our administrative team have received your enquiry and will be in touch.</p>
        <p style="font-size: 14px; line-height: 300%;">I look forward to meeting you in clinic.</p>
        </div>

            </td>
            </tr>
        </tbody>
        </table>

        <table style="font-family: "Playfair Display", serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
            <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 16px;font-family: "Playfair Display", serif;" align="left">
                
        <h4 style="margin: 0px; color: #063b5e; line-height: 200%; text-align: center; word-wrap: break-word; font-weight: normal; font-size: 16px;">Mr Kaser Nazir | The Bunion Surgeon</h4>

            </td>
            </tr>
        </tbody>
        </table>

        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
        </div>
        </div>



        <div class="u-row-container" style="padding: 0px;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
            
        <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #063b5e;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
        <div style="background-color: #063b5e;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
        <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
        
        <table style="font-family: "Playfair Display", serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
            <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 1px;font-family: "Playfair Display", serif;" align="left">
                
        <div style="color: #ffffff; line-height: 180%; text-align: center; word-wrap: break-word;">
            <p style="font-size: 14px; line-height: 180%;"><em>02078208007</em></p>
        </div>

            </td>
            </tr>
        </tbody>
        </table>

        <table style="font-family: "Playfair Display", serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
            <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 4px;font-family: "Playfair Display", serif;" align="left">
                
        <div style="color: #ffffff; line-height: 160%; text-align: left; word-wrap: break-word;">
            <p style="font-size: 14px; line-height: 160%; text-align: center;"><em>admin@bunionsurgeon.co.uk</em></p>
        </div>

            </td>
            </tr>
        </tbody>
        </table>

        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
        </div>
        </div>



        <div class="u-row-container" style="padding: 0px;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
            
        <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #063b5e;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
        <div style="background-color: #063b5e;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
        <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
        
        <table style="font-family: "Playfair Display", serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
            <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:14px;font-family: "Playfair Display", serif;" align="left">
                
                <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
        <div align="center">
        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://bookonline.bunionsurgeon.co.uk" style="height:41px; v-text-anchor:middle; width:129px;" arcsize="36.5%"  stroke="f" fillcolor="#ffffff"><w:anchorlock/><center style="color:#063b5e;font-family:times new roman,times;"><![endif]-->  
            <a href="https://bookonline.bunionsurgeon.co.uk" target="_blank" class="v-button" style="box-sizing: border-box;display: inline-block;font-family:times new roman,times;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #063b5e; background-color: #ffffff; border-radius: 15px;-webkit-border-radius: 15px; -moz-border-radius: 15px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
            <span style="display:block;padding:12px 30px;line-height:120%;"><span style="font-size: 14px; line-height: 16.8px;">Book online</span></span>
            </a>
        <!--[if mso]></center></v:roundrect><![endif]-->
        </div>

            </td>
            </tr>
        </tbody>
        </table>

        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
        </div>
        </div>


            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </td>
        </tr>
        </tbody>
        </table>
        <!--[if mso]></div><![endif]-->
        <!--[if IE]></div><![endif]-->
        </body>

        </html>
        `
        };

        transporter.sendMail(confirmMail, async (error) => {
            if (error) {
                console.log("Error:", error)
                // res.send(error.message);
            }
            await res.json({ data: "success" });
        });

    }
}