import Social from '../Social/Social';
import Logo from '../../assets/shared/desktop/logo-light.png';


const Footer = () => {
    return (
        <div className="flex flex-col items-center text-white h-[626px] w-full left-0 pt-16 divide-y divide-neutral-700">
            <div className='w-full flex justify-center'>
                <div className='pb-8'>
                    <img src={Logo} alt="Designo" className='w-[202px] h-[27px]' />
                </div>
            </div>
            <div className='w-full'>
                <div className='pt-8 w-full font-jost text-[14px] leading-[14px] tracking-[2px]'>
                    <div>
                        OUR COMPANY
                    </div>
                    <div className='pt-8'>
                        LOCATIONS
                    </div>
                    <div className='pt-8'>
                        CONTACT
                    </div>
                </div>
                <div className='font-jost pt-[41px] text-base font-light tracking-normal opacity-50 leading-[26px]'>
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
                <div className='font-jost pt-[40px] text-base font-light tracking-normal opacity-50 leading-[26px]'>
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
                <div>
                    <Social />
                </div>
            </div>
        </div >
    )
}

export default Footer;