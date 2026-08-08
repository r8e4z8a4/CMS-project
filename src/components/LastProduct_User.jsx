import clsx from "clsx";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router";
import TitleButtons1 from "./TitleButtons1";
import Button from "./Button";
export default function LastProduct_User({ title, data, type ,length}) {
return (
        <section className={clsx('flex flex-col justify-between col-span-12',type === "products" ? "product_user:col-span-7" : 'product_user:col-span-5')}>
            <div>
                <TitleButtons1 title={`آخرین ${title}`}></TitleButtons1>
                {data.map((item) => {
                    return (
                        <article key={item.id} className={clsx("flex duration-150 mt-3 hover:scale-101 border-2 border-zinc-200 p-3 rounded-md items-center gap-3", type === "products" ? "h-30 hover:bg-linear-to-t shadow hover:from-neutral-100/70" : "hover:bg-linear-to-b shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)] h-20 from-zinc-50/50")}>
                            <div className={clsx("overflow-hidden shrink-0", type === "products" ? "rounded-lg size-24" : "size-14 rounded-full")}>
                                <img loading="lazy" src={`${import.meta.env.BASE_URL}${item.img.replace(/^\/+/, "")}`} alt="i cant open this photo" className="size-full object-cover" />
                            </div>
                            <div className={clsx("flex justify-between flex-col", type === "products" ? "h-full" : null)}>
                                <div className={clsx("space-y-1", type === "users" ? "text-xs" : null)}>
                                    {type === "products" ? (
                                        <>
                                            <p>
                                                <strong>{item.title}</strong>
                                            </p>
                                            <p className="text-sm text-neutral-600 line-clamp-1 max-w-156">{item.description}</p>
                                        </>
                                    ) : (
                                        <>
                                            <p>
                                                کاربر
                                                <span className="inline-block text-green-500 px-1">
                                                    <strong>{item.fullName}</strong>
                                                </span>
                                                داخل وبسایت ثبت نام کرد
                                            </p>
                                            <p className="text-neutral-500/80">{item.email}</p>
                                        </>
                                    )}
                                </div>
                                {type === "products" ? (
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1">
                                            <span className="font-black"> {Number(item.price).toLocaleString("fa-IR")} </span>
                                            <span className="text-sm text-neutral-500">تومان</span>
                                        </div>
                                        <div>
                                            <Link to="/products" className="text-base text-neutral-400">
                                                <FaEllipsisV />
                                            </Link>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </article>
                    );
                })}
            </div>
            <div className="flex items-center justify-between border-t-2 border-zinc-200 mt-10 pt-5">
                <p className="text-neutral-500 text-sm">{length} رکورد یافت شد</p>
                <Button text={"نمایش کامل لیست"} to={`/${type}`}/>
            </div>
        </section>
    );
}