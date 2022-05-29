const DesignHeader = ({ title, text }) => {
    return (
        <div className="design-header-container  font-jost w-[375px] h-[320px] bg-[#E7816B] text-center text-white justify-center">
            <h1 className="text-[32px] font-medium pt-[99px] mb-[21px]">{title}</h1>
            <p className="text-[15px] w-[327px] ml-auto mr-auto font-normal">{text}</p>
        </div>
    )
}

export default DesignHeader;