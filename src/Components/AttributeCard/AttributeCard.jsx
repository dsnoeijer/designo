import bgImage from '../../assets/shared/desktop/bg-pattern-small-circle.svg';


const AttributeCard = ({ name, img, text }) => {
    return (
        <div className='pt-10 pb-[40px] md:flex '>
            <div className=" w-full flex flex-col justify-center">
                <div className="m-auto bg-[url('./assets/shared/desktop/bg-pattern-small-circle.svg')]">
                    <img src={img} alt={name} />
                </div>
            </div>

            <div className='font-jost pt-[15px] md:text-left md:pl-8'>
                <h2 className='text-xl font-medium tracking-[5px] pt-8 pb-[30px] md:pt-[28px]'>{name}</h2>
                <p className='text-base leading-[26px] md:mt-[-15px] md:text-[15px]'>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default AttributeCard;