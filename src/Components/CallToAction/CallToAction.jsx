import Button from "../Button/Button";


const CallToAction = () => {
    return (
        <div className="h-[379px] w-[327px] bg-[#E7816B] rounded-[15px] text-jost text-center text-white ml-auto mr-auto md:h-[350px] md:w-[690px]">
            <div className=" font-medium text-[32px] leading-[36px] pl-6 pr-6 pt-16 ">
                <h2 className="md:w-[335px] md:text-center md:ml-auto md:mr-auto md:text-[40px] md:leading-[42px] md:mt-[-9px]">Let's talk about your project</h2>
                <p className="text-[14px] font-normal leading-[25px] pt-4 md:w-[413px] md:ml-auto md:mr-auto">
                    Ready to take it to the next level?
                    Contact us today and find out how our expertise can help your business grow.
                </p>
                <div className="pt-8 md:pt-8">
                    <Button text='GET IN TOUCH' />
                </div>
            </div>

        </div>
    )
}

export default CallToAction;