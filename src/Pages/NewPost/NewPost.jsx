import React from 'react'
import "./NewPost.css"

const NewPost = ({handleSubmit,postTitle,setPostTitle,postBody,setpostBody}) => {
  return (
    <div className='newpost'>
      <h2>New Post</h2>
      <form action="" className='newpost_form' onSubmit={() =>handleSubmit(event)}>
        <label htmlFor="postTitle">Title:</label>
        <input type="text" id='postTitle' value={postTitle} onChange={(event) =>setPostTitle(event.target.value)} required />
        <label htmlFor="postbody">Post:</label>
        <textarea id="postbody" required value={postBody} onChange={(event) =>setpostBody(event.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default NewPost