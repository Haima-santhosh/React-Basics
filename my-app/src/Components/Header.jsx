import React from 'react'

const NavLink = 
    [
        {
            url: "",
            text: "Home"
        },
        {

            url: "",
            text: "About"
        },
        {

            url: "",
            text: "Contact"

        },
        {
 url: "",
            text: "Special"

        }
    ]


const Header = () => {
    return (
        <>
            <header className='grid md:grid-cols-2 sm:grid-cols-[20%_80%]  lg:grid-cols-2 xl:grid-cols-2 gap-5 w-full h-20 border b-2 shadow-xl'>
                <div className="h-full flex justify-center items-center">
                    <h2 className='text-center text-2xl uppercase font-extrabold text-red-800 italic'>
                        <img className='w-20' src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All" alt="" /></h2>

                </div>
                <div className="text-center h-full flex justify-around items-center">
                    {NavLink.map((item)=>(

                        <a  key={item.text} href={item.url} className=' text-red-400 hover:text-red-700'>{item.text}</a>
                  
                    ))}
                </div>
            </header>


        </>

    )
}




export default Header