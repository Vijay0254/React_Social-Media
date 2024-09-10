import React from 'react'
import "./Post.css"
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <article className='post'>
        <Link to={`post/${post.id}`}>
          <h2 className='post_title'>{post.title}</h2>
          <p className='post_date'>{post.datetime}</p>
          <p className='post_body'>
              {(post.body).length <= 25 ? post.body : `${post.body.slice(0,25)}...` }
          </p>
        </Link>
    </article>
  )
}

export default Post