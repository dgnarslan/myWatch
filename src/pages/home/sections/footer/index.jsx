export default function Footer({history}){
    return (
        <footer
            className='w-full h-20 bg-[#333] dark:bg-[#111] flex items-center justify-center text-4xl text-center text-white'
        >
            <p>{history}</p>
        </footer>
    )
}