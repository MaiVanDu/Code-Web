import React from "react";
import { useEffect, useState } from "react";
const tabs = ['posts', 'comments', 'albums']

function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [show, setShow] = useState(false)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(posts => {
                setPosts(posts);
            })

    }, [type])

    useEffect(() =>{
        const handleScroll = () =>{
            if(window.scrollY >= 200){
                setShow(true)

            }
            else{
                setShow(false)

            }

        }

        window.addEventListener('scroll',handleScroll)
        return  () =>{
            window.reomveEventListener('scroll',handleScroll)

        }

    }, [])

    return(
        <div>
            {tabs.map( tab => (
                <button
                    key={tab}
                    onClick = {() => setType(tab)}
                >
                    {tab}
                </button>
            ))}            
                {posts.map( post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
                {show && (
                    <button
                        style={{
                            position: 'fixed',
                            right: 20,
                            bottom:20,
                        }}
                    >go to</button>
                )}
            
        </div>
           
           
            
    )
}

export default Content;