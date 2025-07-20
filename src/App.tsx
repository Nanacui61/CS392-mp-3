import { createBrowserRouter, RouterProvider } from 'react-router'
import  Root  from './components/Root.tsx'


// built the router according to the schema
// u can have multiple routers
const router= createBrowserRouter(
  [
    { path:"*", Component:Root}
  ]


)

export default function App() {
  
  return (
    <>
      <RouterProvider router={router}/>

    </>
  )
}
