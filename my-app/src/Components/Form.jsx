import React, { useState } from 'react'

const Form = () => {

const [name, setName]=useState('')
const [email, setEmail]=useState('')
const [password, setPassword]=useState('')
const [confirmPassword, setConfirmPassword]=useState('')
const [showPassword, setShowPassword]=useState(false)
const [error,setError]=useState({name:"",email:"",password:"",confirmPassword:""})

   



     const handleSubmission=(e)=>
     {
      
        e.preventDefault()
        // console.log("submitted");
        // alert("submitted")
        

if(!name)
{
    return setError((prev)=>({...prev,name:"Please Enter Your Name"}))
}
setError((prev)=>({...prev,name:""}))
if(!email)
{
   return  setError((prev)=>({...prev,email:"Please Enter Your Email"}))
}
setError((prev)=>({...prev,email:""}))
if(!password)
{
   return  setError((prev)=>({...prev,password:"Please Enter Your Password"}))
}
setError((prev)=>({...prev,password:""}))
if(!confirmPassword)
{
   return  setError((prev)=>({...prev,confirmPassword:"Please Enter a valid Password"}))
}

if(password!==confirmPassword)
{
    return setError((prev)=>({...prev,confirmPassword:"Your password is not matching!!!!!!"}))
}
setError((prev)=>({...prev,confirmPassword:""}))
setError({name:"",email:"",password:"",confirmPassword:""})

console.log(name,email,password,confirmPassword);






     }





    return (
        <>
            <div className='border h-screen bg-slate-400 py-10'>
                <h2 className='text-center text-2xl font-extrabold uppercase'>Registration Form</h2>
                <div className='w-full sm:w-2/3 mx-auto'>
                    <form action="" onSubmit={handleSubmission}>

                        


                        <div className="flex flex-col mb-4 relative">
                            <label htmlFor="" className="font-semibold mb-1">Name</label>
                            <input value={name} onChange={((e)=>setName(e.target.value))}

                                type="text"
                                className={` border  ${error.name ? " border-red-500 border-2" : "border-gray-800"} rounded-md px-4 py-2 my-3`}
                                placeholder="Please Enter Your Name"
                                
                            />
                            <p className='text-red-600 absolute text-xs -bottom-1 right-0 text-end'>{error.name}</p>


                            
                        </div>


                        <div className="flex flex-col mb-4 relative">
                            <label htmlFor="" className="font-semibold mb-1">Email</label>
                            <input value={email} onChange={((e)=>setEmail(e.target.value))}

                                type="email"
                               className={` border  ${error.email ? " border-red-500 border-2" : "border-gray-800"} rounded-md px-4 py-2 my-3`}
                                placeholder="Please Enter Your Email"
                                
                            />
                              
                              <p className='text-red-600 absolute text-xs -bottom-1 right-0 text-end'>{error.email}</p>
                        </div>


                        <div className="flex flex-col mb-4 relative">
                            <label htmlFor="" className="font-semibold mb-1">Password</label>
                            <input value={password} onChange={((e)=>setPassword(e.target.value))}

                                type={showPassword ? "text" : "password" }
                                className={` border  ${error.password ? " border-red-500 border-2" : "border-gray-800"} rounded-md px-4 py-2 my-3`}
                                placeholder="Please Enter Your Password"
                                
                            />
                              <p className='text-red-600 absolute text-xs -bottom-1 right-0 text-end'>{error.password}</p>
                        </div>


                        <div className="flex flex-col mb-4 relative">
                            <label htmlFor="" className="font-semibold mb-1">Confirm Password</label>
                            <input value={confirmPassword} onChange={((e)=>setConfirmPassword(e.target.value))}

                                type={showPassword ? "text" : "password"}
                                className={` border  ${error.confirmPassword ? " border-red-500 border-2" : "border-gray-800"} rounded-md px-4 py-2 my-3`}
                                placeholder="Please Confirm Your Password"
                                
                            />
                              <p className='text-red-600 absolute text-xs -bottom-1 right-0 text-end'>{error.confirmPassword}</p>
                            <input onChange={((e)=>
                            {
                                console.log(showPassword);
                                
                                if(e.target.checked)
                                {
                                    setShowPassword(true)
                                }
                                else
                                {
                                    setShowPassword(false)
                                }
                            })} type="checkbox" name="" id="" />
                        </div>

                      <div className='flex justify-center items-center gap-3'>
                        <button type='reset' className='border border-red-950 bg-red-400 hover:bg-red-800 text-white px-5 py-3 rounded-md'>Cancel</button>
                         <button type='submit' className='border border-green-950 bg-green-400 hover:bg-green-800 text-white px-5 py-3 rounded-md'>Submit</button>

                      </div>








                    </form>



                </div>













            </div>























        </>
    )
}

export default Form