export default function ClockSection({time, title}){
    return (
        <div
            className='bg-[#333] dark:bg-[#383838] w-full max-w-prose h-32 flex items-center justify-center rounded-xl relative last:before:hidden before:content-[":"] before:h-full before:text-[#333] before:text-7xl before:absolute before:-right-10 before:font-bold before:w-10 before:grid before:place-items-center'
        >

            {time}
        </div>
    )

}