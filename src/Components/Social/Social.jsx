import FacebookLogo from '../../assets/shared/desktop/icon-facebook.svg';
import YoutubeLogo from '../../assets/shared/desktop/icon-youtube.svg';
import TwitterLogo from '../../assets/shared/desktop/icon-twitter.svg';
import PinterestLogo from '../../assets/shared/desktop/icon-pinterest.svg';
import InstagramLogo from '../../assets/shared/desktop/icon-instagram.svg';


const Social = () => {
    return (
        <div className='pl-6 pr-6 pt-10 w-full flex justify-center'>
            <div className="w-[184px] socials flex  justify-between">
                <img src={FacebookLogo} alt="Facebook" className='w-6' />
                <img src={YoutubeLogo} alt="Youtube" />
                <img src={TwitterLogo} alt="Twitter" />
                <img src={PinterestLogo} alt="Pinterest" />
                <img src={InstagramLogo} alt="Instagram" />
            </div>
        </div>
    )
}

export default Social;