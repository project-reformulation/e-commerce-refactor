// "use client"
// import React, { useState } from 'react';
// import nodemailer from 'nodemailer';

// const Contact: React.FC = () => {
//     const [name, setName] = useState<string>('');
//     const [email, setEmail] = useState<string>('');
//     const [message, setMessage] = useState<string>('');

//     const transporter = nodemailer.createTransport({
//         host: 'your-smtp-host',
//         port: 587,
//         secure: false,
//         auth: {
//             user: 'your-email@example.com',
//             pass: 'your-email-password'
//         }
//     });

//     const sendEmail = async () => {
//         try {
//             await transporter.sendMail({
//                 from: email,
//                 to: 'farhatachref12@gmail.com',
//                 subject: `Message from ${name}`,
//                 text: message
//             });
//             console.log('Email sent successfully');
//             setName('');
//             setEmail('');
//             setMessage('');
//         } catch (error) {
//             console.error('Error sending email:', error);
//         }
//     };

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         sendEmail();
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div className="flex flex-col gap-4">
//                     <input
//                         type="text"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         placeholder="Your Name"
//                         className="input-style"
//                     />
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Your Email"
//                         className="input-style"
//                     />
//                     <textarea
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                         placeholder="Your Message"
//                         className="textarea-style"
//                     ></textarea>
//                     <button type="submit" className="btn-submit">Send</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Contact;
