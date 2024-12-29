import React from "react"
import { Routes, Route, Link, Outlet } from "react-router-dom"

function Home() {
  return <div>Home</div>
}

function Products() {
  return <div>Products</div>
}

function RouteNotFound() {
  return <div>Page not found</div>
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  )
}

// Our header component that gets used in our <Layout> component
function Header() {
  return (
    <header>
      <div>Header with Logo and nav</div>
      <Nav />
    </header>
  )
}

// Our footer component that gets used in our <Layout> component
function Footer() {
  return <footer>Website footer</footer>
}

// The <Outlet> from react-router-dom displays any child routes, almost like
// passing through "children" in a component
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App