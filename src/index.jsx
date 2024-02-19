import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './LANDINGPAGE/Layout';
import Home from './LANDINGPAGE/Home/Home';
import About from './LANDINGPAGE/About/About';
import Contact from './LANDINGPAGE/ContactUs';
import User from './LANDINGPAGE/User/User';
import Github,{githubInfoLoader} from './LANDINGPAGE/GITHUB/Github'
import { Route } from 'react-router-dom';
// import Tailwind from './TAILWINDCSS/Tailwind';




// const router= createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//      {
//       path:"",
//       element:<Home/>
//      },
//      {
//       path:"about",
//       element:<About/>
//      },
//      {
//       path:"contact",
//       element:<Contact/>
//      }

//     ]
//   }
// ])


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path='/'>
    //   <Route path='' element={<Currency />} />
    //   <Route path='todo' element={<TodoList />} />
    // </Route>
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='Github' 
      element={<Github />}
       />
    </Route>
    // <Route path='/'>
    //   <Route path='' element={<Tailwind/>} />
    // </Route>

  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
