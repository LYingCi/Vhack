import React from 'react';
import Discussion from './pages/discussion';
import Post from "./pages/createPost";
import Footer from './pages/footer';
import Mainlayout from './layout/Mainlayout'
import'./reviewpage.css';


function reviewpage() {
  return (
    <Mainlayout>
    <div classname="reviewpage">
        <Discussion/>
        <Post/>
        <Footer/>

    </div>
    </Mainlayout>
  )
}

export default reviewpage