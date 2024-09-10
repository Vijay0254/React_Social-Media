import React, { useEffect } from 'react'
import Header from './Pages/Header/Header'
import Nav from './Pages/Nav/Nav'
import Home from './Pages/Home/Home'
import NewPost from './Pages/NewPost/NewPost'
import PostPage from './Pages/PostPage/PostPage'
import About from './Pages/About/About'
import Missing from './Pages/Missing/Missing'
import Footer from './Pages/Footer/Footer'
import { useState } from 'react'
import { format } from "date-fns"
import "./App.css"
import { Route, Routes, useNavigate } from 'react-router-dom'
import Postcall from './Api/Postcall'
import Editpost from './Components/Editpost/Editpost'


const App = () => {

  const navigate = useNavigate()
  const [search,setsearch] = useState("")
  const [post,setpost] = useState([])

  const [searchResults,setsearchResults] = useState([])
  const [postTitle,setPostTitle] = useState("")
  const [postBody,setpostBody] = useState("")
  const [editTitle,seteditTitle] = useState("")
  const [editBody,seteditBody] = useState("")

  //to give the required post in home
  function results(){
    const filteredResults = post.filter((element,index) =>(
                                  (element.body).toLowerCase().includes(search.toLowerCase())) 
                                  ||
                                  ((element.title).toLowerCase().includes(search.toLowerCase()))
                                )
    setsearchResults(filteredResults.reverse())
  }

  useEffect(() =>{
    results()
  },[post,search])

  //to submit new post in post page(newpost component)
  async function handleSubmit(event){
    event.preventDefault()
    const id = post.length ? post[post.length-1].id+1 : "1"
    const datetime = format(new Date(), 'MMMM dd, yyyy  pp')
    const newPost = {id: id,title: postTitle,datetime: datetime, body: postBody}
    //to post in server
    try{
      const response = await Postcall.post('/post',newPost)
      //that's it to post in server :) (just a single line)
      const allPost = [...post, newPost]
      setpost(allPost)
      setPostTitle("")
      setpostBody("")
      navigate("/")
      }
      catch(error){
        console.log(`ERROR IN HANDLE SUBMIT: ${error}`)
      }
  }

  //to delete new post in post page(newpost component)
  async function handleDelete(id){
    //to post in server
    try{
      await Postcall.delete(`/post/${id}`) 
      //that's it to delete in server :) (just a single line)
      setpost(post.filter((element,index) =>(
        element.id!=id)
      ))
    }
    catch{
      console.log(`ERROR IN HANDLE DELETE: ${error}`)
    }
  }

  async function handleEdit(id) {
    const datetime = format(new Date(), 'MMMM dd, yyyy  pp')
    const newPost = {id: id,title: editTitle,datetime: datetime, body: editBody}
    //to update(put) in server
    try{
      const response = await Postcall.put(`/post/${id}`, newPost)
      //that's it to update in server :) (just a single line)
      const updatedPost = post.map((element,index) => element.id==id ? {...response.data} : element)
      setpost(updatedPost)
      seteditTitle("")
      seteditBody("")
      navigate("/")
    }
    catch(error){
      console.log(`ERROR IN HANDLE EDIT: ${error}`)
    }
  }

  //to fetch data 
  async function fetchPost(){
    try{
      const response = await Postcall.get('/post')
      setpost(response.data)
    }
    catch(error){
      console.log(`ERROR: ${error}`)
    }
  }

  useEffect(() =>{
    fetchPost()
  },[])

  return (
    <div className='main_con'>
      <Header title="Social Media" />
      <Nav search={search} setsearch={setsearch} />
     
      <Routes>
        <Route path='/' element={<Home post={searchResults} />} />
        
        <Route path='/post'>
          <Route index element={<NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setpostBody={setpostBody} />} />
          <Route path=':id' element={<PostPage post={post} handleDelete={handleDelete} />} />
        </Route> 
        
        <Route path='/edit/:id' element={<Editpost post={post} editTitle={editTitle} seteditTitle={seteditTitle} editBody={editBody} seteditBody={seteditBody} handleEdit={handleEdit} />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App


