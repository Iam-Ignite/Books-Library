import React from 'react'

function Navbar({searchBook, setSearchbook,searchItem}) {
  return (
    <div className="h-80 w-full flex flex-col justify-center items-center bg-image-nav">
    <p className='text-white font-bold text-3xl mb-4'>Get your books in one place</p>
      <div className="bg-white flex w-96 justify-between py-2 px-6 h-10">
       <input type="text" className='w-full outline-none' onKeyDown={searchItem} value={searchBook} onChange={(e) => setSearchbook(e.target.value)} placeholder='Search your book here' />
       
       <img src="/magnifying-glass (2).svg" alt="search" />
      </div>
       <select name="" className='bg-white flex w-96 justify-between py-2 px-6 h-10 mt-3 outline-none' placeholder='Choose a genre' id="">
       <option value="Choose" className=''>Choose a genre</option>
         <option value="education">Education</option>
         <option value="Polity">Polity</option>
         <option value="Fictional">Fictional</option>
         <option value="Health">Health</option>
         <option value="Mathematic">Mathematic</option>
         <option value="Langeuse">Language</option>
         <option value="Physic">Physic</option>
         <option value="Finance">Finance</option>
       </select>
    </div>
  )
}

export default Navbar