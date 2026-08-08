import { Link, NavLink } from "react-router";
export default function Menus({ menus }) {
    return (
        <>
            {menus.map((menu) => (
                <div key={menu.id}>
                    <h3 className="mt-6 text-xs text-gray-500 font-semibold">{menu.title}:</h3>
                    <div className="mt-2 *:w-full *:flex *:items-center *:gap-2 *:h-10 *:duration-150 *:hover:bg-gray-200 space-y-1 *:px-3 *:rounded-md text-gray-700">
                        {menu.items.map((item) => (
                            <NavLink  key={item.id} to={item.href} className={(i) => (i.isActive ? "relative before:absolute before:w-1 before:h-full before:rounded-l-full before:-right-6 before:bg-[#00bf8f] *:[svg]:text-teal-600 before:border-none bg-zinc-100" : null)} end>
                                <item.icon />
                                <p>{item.title}</p>
                            </NavLink>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}
