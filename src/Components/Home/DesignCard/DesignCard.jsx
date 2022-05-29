const DesignCard = ({ name, sub, bg, className, textClass, ptClass }) => {

    const imageTab = require(`../../../assets/home/tablet/${bg}`);
    const imageDesk = require(`../../../assets/home/desktop/${bg}`);
    const imageMob = require(`../../../assets/home/mobile/${bg}`);



    return (

        <div className={`pt-[12px] md:pt-[24px] lg:w-[541px] ${className} `}>
            <div className={`${name} h-[250px] md:h-[200px] ${className} ${ptClass}`}>
                <div>
                    <picture>
                        <source media="(min-width: 1024px)" srcSet={`${imageDesk}`} />
                        <source media="(min-width: 768px)" srcSet={`${imageTab}`} />

                        <img src={`${imageMob}`} alt="logo" className={`rounded-[15px] h-[250px] md:h-[200px] ${className}`} />
                    </picture>
                    <div className={`bg-black opacity-50 h-[250px] w-[327px] relative top-[-250px] left-0 rounded-[15px] md:h-[200px] md:w-[689px] md:top-[-200px] lg:object-cover lg:w-[541px] ${className}`}>
                    </div>
                </div>
                <div className={`flex flex-col relative bottom-[410px] text-white z-10 font-jost font-medium md:bottom-[360px] lg:w-[541px] ${textClass}`}>
                    <h2 className="text-[28px] leading-9 tracking-[1.4px] mb-[12px] md:text-[40px] md:tracking-[2px] md:leading-[48px] md:pt-[13px] lg:mt-[-12px]">{name}</h2>
                    <h3 className="text-[15px] tracking-[5px] md:pt-3">{sub}</h3>
                </div>
            </div>
        </div>
    )
}

export default DesignCard;