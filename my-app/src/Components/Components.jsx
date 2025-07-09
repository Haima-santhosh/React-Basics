import React, { useEffect, useState } from 'react'

const Components = () => {
    const[state, setState]=useState(0)

    const[name,setName]=useState("")
    const[age,setAge]=useState(0)
    const[email,setEmail]=useState("")
    const[unMount,setUnMount]=useState("border")



//    1. useEffect(()=>
//     {
// console.log("Logged"); useEffect applied once whenever the webpage rendered if there is no elements in the dependency arryay

//     },[])



//  2.useEffect(()=>
//     {
// console.log("Logged"); useEffect applied  whenever  elements or variables in the dependency arryay changed

//     },[state])



 useEffect(()=>
    {
console.log("Logged"); 

    
     return()=>
     {
      console.log("The component is unmount");
        
     }
    
    }
    
    ,[state])
  
    


     console.log({state});

  return (
   <>

         {/* <div className='h-screen w-full border bg-slate-300 flex justify-center items-center'>
       
       
        
        <button className=' border-2 bg-red-400 border-red-700 rounded py-3 px-1 m-5 font-bold text-white uppercase' onClick={(()=>setState(state+1))}>Change State</button>
         <br />
         Components ={state}

         </div> */}

 {/* ***USE EFFECT THIRD CONDITION ***** */}  
 
 {/* IF ELEMENT WILL UNMOUNT FROM THE SCREEN */}
  {/* <div className='h-screen w-full border bg-slate-300 flex justify-center items-center hidden'></div> */}

    <div className={`h-screen w-full border bg-slate-300 flex justify-center items-center  ${unMount}`}>
       
        
        <button className=' border-2 bg-red-400 border-red-700 rounded py-3 px-1 m-5 font-bold text-white uppercase' onClick={(()=>setUnMount("hidden"))}>Change State</button>
         <br />
         Components ={state}

    </div>
   
   </>
  )
}

export default Components