import React from 'react'
import "./Home.css"
import Feed from '../../Components/Feed/Feed'

const Home = ({post}) => {
  return (
    <div className='home'>
      {post.length ? (<Feed post={post} />) : (<p className='home_nopost' style={{marginTop: "2rem"}}>No Post to display...</p>)}
    </div>
  )
}

export default Home