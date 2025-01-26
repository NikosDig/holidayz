import React from "react"
import { Routes, Route } from "react-router-dom"
import RouteNotFound from "./components/RouteNotFound"
import Layout from "./components/router/Layout"
import Venues from "./components/venues"
import Contact from "./components/contact"
import Profile from "./components/profile"
import Home from "./components/Home"
import LogIn from "./components/login"
import ProductId from "./components/ProductId"
import SignUp from "./components/SignUp"
import EditProfile from "./components/EditProfile"



function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="venues" element={<Venues />} />
      <Route path="contact" element={<Contact />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<LogIn />} />
      <Route path="/product/:id" element={<ProductId/>} />
      <Route path="/signup" element= {<SignUp/>} />
      <Route path="/editProfile" element= {<EditProfile/>} />
      <Route path="*" element={<RouteNotFound />} />
      </Route>
      </Routes>
    </div>
  )
}

export default App