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