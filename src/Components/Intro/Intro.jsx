import Button from '../Button/Button';
import HeroImage from '../../assets/home/mobile/image-hero-phone.png';


const Intro = () => {
    return (
        <div className="h-[843px] bg-[#E7816B] font-jost text-white leading-9 pl-6 pr-6 pt-20">
            <h2 className="text-[32px] font-medium">
                Award-winning custom designs and digital branding solutions
            </h2>
            <p className="text-[15px] pt-[25px] pb-[23px] leading-[25px]">
                With over 10 years in the industry, we are experienced in creating fully
                responsive websites, app design, and engaging brand experiences.
                Find out more about our services.
            </p>
            <div>
                <Button text='Learn More' />
            </div>
            <div className="flex w-full h-[451px] justify-center pt-[78px] overflow-hidden">
                <img src={HeroImage} alt="phone" className=" object-cover w-[279px] h-[573px] overflow-hidden z-[1]" />
            </div>
        </div>
    )
}

export default Intro;