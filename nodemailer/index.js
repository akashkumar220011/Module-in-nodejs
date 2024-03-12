// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';

const Solution = () => {
  // Write your code here
  const qinterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  qinterface.question("Please enter your mail ",  async (Useremail)=>{
   try{
      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'codingninjas2k16@gmail.com',
          pass: 'slwvvlczduktvhdj'
        }
      });
    
    const mailOptions = {
      from: 'codingninjas2k16@gmail.com',
      to: Useremail,
      subject: 'Coding Ninjas',
      text: 'The world has enough coders; be a coding ninja!',
    };
    
      const result = await transport.sendMail(
        mailOptions
      );
      console.log('Success: Email sent to ', Useremail);
    } catch (error) {
      console.log("error sending email:", error);
    } finally{
      qinterface.close();
    }
   } );

 
};

export default Solution;
