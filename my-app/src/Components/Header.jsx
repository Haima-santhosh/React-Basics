import React from 'react'
import { Link } from 'react-router-dom'

const NavLink =
    [
        {
            url: "/",
            text: "Home"
        },
        {

            url: "about",
            text: "About"
        },
        {

            url: "contact",
            text: "Contact"

        },
        {
            url: "",
            text: "Special"

        }
    ]


const Header = () => {
    const handleClick=()=>
    {
  localStorage.setItem('status', JSON.stringify(true))
    }
    return (
        <>
            <header className='grid md:grid-cols-2 sm:grid-cols-[20%_80%]  lg:grid-cols-2 xl:grid-cols-2 gap-5 w-full h-20 border b-2 shadow-xl'>
                <div className="h-full flex justify-around items-center">

                    <img className='w-16 ml-10' src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?
                    nwm=1&nws=1&industry=food&sf=&txt_keyword=All" alt="" />
                    <h2 onClick={handleClick} className='cursor-pointer text-center mx-auto w-fit  text-2xl uppercase font-extrabold text-red-800 italic relative'>SWIGGY
                        <span className='text-red-600 capitalize font-extrabold absolute text-[8px] -bottom-4 -left-0'>everything is delicious</span></h2>
                </div>



                <div className="text-center h-full flex justify-around items-center">
                    {NavLink.map((item) => (


                        <Link key={item.text} className="text-red-400 hover:text-red-700" to={item.url} children={item.text}/>

                    ))}
                </div>
            </header>


        </>

    )
}




export default Header