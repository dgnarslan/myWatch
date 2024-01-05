import {useEffect ,useState} from "react";
import ClockSection from "~/pages/home/sections/clockSection/index.jsx";
import Header from "~/pages/home/sections/header/index.jsx";
import Footer from "~/pages/home/sections/footer/index.jsx";
import useColorScheme from "~/hooks/use-color-scheme.js";
import {useTheme} from "~/stores/pageTheme/hooks.js";
import Appearance from "~/pages/home/components/appearance/index.jsx";

export default function Home(){

    const theme = useTheme()
    const { colorScheme } = useColorScheme()


    const [time, setTime] = useState({
            hours: '',
            minutes: '',
            seconds: '',
            date:'',
        });

        useEffect(() => {
            const interval = setInterval(() => {
                const now = new Date();
                const currentHours = now.getHours().toString().padStart(2, '0');
                const currentMinutes = now.getMinutes().toString().padStart(2, '0');
                const currentSeconds = now.getSeconds().toString().padStart(2, '0');
                const currentDate = now.toLocaleDateString()

                setTime({
                    hours: currentHours,
                    minutes: currentMinutes,
                    seconds: currentSeconds,
                    date: currentDate,
                });
            }, 1000)
            return () => clearInterval(interval);
        }, [])

        useEffect(() => {
        if (theme === 'default') {
            document.body.className = colorScheme
        } else {
            document.body.className = theme
        }
    }, [theme, colorScheme])

        return(

            <main
                className='w-full min-h-dvh flex flex-col items-center justify-between pt-20'
            >
                <Appearance/>
                <Header/>
                <section
                    className='lg:max-w-screen-2xl w-full flex flex-col gap-y-10 text-start text-4xl dark:text-[#ffffffe3] font-bold lg:px-20 md:px-10 px-2.5 min-h-96'
                >
                    <p>
                        Saat :
                    </p>
                    <section
                        className='w-full lg:gap-10 md:gap-10 gap-5 grid grid-cols-3 place-items-center text-white dark:text-[#ffffffe3]'
                    >
                        <ClockSection time={time.hours}/>
                        <ClockSection time={time.minutes}/>
                        <ClockSection time={time.seconds}/>
                    </section>
                </section>
                <Footer history={time.date}/>
            </main>

        )
}
