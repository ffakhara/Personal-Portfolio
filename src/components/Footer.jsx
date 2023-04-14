import '../styles/Footer.css';
import { FaFacebook ,FaInstagram, FaGithub, FaEnvelope} from "react-icons/fa";


const Footer = () => {
  return (
    <div>
  
           <ul className="d-flex justify-content-center">
        <li className="footer-icon">
          <a href="https://www.instagram.com/" target="_blank"  rel="noopener noreferrer"> <FaInstagram/></a>
        </li>
        <li className="footer-icon">
          <a href="https://www.facebook.com/fakhara" target="_blank"  rel="noopener noreferrer"><FaFacebook/></a>
        </li>
        <li className="footer-icon">
          <a href="mailto:fakharamehmood_3@hotmail.com" target="_blank"  rel="noopener noreferrer"><FaEnvelope/></a>
        </li>
        <li className="footer-icon">
          <a href="https://github.com/ffakhara/" target="_blank"  rel="noopener noreferrer"><FaGithub/></a>
        </li>
      </ul>
      <div className="d-flex justify-content-center" > 
        <p>created by me &copy 2022</p>
      </div>
     </div>
  );
}

export default Footer;