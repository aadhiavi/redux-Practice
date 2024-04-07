import axios from "axios"
import { useEffect, useState } from "react"
import { useGetPostQuery, useAddPostMutation, useGetUserQuery } from "../Redux/Slices/Api/postApiSlice"



const Api = () => {
    // const [posts, setPosts] = useState([]);

    // const url = "https://jsonplaceholder.typicode.com/posts"
    const postDataValue = {
        userId: 101,
        id: 101,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };


    // const getPosts = async () => {
    //     try {
    //         const response = await axios.get(url);
    //         setPosts(response.data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    // const postPosts = async () => {
    //     try {
    //         await axios.post(url, postDataValue)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // };
    // console.log(posts)
    // useEffect(() => {
    //     getPosts()
    // }, [])

    const { data: posts } = useGetPostQuery()
    // console.log(posts)

    const { data: users }= useGetUserQuery()
    console.log(users)

    const [addPost] = useAddPostMutation()

    const postPosts = async () => {
        try {
            const response = await addPost(postDataValue)
            console.log(response)
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <h1>List items</h1>
            <ul>
                {posts && posts.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
            <button onClick={postPosts}>Post Data</button>
        </div>
    )
}

export default Api