import React from 'react'
import "./Home.css";
import Project from "./Project"
import Contact from './Contact';
import Navbar from './Navbar';
// import Typed from "typed.js";


const Home = () => {
  // const typedRef = useRef(null)
  // useEffect(()=>{
  //   const options={
  //     strings:[
  //       // "Welcome to My Portfolio",
  //       "I'm Javeria Khan",
  //       // "Software Developer",
  //       // "From Pakistan",
  //     ],
  //     typeSpeed:50,
  //     backSpeed:50,
  //     // fadeOut:true,
  //     loop:true
  //   }
  //   const typed= new Typed(typedRef.current, options)
  //   return()=>{
  //     typed.destroy()
  //   }
  // }, [])

  const data = [
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCOL2rxCI41RFik6oEKfBiAWe9v7U2AYMnw&s",
      title: "Aptech Computer Education",
      subtitle: "Software Engineering Diploma",
      date: "Aug 2022 - Present",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/8/87/Allama_Iqbal_Open_University_logo.png",
      title: "Allama Iqbal Open University",
      subtitle: "Associate Degree in Commerce",
      date: "Aug 2021 - Dec 2023",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvOnO3n-d2PEDNfb746acoJVLm06PD1K7eDw&s",
      title: "Government Degree Science And Commerce College",
      subtitle: "Pre-Engineering",
      date: "Aug 2017 - Dec 2019",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN1cvTDZcqBj06cnN_m6ax6AoyQxDKzWHxVQ&s",
      title: "Huffaz Grammer School",
      subtitle: "Computer Science",
      date: "Aug 2014 - Mar 2017",
    },
  ];
  return (

    
    <div >
      <Navbar />
    <div className='header'>
              
      <div className="home text-center px-4 sm:px-6 lg:px-12">
        <h1 className="typed-text text-2xl sm:text-3xl lg:text-5xl font-bold mb-4" id="Home">
          Hi, I'm Javeria Khan
        </h1>
        <h4>From Pakistan</h4> 
        <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-tight">
          A passionate Software Engineer focused on modern web technologies, 
          building efficient, scalable, and elegant digital solutions.
        </p>
      </div>
      

      <br/> <br/>
      <div>
        <h1>About</h1>
        <p className='text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-tight'>
          Dedicated Software Engineer with experience in building modern web applications. I focus on writing clean code, ensuring efficiency, and delivering high-performance solutions. I’m always eager to explore new technologies and work on exciting projects on the side.
        </p>
      </div>


      <br/> <br/>
      <h1>Education</h1>
      <div className="education"> 
      {data.map((item, index) => (
        <div className="edu-item" key={index}>
          <div className="edu-left">
            <img src={item.logo} alt={item.title} className="edu-logo" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
          <div className="edu-date">{item.date}</div>
        </div>
      ))}
    </div>


      <br/> <br/>
    <h1 id='Skills'>Skills</h1>
  <button class="button" data-aos="flip-left" data-aos-delay="0">HTML</button>
  <button class="button" data-aos="flip-left" data-aos-delay="100">CSS</button>
  <button class="button" data-aos="flip-left" data-aos-delay="200">JavaScript</button>
  <button class="button" data-aos="flip-left" data-aos-delay="300">Bootstrap</button>
  <button class="button" data-aos="flip-left" data-aos-delay="400">PHP</button>
  <button class="button" data-aos="flip-left" data-aos-delay="500">MySQL</button>
  <button class="button" data-aos="flip-left" data-aos-delay="600">CANVA</button>
  <button class="button" data-aos="flip-left" data-aos-delay="700">FIGMA</button>
  <button class="button" data-aos="flip-left" data-aos-delay="800">MS WORD</button>
  <button class="button" data-aos="flip-left" data-aos-delay="900">EXCEL</button>
  <button class="button" data-aos="flip-left" data-aos-delay="1000">POWER POINT</button>


    

    <br/> 
    <br/> <br/>
    <h1 id='Project'>Projects</h1>
    <Project />
    
    
    <br/>
    <br/> <br/>
    <h1 id='Contact'> Contact</h1>
      <Contact />
    
    
    
    
    
    </div>
    </div>

  )
}
export default Home