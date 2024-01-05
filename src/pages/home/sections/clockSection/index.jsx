export default function ClockSection({time}){
    return (
        <div
            className='bg-[#333] dark:bg-[#111] w-full lg:max-w-prose h-32 flex items-center justify-center rounded-xl relative last:before:hidden before:content-[":"] before:h-full before:text-[#333] dark:before:text-[#111] md:before:text-7xl before:text-6xl before:absolute md:before:-right-10 before:-right-[30px] before:font-bold before:w-10 before:grid before:place-items-center'
        >
            {time}
        </div>
    )
}