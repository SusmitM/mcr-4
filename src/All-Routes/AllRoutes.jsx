import { Route,Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { SinglePost } from "../Pages/SinglePost"
import { Layout } from "../Components/Layout"



export const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Layout><Home/></Layout>} />
    <Route path="/singlePost/:postId" element={<Layout><SinglePost/></Layout>} />
   </Routes>
  )
}
