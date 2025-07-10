import React from 'react'
import { Outlet } from "react-router-dom";


function root() {
  return (
   <>
   <header>
  <h1>HEADER</h1>
</header>
<hr />
   <Outlet/>

    <hr/>
<footer>
  <h1>FOOTER</h1>
</footer>

   </>
  )
}

export default root