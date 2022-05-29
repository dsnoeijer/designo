import Social from '../Social/Social';
import Logo from '../../../assets/shared/desktop/logo-light.png';


const Footer = () => {
    return (
        <div className="flex flex-col items-center text-white h-[626px] w-full left-0 pt-16 ml-auto mr-auto md:w-[689px] md:pt-[80px] md:divide-y md:divide-neutral-700 md:h-[337px]">
            <div className='w-full flex flex-col justify-center items-center divide-y divide-neutral-700 md:flex-row md:justify-between md:divide-none md:items-center md:pb-[40px] lg:mt-[-8px]'>
                <div className='pb-8 md:pb-0'>
                    <img src={Logo} alt="Designo" className='w-[202px] h-[27px]' />
                </div>
                <div className='pt-8 w-full font-jost text-[14px] leading-[14px] tracking-[2px] md:flex md:items-center md:pt-0 md:justify-between md:w-[370px]'>
                    <div>
                        OUR COMPANY
                    </div>
                    <div className='pt-8 md:pt-0'>
                        LOCATIONS
                    </div>
                    <div className='pt-8 md:pt-0'>
                        CONTACT
                    </div>
                </div>
            </div>
            <div className='md:flex md:justify-between md:w-[690px] md:mt-[] md:text-left'>
                <div className='font-jost pt-[41px] text-base font-light tracking-normal opacity-50 leading-[26px] md:w-[223px] md:mt-[-9px]'>
                    <p className='font-bold text-base leading-[26px] tracking-normal'>
                        Designo Central Office
                    </p>
                    <p>
                        3886 Wellington Street
                    </p>
                    <p>
                        Toronto, Ontario M9C 3J5
                    </p>
                </div>
                <div className='font-jost pt-[40px] text-base font-light tracking-normal opacity-50 leading-[26px] md:w-[223px] md:mt-[-9px]'>
                    <p className='font-bold text-base leading-[26px] tracking-normal'>
                        Contact Us (Central Office)
                    </p>
                    <p>
                        P : +1 253-863-8967
                    </p>
                    <p>
                        M : contact@designo.co
                    </p>
                </div>
                <div className='md:mt-[45px]'>
                    <Social />
                </div>
            </div>
        </div>
    )
}

export default Footer;