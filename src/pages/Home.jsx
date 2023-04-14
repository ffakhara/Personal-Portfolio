import '../styles/Home.css';
import mainImage from '../assets/main.gif';
import computerImage from '../assets/computer.svg';

const Home = () => {
  return (
    <div>
        <section className="d-flex flex-column w-100 justify-content-center align-items-center main-sec">
      <h2 className="main-sec-heading">Designer & Frontend Developer</h2>
      <p>I design and code beautifully simple things, and I love what I do.</p>
      <img className="main-img" src={mainImage} alt="welcome img" />
    </section>

    <section className="d-flex flex-column w-100 justify-content-center align-items-center mid-sec">
      <img className="computer-img" src={computerImage} alt="computer img"/>
    </section>

    </div>
  )
}

export default Home