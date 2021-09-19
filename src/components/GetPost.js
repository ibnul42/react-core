import { useEffect } from "react";
import { useState } from "react/cjs/react.development"

export default function GetPost() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [post, setPost] = useState({});


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            setLoading(false);
            setError("");
            setPost(data);
            console.log(data)
        })
        .catch(error => {
            setLoading(false);
            setError(error);
            setPost({});
        })

    },[]);

    return(
        <div>
            {loading ? 'Loading...' : post.title}

        </div>
    )
}