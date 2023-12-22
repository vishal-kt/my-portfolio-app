import React from 'react'

const Navbar = () => {
  return (
    <div className='h-9 bg-red-400 flex items-center justify-between ' >
        <div className='text-2xl font-semibold pl-2' >VISHAL KUMAR</div>
        <div className='flex gap-3 pr-3 text-blue-900 '> 
            <h4>Projects</h4>
            <h4>Career</h4>
            <h4>Blog</h4>
            <h4>Contact</h4>
            
        </div>
    </div>
  )
}

export default Navbar;