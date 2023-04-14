import '../styles/About.css';

const About = () => {
  return (
    <>
      <section id="about" className="d-flex flex-column w-100 justify-content-center align-items-center intro-sec">
     
     <div className="d-flex flex-column w-100 justify-content-center align-items-center p-3 intro">
       <h2 className="m-3">Hi, I'm Fakhara Farhan.</h2>
       <p className="mb-5">
         I am passionate frontend developer bringing you programming and design
         from the future. I strive to help clients bring their visions to life
         through meaningful design.I'm here to help turn your dreams and ideas
         into focused clear products.I believe in a philosophy  that
         there is always a creative solution to a problem no matter how
         challenging  is the project.
       </p>
     </div>
     <div className="d-md-flex justify-content-evenly justify-content-center align-items-center w-100">
       <div className="card mt-sm-5 mt-md-0 card-skills">
         <div className="card-body p-5">
           <span className="material-symbols-outlined skills-icon"> draw </span>
           <h3 className="card-title mb-4">Designer</h3>
           <p className="card-text">
             I value simple content structure, clean design patterns, and
             thoughtful interactions.
           </p>
           <h5>Things I enjoy designing:</h5>
           <p>UX, UI, Web, Apps, Logos</p>
           <h5>Design Tools:</h5>
           <ul>
             <li>Figma</li>
             <li>Whimsical</li>
             <li>Fonts Awsome</li>
           </ul>
         </div>
       </div>

       <div className="card mt-sm-5 mt-md-0 card-skills ml-md-5">
         <div className="card-body p-5">
           <span className="material-symbols-outlined skills-icon">
             code_blocks
           </span>
           <h3 className="card-title mb-4">Frontend Developer</h3>
           <p className="card-text">
             I like to code things from scratch, and enjoy bringing ideas to
             life in the browser.
           </p>
           <h5>Languages I speak:</h5>

           <p>HTML,CSS, Sass, Git</p>
           <h5>Dev Tools:</h5>
           <ul>
             <li>Bootstrap</li>
             <li>Github</li>
             <li>Terminal</li>
             <li>Visual Code</li>
           </ul>
         </div>
       </div>
     </div>
   </section>

    </>
  )
}

export default About;