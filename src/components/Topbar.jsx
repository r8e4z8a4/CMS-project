import clsx from "clsx";
import { useState } from "react";
import { BiBell } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { MdKeyboardCommandKey } from "react-icons/md";
import Menus from "./Menus";
import menus from "../data/menus";
export default function Topbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="h-20 border-b-2 border-zinc-200 flex items-center justify-between *:items-center *:gap-3 px-6">
            <div className="h-10 px-4 hidden side:flex rounded-lg border-zinc-200 w-full max-w-[288px] duration-150 focus-within:ring-4 focus-within:ring-rose-500/10 focus-within:border-rose-500/20 text-sm border-2">
                <input className="size-full outline-none placeholder:text-xs" type="text" placeholder="جستجو کنید ..." />
                <div className="flex gap-1 *:size-5 text-sm *:rounded-sm select-none *:bg-[#ECEFF3] *:flex-center text-[#818898]">
                    <div>
                        <MdKeyboardCommandKey />
                    </div>
                    <div>k</div>
                </div>
            </div>
            <button className={clsx('size-10 side:hidden *:size-7 rounded-lg flex-center transition-all duration-200 z-10 active:scale-[1.2]',isOpen?'bg-white *:text-gray-600':'bg-[#019d79]! *:text-white')}>
                {isOpen?<IoClose onClick={()=>setIsOpen(false)}/>:<HiMenu onClick={()=>setIsOpen(true)}/>}
            </button>
            <div className={clsx("fixed size-full! top-0 left-0 z-5 bg-black/30 duration-300 px-5", isOpen? "" : "invisible opacity-0")}>
                <aside className={clsx('w-45 rounded-r-xl bg-white drop-shadow-2xl/30 h-screen fixed top-0 left-0 border-r-2 border-zinc-200 p-6 transition-all duration-300',isOpen?'translate-x-0':'-translate-x-full')}>
                        <Menus menus={menus}/>
                </aside>
            </div>
            <div className="mr-auto flex">
                <button className="border-zinc-200 border-2 flex-center size-10 rounded-full hover:primary-bg">
                    <BiBell />
                </button>
                <div className="w-px h-6 border-l-2 border-zinc-200"></div>
                <div className="flex items-center gap-2 cursor-pointer select-none p-3 hover:bg-black/10 rounded-md duration-150">
                    <img className="size-10 rounded-full object-cover hidden min-[380px]:block" src="/images/profile-avatar.jpg" alt="i cant open this photo" />
                    <div>
                        <p className="text-sm font-bold">رضا هوشمند</p>
                        <p className="text-xs text-gray-600">مدیر عامل</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
