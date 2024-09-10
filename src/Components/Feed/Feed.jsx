import React from 'react'
import Post from '../Post/Post'
import "./Feed.css"

const Feed = ({post}) => {
  return (
    <div className='feed'>
        {post.map((element,index) =>(
            <Post key={index} post={element} />
        ))}
    </div>
  )
}

export default Feed