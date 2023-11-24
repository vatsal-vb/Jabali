import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <div className="heading-about">About Us</div>
            <div className="text-container">
                <p className="paragraph">
                   Video games is a massive industry with $200B+ in revenues and more than 3.5B players. Over the last decades, the industry has grown and evolved through technological advances, including the shift to mobile, cloud computing, and new business and distribution models. 
AI is the next technological chapter for the industry. 

                </p>
                <p className="additional-paragraph">
                  Jabali's mission is to democratize creation and bring innovation to video games. We are creating a AI-native engine, which is not just about cost reduction and efficiency, but also to empower more visionary creatives to introduce novel gameplay. Jabali will offer a comprehensive, easy-to-use, AI engine to create coherent games, including content, code generation, and personalization.
                </p>
            </div>
        </div>
    );
};

export default About;
