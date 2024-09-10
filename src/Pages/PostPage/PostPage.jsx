import React from 'react'
import "./PostPage.css"
import { Link, useParams } from 'react-router-dom'
import Editpost from '../../Components/Editpost/Editpost'

const PostPage = ({post,handleDelete,editTitle,seteditTitle,editBody,seteditBody,handleEdit}) => {

  const {id} = useParams()
  const clickedPost = post.find((element) => (element.id.toString() == id)) 

  return (
    <div className='postpage'>
      <article className='postpage_post'>
        {clickedPost &&
            <>
              <h2 className='postpage_title'>{clickedPost.title}</h2>
              <p className='postpage_date' >{clickedPost.datetime}</p>
              <p className='postpage_body' >{clickedPost.body}</p>
              <div className='postpage_buttons'>
                <Link to={`/edit/${clickedPost.id}`}><button>Edit</button></Link>
                <button onClick={() =>handleDelete(clickedPost.id)}>Delete Post</button>
              </div>
            </>
        }

        {!clickedPost &&
            <>
              <h2 className='postpage_notfound'>Post Not Found</h2>
              <Link to="/">
                <p>Visit our home page</p>
              </Link>
            </>
        }
      </article>
    </div>
  )
}

export default PostPage