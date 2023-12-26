export default function Footer({title}){
    return (
        <footer className='w-full h-20 bg-[#333] flex items-center justify-center text-4xl text-center text-white dark:text-[#ffffffa6] '>
            <p>{title}</p>
        </footer>
    )
}