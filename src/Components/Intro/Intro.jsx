import Button from '../Button/Button';
import HeroImage from '../../assets/home/mobile/image-hero-phone.png';


const Intro = () => {
    return (
        <div className="h-[843px] bg-[#E7816B] font-jost mr-auto ml-auto text-white leading-9 pt-20 md:rounded-[15px] lg:flex lg:pl-[95px] lg:pr-[95px] lg:pt-[163px] lg:h-[640px]">
            <div className='lg:mr-auto lg:ml-auto'>
                <h2 className="text-[32px] font-medium pl-6 pr-6 md:text-[48px] md:leading-[48px] md:w-[573px] md:ml-auto md:mr-auto md:mt-[-19px] lg:w-[540px] lg:text-left lg:pl-0 lg:pr-0">
                    Award-winning custom designs and digital branding solutions
                </h2>
                <p className="text-[15px] pt-[25px] pb-[23px] leading-[25px] pl-6 pr-6 md:text-[16px] md:leading-[26px] md:pt-[29px] md:w-[445px] md:ml-auto md:mr-auto md:pl-0 md:pr-0 lg:text-left lg:w-[430px] lg:pl-0 lg:pr-0 lg:pt-[33px] lg:mr-0 lg:ml-0 lg:font-light lg:text-[16px]">
                    With over 10 years in the industry, we are experienced in creating fully
                    responsive websites, apps, and engaging brand experiences.
                    Find out more about our services.
                </p>
                <div className='md:mt-[-2px] lg:pt-[18px] lg:text-left'>
                    <Button text='LEARN MORE' />
                </div>
            </div>
            <div className="pl-0 pr-0 flex w-full h-[451px] justify-center pt-[78px] overflow-hidden md:h-[466px] md:mt-[-9px] lg:h-[486px] lg:pt-0">
                <img src={HeroImage} alt="phone" className="object-cover h-[573px] overflow-hidden z-[1] drop-shadow-[20px_-40px_15px_rgba(93,2,2,0.4)]" />
            </div>
        </div>
    )
}

export default Intro;