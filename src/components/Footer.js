import '../styles/Footer.scss'; 

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} {'EEKart. All rights reserved.'}</p>    
  </footer>
);

export default Footer;