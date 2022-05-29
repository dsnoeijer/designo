import Button from "../Common/Button/Button";


const CallToAction = () => {
    return (
        <div className="h-[379px] w-[327px] md:text-center bg-[#E7816B] rounded-[15px] text-jost text-center text-white ml-auto mr-auto md:h-[350px] md:w-[690px] lg:text-left lg:pl-[95px] lg:pr-[95px] lg:w-[1111px] lg:h-[292px] lg:flex lg:items-center lg:justify-between">
            <div className=" font-medium text-[32px] leading-[36px] pl-6 pr-6 pt-16 lg:w-[459px] lg:pl-0 lg:pr-0 lg:pt-[6px]">
                <h2 className="md:w-[335px]  md:ml-auto md:mr-auto md:text-[40px] md:leading-[42px] md:mt-[-9px] lg:w-[288px] lg:ml-0 lg:mr-0 lg:leading-[40px]">Let's talk about your project</h2>
                <p className="text-[14px] font-normal leading-[25px] pt-4 md:w-[413px] md:ml-auto md:mr-auto lg:ml-0 lg:mr-0 lg:pt-[19px]">
                    Ready to take it to the next level?
                    Contact us today and find out how our expertise can help your business grow.
                </p>
            </div>
            <div>
                <div className="pt-8 md:pt-8 lg:pt-0">
                    <Button text='GET IN TOUCH' />
                </div>
            </div>

        </div >
    )
}

export default CallToAction;