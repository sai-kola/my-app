import React from 'react';
import './Home.css';

const blocks = [
  {
    imgSrc: 'https://wp-themes.com/wp-content/themes/astra/inc/assets/images/starter-content/building.svg',
    heading: 'Block 1',
    paragraph: 'This is the first block.',
  },
  {
    imgSrc: 'https://wp-themes.com/wp-content/themes/astra/inc/assets/images/starter-content/building.svg',
    heading: 'Block 2',
    paragraph: 'This is the second block.',
  },
  {
    imgSrc: 'https://wp-themes.com/wp-content/themes/astra/inc/assets/images/starter-content/building.svg',
    heading: 'Block 3',
    paragraph: 'This is the third block.',
  },
  {
    imgSrc: 'https://wp-themes.com/wp-content/themes/astra/inc/assets/images/starter-content/building.svg',
    heading: 'Block 4',
    paragraph: 'This is the fourth block.',
  },
];

const Home = () => {
  return (
    <div className='container'>
      <div className="headerBlock">
        <div className="headerBlockLeft">
          <h1>Your Idea Matters</h1>
          <p>Pulvinar enim ac tortor nulla facilisi tristique facilisi elementum sollicitudin eget lorem.</p>
          <a href="#">Make a Website</a>
        </div>
        <div className="headerBlockRight">
          <figure><img src="https://wp-themes.com/wp-content/themes/astra/inc/assets/images/starter-content/hero-img.svg" alt="Hero Image" /></figure>
        </div>
      </div>
      <div className="fourBlocks">
        {blocks.map((block, index) => (
          <div key={index} className="block">
            <img src={block.imgSrc} alt={block.heading} />
            <h3>{block.heading}</h3>
            <p>{block.paragraph}</p>
          </div>
        ))}
      </div>
      <div className='servicesBlock'>
        <div className='Sheading'>Our Services</div>
        <div className='services'>
          <div className='service'>
            <img className='imgServices' src="https://wp-themes.com/wp-content/themes/astra/inc/assets/images/starter-content/branding.jpg" alt="Branding Design" />
            <h2>Branding Design</h2>
          </div>
          <div className='service'>
            <img className='imgServices' src="https://wp-themes.com/wp-content/themes/astra/inc/assets/images/starter-content/graphic.jpg" alt="Graphic Design" />
            <h2>Graphic Design</h2>
          </div>
          <div className='service'>
            <img className='imgServices' src="https://wp-themes.com/wp-content/themes/astra/inc/assets/images/starter-content/web.jpg" alt="Web Development" />
            <h2>Web Development</h2>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footerSection">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footerSection">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footerSection">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">App Development</a></li>
            <li><a href="#">SEO Services</a></li>
            <li><a href="#">Content Writing</a></li>
          </ul>
        </div>
        <div className="footerSection">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
