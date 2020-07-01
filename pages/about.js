import Layout from '../components/Layout';

const About = () => (
    <Layout>
        <section className="about" id="about">
            <div className='container'>
                <h2 className='sectionHeading'>About Me</h2>
                <hr />
                <br />
                <br />
                <p className="aboutIntro"> I am a self-proclaimed perfectionist, with meticulous attention to detail and perseverance.<br /><br />
                    I am passionate about creating applications that make a change, either making someones life just a little bit easier, or a work task simpler.
                    I gained many skills to do just that through a full stack web development bootcamp and am a competent MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack developer.
      </p>
                <br />
                <p className="aboutIntro">
                    My passion for tech developed in my school days, I worked in the legal field for a number of years until the fire and drive for the tech world could no longer
                     dampened.  I signed up for the abovementioned bootcamp and am not turning back.
      </p>
                <br />
                    <a
                        href="../static/Nerina Bisun CV.pdf"
                        download="Nerina Bisun CV"
                        className="resumeDownload"
                        target="_blank">
                        Download my Resume</a>
                <br />
            </div>
            <style jsx>{`
    .about {
        justify-content: center;
        text-align: center;
        color: white;
        font-weight: bolder;
        padding-bottom: -40px;
      }

    hr{
        border-top: 5px solid white;
        width: 50%;
        margin: auto;
      }
      
    .sectionHeading {
        padding-top: 30px;
        font-size: 5rem;
        font-weight: bold;
        color: white; 
      }
    
    .aboutIntro {
        text-align: center;
        font-style: italic;
        font-size: 20px;
        color: #fff
      }
    .resumeDownload {
        font-size: 20px;
    }
    .btn-show-all {
        text-decoration: none;
        color: #fff;
      }
      
      }
`}</style>
        </section>
    </Layout>
);

export default About;