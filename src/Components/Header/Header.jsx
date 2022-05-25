import Burger from '../../assets/shared/mobile/icon-hamburger.svg';


const Header = () => {
    return (
        <div className="h-24 flex items-center pl-6 pr-6 md:h-[155px] md:pl-10 md:pr-10">
            <div className="h-6 w-6 bg-conic-gradient rounded-full"></div>
            <div className="font-spartan font-bold text-2xl tracking-[5px] pl-[21px] md:text-[30px]">
                DESIGNO
            </div>
            <div className='sm:hidden md:flex w-[370px] ml-auto justify-between text-[14px] tracking-[2px] leading-[14px]'>
                <div>OUR COMPANY</div>
                <div>LOCATIONS</div>
                <div>CONTACT</div>
            </div>
            <div className="burger w-5 h-5 ml-auto md:hidden">
                <img src={Burger} alt="Menu" />
            </div>
        </div >
    )
}

export default Header;