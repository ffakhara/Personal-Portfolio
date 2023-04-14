import '../styles/Projects.css';
import resturantImage from '../assets/lh.png';
import chessboardIamage from '../assets/chess.png';
import sweetyImage from '../assets/sweety.png';
import { ProjectItem } from '../components/ProjectItem';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Resturant Website',
      description: 'Using Html and CSS I have created a website for Lahori Resturant.It includes main dishes offered by resturant along with and recipies.',
      url: '/projects/final-mat-proj/index.html',
      image: resturantImage  
    },
    {
      id: 2,
      title: 'Chess Board',
      description: 'Using HtmNamel and CSS I have created a Chessboard.Here I have used tables and icons.The main purpose is to develop chessboard Layout.',
      url: '/projects/uib-data-chessboard-ffakhara',
      image: chessboardIamage  
    },
    {
      id: 3,
      title: 'Donuts Website',
      description: 'Using Html and CSS I have created a website for Donuts Shop.I have used cards for dispalying different varities offered.',
      url: '/projects/uib-sweety-layout-ffakhara',
      image: sweetyImage  
    }
  ];

  const projItems = projects.map((project) => {
     return (<ProjectItem key={project.id} projectName={project.title} description={project.description} url={project.url} image={project.image} />)
  });

  return (
    <>
     <section id="projects" className="d-flex flex-column w-100 justify-content-center align-items-center projects-sec">
     <div className="p-3 project">
        <h2 className="m-3">My Recent Work</h2>
        <p className="mb-5"> Here are a few past design projects I've worked on.</p>
      </div>

       <div className="d-flex flex-md-row flex-sm-column justify-content-md-evenly align-items-sm-center w-100">

          {projItems}
          
      </div>

     </section>
    </>
     
  );
};

export default Projects;