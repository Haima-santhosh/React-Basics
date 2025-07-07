import React from 'react'

const socialMedia=[
    {
        link:"",
        image:"https://static.vecteezy.com/system/resources/thumbnails/018/930/752/small/twitter-logo-twitter-icon-transparent-free-free-png.png"
    },
     {
        link:"",
        image:"https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png"
    },
     {
        link:"",
        image:"https://static.vecteezy.com/system/resources/previews/042/127/122/non_2x/red-circle-bordered-youtube-logo-with-long-shadow-on-transparent-background-free-png.png"
    },
     {
        link:"",
        image:"https://static.vecteezy.com/system/resources/thumbnails/042/148/632/small/instagram-logo-instagram-social-media-icon-free-png.png"
    },
]

const Banner = () => {
    return (
        <div className='w-full h-screen grid sm:grid-cols-1 md:grid-cols-2'>
            <div className="  px-10 flex flex-col justify-center gap-10">
                <h4 className='text-red-500'>Welcome To <span className='text-2xl font-extrabold uppercase'>SWIGGY !</span></h4>
                <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in doloribus odit quisquam nesciunt consectetur! Sit quis debitis modi, asperiores ratione corrupti aspernatur tempore placeat, maxime quaerat perferendis nesciunt incidunt.
                    Accusamus provident autem, ab, voluptate possimus quasi nemo cupiditate quidem rerum officiis facilis architecto iure nulla illum corrupti nostrum dignissimos debitis illo enim fuga voluptatibus laborum officia deleniti. Eligendi, deserunt.</p>
                    
                    <p className='text-green-500 flex justify-start items-center gap-8'>Subscribe to Newsletter <button className='border w-fit px-4 rounded text-red-600 hover:text-white hover:bg-red-800'>Click Me</button></p>
            <div className='flex justify-start items-center gap-5'>
                <p className='text-white capitalize'>Follow us on :</p>
                {socialMedia.map((item)=>{
                    return(

  <a key={item.image} className="w-10 h-10  rounded-full overflow-hidden border hover:border-red-700" href={item.link}>
                    <img className='w-full h-full' src={item.image} alt="" />
                </a>
                    )
                })}
              


            </div>
            
            
            </div>

            <div className=" flex justify-center items-center">
                <img className='w-2/3' src="https://static.vecteezy.com/system/resources/previews/048/386/753/non_2x/a-plate-filled-with-bbq-ribs-corn-on-the-cob-and-grilled-vegetables-top-view-isolated-on-a-transparent-background-free-png.png" alt="" />
            </div>
        </div>
    )
}

export default Banner