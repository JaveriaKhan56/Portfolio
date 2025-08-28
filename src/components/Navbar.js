import React from 'react'
import "../tailwind.css";

const Navbar = () => {
  return (
    // <div className='text-white flex justify-between items-center px-3 font-semibold text-lg'>
    //     <a href='home' className='no-underline p-3 ' >Portfolio</a>
    //   <div className='text-right text-white'>
    //     <a href='home' className='no-underline p-3 ' >Home</a>
    //     <a href='skills' className='no-underline p-3 ' >Skills</a>
    //     <a href='project' className='no-underline p-3 ' >Project</a>

    //   </div>
    // </div>
<div className="bg-black text-white flex justify-between items-center px-3 text-lg pt-10 px-20">
<p className="no-underline p-3"
>
  Portfolio
</p>

  <div className="text-right">
<a href="#Home" className="no-underline p-3"
  style={{ borderBottom: "2px solid transparent" }}
  onMouseEnter={(e) => (e.currentTarget.style.borderBottom = "2px solid yellow")}
  onMouseLeave={(e) => (e.currentTarget.style.borderBottom = "2px solid transparent")}
>
  Home
</a>
<a href="#Skills" className="no-underline p-3"
  style={{ borderBottom: "2px solid transparent" }}
  onMouseEnter={(e) => (e.currentTarget.style.borderBottom = "2px solid yellow")}
  onMouseLeave={(e) => (e.currentTarget.style.borderBottom = "2px solid transparent")}
>
  Skills
</a>
<a href="#Project" className="no-underline p-3"
  style={{ borderBottom: "2px solid transparent" }}
  onMouseEnter={(e) => (e.currentTarget.style.borderBottom = "2px solid yellow")}
  onMouseLeave={(e) => (e.currentTarget.style.borderBottom = "2px solid transparent")}
>
  Project
</a>
<a href="#Contact" className="no-underline p-3"
  style={{ borderBottom: "2px solid transparent" }}
  onMouseEnter={(e) => (e.currentTarget.style.borderBottom = "2px solid yellow")}
  onMouseLeave={(e) => (e.currentTarget.style.borderBottom = "2px solid transparent")}
>
  Contact
</a>


</div>
</div>



  )
}

export default Navbar
