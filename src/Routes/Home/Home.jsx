import Intro from '../../Components/Home/Intro/Intro';
import DesignCard from '../../Components/Home/DesignCard/DesignCard';
import AttributeCard from '../../Components/Home/AttributeCard/AttributeCard';
import CallToAction from '../../Components/CallToAction/CallToAction';
import passionateImage from '../../assets/home/desktop/illustration-passionate.svg';
import resourefulImage from '../../assets/home/desktop/illustration-resourceful.svg';
import friendlyImage from '../../assets/home/desktop/illustration-friendly.svg';
import Footer from '../../Components/Common/Footer/Footer';


const Home = () => {
    const webDesignImage = 'image-web-design.jpg';
    const appDesignImage = 'image-app-design.jpg';
    const graphicDesignImage = 'image-graphic-design.jpg';
    return (
        <div className='w-[375px] h-auto ml-auto mr-auto md:w-[768px] lg:w-[1440px]'>
            <main>
                <div>
                    <Intro />
                    <div className="w-[327px] ml-auto mr-auto pt-[111px] md:pt-[96px] md:w-[689px] lg:flex lg:justify-between lg:w-[1111px] lg:pt-[137px]">
                        <div className='lg:h-[640px] '>
                            <DesignCard name='WEB DESIGN' sub='VIEW PROJECTS' bg={webDesignImage} className="lg:h-[640px] lg:top-[-641px]" textClass="lg:bottom-[1010px]" />
                        </div>
                        <div className='lg:h-[640px]'>
                            <DesignCard name='APP DESIGN' sub='VIEW PROJECTS' bg={appDesignImage} className="lg:h-[308px] lg:top-[-309px]" textClass="lg:bottom-[500px]" />
                            <DesignCard name='GRAPHIC DESIGN' sub='VIEW PROJECTS' bg={graphicDesignImage} className="lg:h-[308px] lg:top-[-309px]" textClass="lg:bottom-[500px]" ptClass="lg:pt-6" />
                        </div>
                    </div>
                    <div className="pt-[78px] ml-auto mr-auto md:w-[689px] lg:flex lg:justify-between lg:w-[1110px] lg:pt-[143px]">
                        <AttributeCard name='PASSIONATE' img={passionateImage} text="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions." />
                        <AttributeCard name='RESOURCEFUL' img={resourefulImage} text="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs." />
                        <AttributeCard name='FRIENDLY' img={friendlyImage} text=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide." />
                    </div>
                    <div className="pt-[80px] ml-auto mr-auto bg-linear-bw md:bg-linear-bw-md lg:pt-[120px] lg:bg-linear-bw-lg">
                        <CallToAction />
                    </div>
                    <div className='pl-6 pr-6 bg-[#1D1C1E] lg:w-[1440px] lg:pl-0 lg:pr-0 lg:h-[320px]'>
                        <Footer />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;