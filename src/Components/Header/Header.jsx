import Burger from '../../assets/shared/mobile/icon-hamburger.svg';


const Header = () => {
    return (
        <div className="h-24 flex items-center pl-6 pr-6">
            <div className="h-6 w-6 bg-conic-gradient rounded-full"></div>
            <div className="font-spartan font-bold text-2xl tracking-[5px] pl-[21px]">
                DESIGNO
            </div>
            <div className="burger w-5 h-5 ml-auto">
                <img src={Burger} alt="Menu" />
            </div>
        </div>
    )
}

export default Header;