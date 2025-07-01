import React from 'react'
import  "./header.css"

// export const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }  // MULTIPLE COMPONENT CAN BE AVAILABLE



const Header = () => {
  return (
   <div className="container">
    <div className="section-1">
       logo
    </div>
     <div className="section-2">
         <a href="">Home</a> 
         <a href="">About</a>  
        </div>
   </div>
   
  )
}

export default Header // A MODULE CAN NOT HAVE MULTIPLE DEFAULT