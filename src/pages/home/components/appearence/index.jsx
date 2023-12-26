import {Menu} from "@headlessui/react";
import {apperance, getApperanceIcon, getApperanceName} from "~/utils/consts/appearence.jsx";
import {setTheme} from "~/stores/pageTheme/actions.js";
import classNames from "classnames";
import {useTranslation} from "react-i18next";
import useColorScheme from "~/hooks/use-color-scheme.js";
import {useTheme} from "~/stores/pageTheme/hooks.js";

export default function Appearence(){
    const { t } = useTranslation()
    const theme = useTheme()
    const { colorScheme } = useColorScheme()

    return (
        <div className="absolute top-2 left-2">
            <Menu as="nav" className="relative w-48">
                <Menu.Button
                    className="h-10 rounded border w-full text-[#333] border-[#333] bg-white dark:bg-[#383838] dark:text-[#ffffffa6] dark:border-[#ffffffa6] gap-x-2.5 font-medium text-primary flex items-center justify-center text-sm"
                >
                            <span className="text-black dark:text-white">
                                {getApperanceIcon(theme, colorScheme)}
                            </span>
                    {t(getApperanceName(theme))}
                </Menu.Button>
                <Menu.Items as="div"
                            className="absolute top-12 left-0 w-[234px] bg-white border border-[#333] rounded grid -translate-y-1 dark:bg-[#333] dark:text-[#ffffffa6] dark:border-[#ffffffa6] overflow-hidden">
                    {apperance.map(({key, value}, index) => (
                        <Menu.Item key={index}>
                            {({active}) => (
                                <button
                                    onClick={() => {
                                        setTheme(key)
                                    }}
                                    className={classNames("h-9 px-3 flex items-center text-[#333] dark:text-[#ffffffa6] gap-x-2.5 text-sm font-medium", {
                                        "bg-[#333] dark:bg-[#404040] !text-white": active,
                                        "bg-blue-100 dark:bg-[#454545] !text-blue-800 dark:!text-[#ffffffa6]": key === theme
                                    })}
                                >
                  <span className={classNames({
                      "!text-white": active,
                      "text-black dark:text-white": !active,
                      "!text-blue-800 dark:!text-[#ffffffa6]": key === theme
                  })}>
                    {getApperanceIcon(key)}
                  </span>
                                    {t(value)}
                                </button>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Menu>
        </div>
    )
}