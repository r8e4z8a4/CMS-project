import { Link } from "react-router";
import menus from "../data/menus";
import Menus from "./Menus";
export default function Sidebar() {
  return (
    <aside className="border-l-2 border-zinc-200 shrink-0 w-68 h-screen p-6 sticky top-0 hidden side:block">
        <Link to="/" className="flex items-center gap-3 pb-7 border-b-2 border-zinc-200">
            <img className="size-8 rounded-full" src={`${import.meta.env.BASE_URL}${"/images/icon.jpg".replace(/^\/+/, "")}`} alt="i cant open this photo" />
            <span className="text-lg font-black text-zinc-900">Novix Web</span>
        </Link>
        <Menus menus={menus} />
    </aside>
  )
}
