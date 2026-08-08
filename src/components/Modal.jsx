import { clsx } from "clsx";
import { useState } from "react";
import { BiX } from "react-icons/bi";
export default function Modal({ children, content, title ,handler,exception=false,open=false,setopen=false}) {
    const [isOpen, setIsOpen] = useState(false);
    const Handler = (e) => {
        e.preventDefault()
        handler()
        exception?setopen(false):setIsOpen(false);
    };
    return (
        <>
            {exception||<button type="button" className="cursor-pointer" onClick={() => setIsOpen(true)}>
                {children}
            </button>}
            <div dir="rtl" className={clsx("fixed size-full! top-0 left-0 z-10 bg-black/30 flex-center duration-300 px-5", open || isOpen? "" : "invisible opacity-0")}>
                <div className="w-125 rounded-lg overflow-hidden bg-white drop-shadow-2xl/30 max-h-[90dvh]">
                    <div className="flex items-center justify-between px-4 h-16">
                        <span className="text-[17px] text-zinc-800 font-bold">{title}</span>
                        <button type="button" onClick={() => exception?setopen(false):setIsOpen(false)} className="text-2xl! text-zinc-500 cursor-pointer">
                            <BiX />
                        </button>
                    </div>
                   <form onSubmit={Handler}>
                        <div className="p-4 py-5 border-y-2 border-zinc-200 text-start">
                            {content}
                        </div>
                        <div className="min-h-14 flex items-center justify-end gap-2 px-4 bg-[#F6F8FA]">
                            <div className="text-sm text-[#666D80] select-none flex items-center gap-2">
                                {title==='نمایش کامل کامنت'?<button type="button" onClick={() => exception?setopen(false):setIsOpen(false)} className="flex items-center gap-1 cursor-pointer bg-white px-4 py-2 rounded-lg border-2 border-zinc-300"><span>بستن</span></button> : <>
                                <button type="button" onClick={() => exception?setopen(false):setIsOpen(false)} className="flex items-center gap-1 cursor-pointer bg-white px-4 py-2 rounded-lg border-2 border-zinc-200">
                                    <span>انصراف</span>
                                </button>
                                <button type="submit" className="flex items-center gap-1 primary-bg px-4 py-2 rounded-lg border-zinc-200">
                                    <span>تایید</span>
                                </button>
                                </>}
                            </div>
                        </div>
                   </form>
                </div>
            </div>
        </>
    );
}
