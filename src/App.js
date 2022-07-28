import './App.css';
import Header from "./components/Partials/Header";
import React, {useEffect, useState} from "react";
import Burger from "./UI/Burger";
import Home from "./components/pages/Home";
import Footer from "./components/Partials/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from "./components/pages/About";
import Events from "./components/pages/Events";
import Blogs from "./components/pages/Blogs";
import Contacts from "./components/pages/Contacts";
import News from "./components/pages/News";
import NotFound from "./components/pages/NotFound";
import BlogPage from "./components/pages/BlogPage";
import NewPage from "./components/pages/NewPage";

function App() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = ()=> {
        setHamburgerOpen(!hamburgerOpen)
    }
    const[events, setEvents] = React.useState([])

    useEffect(()=> {
        fetch('https://react.testkz.ru/api/event')
            .then(response => response.json())
            .then(events => {
                {
                    setEvents(events)
                }
            })
    }, [])


  return (
   <Router>
       <div className="App">
           <Header toggleHamburger={toggleHamburger}/>
           <Burger isOpen={hamburgerOpen}/>
           <main className="main">
                <Routes>
                    <Route exact={true} path='/' element={<Home/>}/>
                    <Route exact={true} path='/about' element={<About/>}/>
                    <Route exact={true} path='/events/:id' element={<Events/>}/>
                    <Route path="/events" element=<Events/>/>
                    <Route exact={true} path='/news' element={<News/>}/>
                    <Route path="/news/:id" element={<NewPage/>}/>
                    <Route exact={true} path='/blogs' element={<Blogs/>}/>
                    <Route path="/blogs/:id" element={<BlogPage/>}/>
                    <Route exact={true} path='/contacts' element={<Contacts/>}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
           </main>
           <Footer/>
       </div>
   </Router>
  );
}

export default App;
