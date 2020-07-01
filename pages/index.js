import Layout from '../components/Layout';

export default () => (
    <Layout>
        <div className="landing">
            <div className="box-info">
                <div className="border1">
                    <div className="banner-text">
                        <h1 className="landingHeading">Hi, I'm Nerina Bisun</h1>
                        <h3 className="introHeading">a Full Stack Web Developer</h3>
                        <p className="introParagraph">learning, improving and perfecting every day</p>
                        <hr />
                        <br />
                        <p className="introParagraph">
                            HTML || CSS || Bootstrap || Javascript || React || NodeJS || Express || MongoDB || NextJS
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`
       
        
    .landing {
        padding: 80px;
        min-height: 100%;
    }
   
    .banner-text hr {
        border-top: 5px solid white;
        width: 50%;
        margin: auto;
    }
    .landingHeading {
        padding-top: 50px;
        text-align: center;
        font-size: 5.5rem;
        font-weight: bolder;
        color: gray;
    }
    .introHeading {
        text-align: center;
        font-weight: bold;
        font-size: 3rem;
        color: #fff
    }
    .introParagraph {
        text-align: center;
        color: #fff;
        font-size: 22px;
    }
  `}</style>

    </Layout>
);