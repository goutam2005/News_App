
import React from 'react'

const  Newsitem =(props)=> {
  
    const { title, description, imageurl, url, author, date } = props
    return (
      <div>
        <div className="font-bold text-black mb-2">{title}...</div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img style={{ width: '324px', height: '193px', objectFit: 'cover' }} className="w-full text-black" src={!imageurl ? "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-09/240921-joe-biden-quad-summit-wm-303p-65c92e.jpg" : imageurl} />
          <div className="px-6 py-4">
            <p className="text-gray-700 text-base">
              {description}... 
            </p>
            <br />
            <p className="text-gray-700 text-base">By {!author?"Unknown":author} on 
            {new Date(date).toGMTString()} </p>
          </div>
          
          <a href={url} target="_blank" rel="noopener noreferrer">
            <button className="mt-4 ml-9 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          </a>       


        </div>

      </div>
    )
  
}

export default Newsitem
