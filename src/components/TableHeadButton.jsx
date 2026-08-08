import { MdOpenInNew } from "react-icons/md";
import { HiSearch, HiFilter } from "react-icons/hi";
import { Link } from "react-router";
import { useState } from "react";
export default function TableHeadButton({ page }) {
    if (page == "home") {
        return (
            <Link className="text-blue-500 hover:text-blue-400 transition underline flex items-center gap-1" to={"/products"}>
                <span>صفحه محصولات</span>
                <MdOpenInNew />
            </Link>
        );
    } else if (page == "user") {
        return <button className="primary-bg px-4 py-2 text-sm focus:ring-0">ایجاد کاربر جدید</button>;
    } else {
        const [value_,setValue]=useState('')
    return (
        <div className="flex text-gray-500 *:h-10 *:bg-linear-to-t *:from-zinc-50 *:cursor-pointer *:select-none *:hover:to-zinc-50 *:hover:from-transparent *:hover:shadow-sm *:focus-within:ring-4 *:duration-150 *:focus-within:ring-gray-500/20 *:border-2 *:border-zinc-200 *:rounded-md *:px-3 items-center gap-3">
            <button className="flex-center gap-1">
                <HiFilter className="text-lg" />
                <span className="text-sm">فیلتر</span>
            </button>
            <div className="flex items-center gap-1">
                <HiSearch />
                <input value={value_} onChange={(e)=>setValue(e.target.value)} type="text" placeholder="جستجو کنید" className="size-full outline-none text-sm" />
            </div>
        </div>
    );
    }
}
