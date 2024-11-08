import { MedusaService } from "@medusajs/framework/utils"
import nodemailer from "nodemailer"

class EmailModuleService extends MedusaService({

}) {

    async sendEmail() {
        const transporter = nodemailer.createTransport({
            host: "live.smtp.mailtrap.io",
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: "smtp@mailtrap.io",
              pass: "9c7dc57aee5600f7e3ffc8d9c88df727",
            },
          });
          
          // async..await is not allowed in global scope, must use a wrapper
          async function main() {
            // send mail with defined transport object
            const info = await transporter.sendMail({
              from: "smtp@demomailtrap.com" , // sender address
              to: "ykng0508@gmail.com", // list of receivers
              subject: "Hello ✔", // Subject line
              text: "Hello world?", // plain text body
              html: "<b>Hello world?</b>", // html body
            });
          
            console.log("Message sent: %s", info.messageId);
            // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
          }
          
        main().catch(console.error);
    }
}

export default EmailModuleService