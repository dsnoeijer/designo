import Intro from '../Intro/Intro';
import DesignCard from '../DesignCard/DesignCard';
import AttributeCard from '../AttributeCard/AttributeCard';
import CallToAction from '../CallToAction/CallToAction';
import passionateImage from '../../assets/home/desktop/illustration-passionate.svg';
import resourefulImage from '../../assets/home/desktop/illustration-resourceful.svg';
import friendlyImage from '../../assets/home/desktop/illustration-friendly.svg';
import Footer from '../Footer/Footer';


const Home = () => {
    const webDesignImage = 'image-web-design.jpg';
    const appDesignImage = 'image-app-design.jpg';
    const graphicDesignImage = 'image-graphic-design.jpg';
    return (
        <div className='h-auto ml-auto mr-auto'>
            <Intro />
            <div className="w-[327px] ml-auto mr-auto pt-[111px] md:pt-[96px] md:w-[689px]">
                <DesignCard name='WEB DESIGN' sub='VIEW PROJECTS' bg={webDesignImage} />
                <DesignCard name='APP DESIGN' sub='VIEW PROJECTS' bg={appDesignImage} />
                <DesignCard name='GRAPHIC DESIGN' sub='VIEW PROJECTS' bg={graphicDesignImage} />
            </div>
            <div className="pt-[78px] ml-auto mr-auto md:w-[689px] ">
                <AttributeCard name='PASSIONATE' img={passionateImage} text="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions." />
                <AttributeCard name='RESOURCEFUL' img={resourefulImage} text="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs." />
                <AttributeCard name='FRIENDLY' img={friendlyImage} text=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide." />
            </div>
            <div className="pt-[80px] ml-auto mr-auto bg-linear-bw">
                <CallToAction />
            </div>
            <div className='pl-6 pr-6 bg-[#1D1C1E]'>
                <Footer />
            </div>
        </div>
    )
}

export default Home;