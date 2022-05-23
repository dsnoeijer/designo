import bgImage from '../../assets/shared/desktop/bg-pattern-small-circle.svg';


const AttributeCard = ({ name, img, text }) => {
    return (
        <div className='pt-10 pb-[40px]'>
            <div className=" w-full flex flex-col justify-center">
                <div className="m-auto bg-[url('./assets/shared/desktop/bg-pattern-small-circle.svg')]">
                    <img src={img} alt={name} />
                </div>
            </div>

            <div className='font-jost pt-[15px]'>
                <h2 className='text-xl font-medium tracking-[5px] pt-8 pb-[30px]'>{name}</h2>
                <p className='text-base leading-[26px]'>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default AttributeCard;