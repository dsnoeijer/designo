import { Outlet } from 'react-router-dom';
import Burger from '../../../assets/shared/mobile/icon-hamburger.svg';


const NavBar = () => {
    return (
        <div>
            <div className="h-24 flex ml-auto mr-auto items-center w-[327px] md:h-[155px] md:justify-between md:w-[689px] lg:w-[1111px]">
                <div className="h-6 w-6 bg-conic-gradient rounded-full"></div>
                <div className="font-spartan font-bold text-[30px] tracking-[5px] pl-[21px] md:text-[30px]">
                    DESIGNO
                </div>
                <div className='sm:hidden md:flex w-[370px] ml-auto justify-between text-[14px] tracking-[2px] leading-[14px]'>
                    <div>OUR COMPANY</div>
                    <div>LOCATIONS</div>
                    <div>CONTACT</div>
                </div>
                <div className="burger w-6 h-6 ml-auto md:hidden">
                    <img src={Burger} alt="Menu" />
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default NavBar;