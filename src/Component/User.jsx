import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setMainUser, setUsers, setActive} from '../Redux/Slices/userSlice'

const User = () => {

    const dispatch = useDispatch()
    const isActive = useSelector(state=>state.user.isActive)
    console.log(isActive)

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""

    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setMainUser(user))
        setUser({
            name: "",
            email: "",
            password: ""
        })
        dispatch(setUsers(user))
        dispatch(setActive())
    };
    return (
        <div>
            <h1>User</h1>
            {
                isActive ? <h2>true</h2> : <h2>false</h2>
            }

            <form onSubmit={handleSubmit} >
                <input type="text" placeholder='Name' name="name" value={user.name} onChange={handleChange} />
                <input type="email" placeholder='Email' name="email" value={user.email} onChange={handleChange} />
                <input type="password" placeholder='Password' name="password" value={user.password} onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default User

import React, { useRef, useState } from 'react';
// import './AboutUs.css';
// import emailjs from 'emailjs-com';
// import Overlay from './Overlay';

// const AboutUs = () => {
//     const form = useRef();
//     const [values, setValues] = useState({
//         name: '',
//         number: '',
//         email: '',
//         city: '',
//         message: '',
//     });

//     const [overlayVisible, setOverlayVisible] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setValues((prevValues) => ({ ...prevValues, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const { name, number, email, city, message } = values;

//         if (!name || !number || !email || !city || !message) {
//             alert('All fields are required');
//             return;
//         }

//         emailjs.sendForm(
//             'service_bqkenl9',
//             'template_excy8kz',
//             form.current,
//             '2wzOLq6HGS_tBmlFh'
//         ).then(
//             () => {
//                 setOverlayVisible(true);
//                 setValues({
//                     name: '',
//                     number: '',
//                     email: '',
//                     city: '',
//                     message: '',
//                 });
//             },
//             (error) => {
//                 console.error('Failed to send form:', error.text);
//                 alert('An error occurred. Please try again.');
//             }
//         );
//     };

//     const handleOverlayClose = () => {
//         setOverlayVisible(false);
//     };

//     return (
//         <div className="aboutus">
//             <div className="aboutus-container">
//                 <form ref={form} onSubmit={handleSubmit}>
//                     <h1>Contact Us</h1>
//                     <input
//                         type="text"
//                         placeholder="Name"
//                         name="name"
//                         value={values.name}
//                         onChange={handleChange}
//                     />
//                     <input
//                         type="text"
//                         placeholder="Number"
//                         name="number"
//                         value={values.number}
//                         onChange={handleChange}
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         name="email"
//                         value={values.email}
//                         onChange={handleChange}
//                     />
//                     <input
//                         type="text"
//                         placeholder="City"
//                         name="city"
//                         value={values.city}
//                         onChange={handleChange}
//                     />
//                     <textarea
//                         placeholder="Message"
//                         name="message"
//                         value={values.message}
//                         onChange={handleChange}
//                     />
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//             <Overlay
//                 isVisible={overlayVisible}
//                 onClose={handleOverlayClose}
//             />
//         </div>
//     );
// };

// export default AboutUs;


 // if (!values.name || !values.number || !values.email || !values.city || !values.message) {
        //     alert("All fields are required");
        //     return;
        //   }
        // try {
        //    const response = await axios.post("https://trade-suhana-backend-page.onrender.com/api/v1/post",
        //         values)
        //             alert(response.data.message)
        //     setValues({
        //         name: "",
        //         number: "",
        //         email: "",
        //         city: "",
        //         message: "",
        //     })
        // }
        // catch (error) {
        //     console.error("Error submitting form:", error);
        //     alert("An error occurred. Please try again.");
        //   }


        // emailjs.sendForm('service_bqkenl9', 'template_excy8kz', form.current, {
        //     publicKey: '2wzOLq6HGS_tBmlFh',
        // })
        // .then(
        //     () => {
        //         console.log('SUCCESS!');
        //     },
        //     (error) => {
        //         console.log('FAILED...', error.text);
        //     },
        // );
