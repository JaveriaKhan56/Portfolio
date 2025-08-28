import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

return (
    <div className="bg-black text-white flex justify-between items-center px-3 text-lg pt-10 px-20 relative">
      {/* Left Logo */}
      <p className="no-underline p-3">Portfolio</p>

      {/* Desktop Navbar */}
      <div className="hidden md:flex text-right">
        <a
          href="#Home"
          className="no-underline p-3"
          style={{ borderBottom: "2px solid transparent" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderBottom = "2px solid yellow")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderBottom = "2px solid transparent")
          }
        >
          Home
        </a>
        <a
          href="#Skills"
          className="no-underline p-3"
          style={{ borderBottom: "2px solid transparent" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderBottom = "2px solid yellow")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderBottom = "2px solid transparent")
          }
        >
          Skills
        </a>
                <a
          href="#Project"
          className="no-underline p-3"
          style={{ borderBottom: "2px solid transparent" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderBottom = "2px solid yellow")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderBottom = "2px solid transparent")
          }
        >
          Project
        </a>
        <a
          href="#Contact"
          className="no-underline p-3"
          style={{ borderBottom: "2px solid transparent" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderBottom = "2px solid yellow")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderBottom = "2px solid transparent")
          }
        >
          Contact
        </a>
      </div>

      {/* Hamburger (Mobile only) */} 
  <button
        className="md:hidden text-3xl z-50 bg-black text-white p-1 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Fullscreen Overlay Menu */}
      {isOpen && (
             <div className="fixed inset-0 bg-black text-white z-40 flex flex-col">
          <div className="flex flex-col items-center justify-center flex-1 space-y-6">
            <a
              href="#Home"
              className="text-2xl py-4 no-underline"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#Skills"
              className="text-2xl py-4 no-underline"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#Project"
              className="text-2xl py-4 no-underline"
              onClick={() => setIsOpen(false)}
            >
              Project
            </a>
            <a
              href="#Contact"
              className="text-2xl py-4 no-underline"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>


      )}
    </div>
  );
  
}

export default Navbar












    // <div className='text-white flex justify-between items-center px-3 font-semibold text-lg'>
    //     <a href='home' className='no-underline p-3 ' >Portfolio</a>
    //   <div className='text-right text-white'>
    //     <a href='home' className='no-underline p-3 ' >Home</a>
    //     <a href='skills' className='no-underline p-3 ' >Skills</a>
    //     <a href='project' className='no-underline p-3 ' >Project</a>

    //   </div>
    // </div>