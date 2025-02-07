import './About.css';
import aboutImage from '../images/About_us.jpeg'; // Importing the image


function About() {
    return (
        <div className="about-page">
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet"></link>
            <div className="about-image">
                <img src={aboutImage} alt="About Us" />
            </div>
            <div className="about-text">
                <h1>About Us</h1>
                <p>
                Nestled in the heart of Bengaluru, our restaurant is sure to transport you to the by-lanes in Japan. 
                </p>
                <p>
                Our space is a lovingly curated slice of Japanese art and culture, featuring a main dining room with a sushi and bar counter, outdoor garden space with live yakitori, a Japanese-style lower seating area, and private dining arrangements for up to 20 people. 
                </p>
                <p>
                Additionally, we offer home catering services for special occasions, bringing the full Japanese kitchen experience to your doorstep. You can also enjoy our delicacies by ordering online or through delivery platforms like Swiggy and Zomato.
                </p>
            </div>
        </div>
    );
}

export default About;
