import Intro from '../Intro/Intro';
import Design from '../Design/Design';
import webDesignImage from '../../assets/home/mobile/image-web-design.jpg';
import appDesignImage from '../../assets/home/mobile/image-app-design.jpg';
import graphicDesignImage from '../../assets/home/mobile/image-graphic-design.jpg';


const Home = () => {
    return (
        <div>
            <Intro />
            <div className="pt-[106px]">
                <Design name='WEB DESIGN' sub='VIEW PROJECTS' bg={webDesignImage} />
                <Design name='APP DESIGN' sub='VIEW PROJECTS' bg={appDesignImage} />
                <Design name='GRAPHIC DESIGN' sub='VIEW PROJECTS' bg={graphicDesignImage} />
            </div>
        </div>
    )
}

export default Home;