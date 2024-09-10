import React, { useEffect } from 'react'
import "./Editpost.css"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Editpost = ({post,editTitle,seteditTitle,editBody,seteditBody,handleEdit}) => {
    
    const {id} = useParams()
    const clickedPost = post.find((element) => (element.id.toString() == id))  
  
    function edited(){
        if(clickedPost){
            seteditTitle(clickedPost.title)
            seteditBody(clickedPost.body)
        }
    }
    useEffect(() =>{
        edited()
    },[post,seteditTitle,seteditBody])
    return (
    <div className='editpost'>
        {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form action="" className='editpost_form' onSubmit={(event) =>event.preventDefault()}>
                        <label htmlFor="editpost_title">Title:</label>
                        <input type="text" id='editpost_title' value={editTitle} onChange={(event) =>seteditTitle(event.target.value)} />
                        <label htmlFor="editpost_body">Body:</label>
                        <textarea id="editpost_body" value={editBody} onChange={(event) =>seteditBody(event.target.value)} />
                        <button type='submit'onClick={() =>handleEdit(clickedPost.id)} >Submit</button>
                    </form>
                </>
        }
        {!editTitle &&
                <>
                    <h2 className='editpage_notfound'>Post Not Found</h2>
                    <Link to="/">
                        <p>Visit our home page</p>
                    </Link>
                </>

        }
    </div>
  )
}

export default Editpost