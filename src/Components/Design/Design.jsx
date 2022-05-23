const Design = ({ name, sub, bg }) => {
    console.log(bg);
    return (
        <div className="pl-6 pr-6 pt-6">
            <div className='w-full h-[250px]'>
                <div className="bg-black rounded-[15px]">
                    <img src={bg} alt="bg" className="rounded-[15px] opacity-50 h-[250px]" />
                </div>
                <div className="flex flex-col relative bottom-[160px] text-white z-10 font-jost font-medium">
                    <h2 className="text-[28px]  leading-9 tracking-[1.4px] mb-[12px]">{name}</h2>
                    <h3 className="text-[15px] tracking-[5px]">{sub}</h3>
                </div>
            </div>
        </div>
    )
}

export default Design;