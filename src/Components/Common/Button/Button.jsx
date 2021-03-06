const Button = ({ text }) => {
    return (
        <button className="bg-white text-[#333136] text-[15px] font-medium w-[152px] h-[56px] rounded-lg tracking-[1px] lg:hover:bg-[#FFAD9B]">
            {text}
        </button>
    )
}

export default Button;