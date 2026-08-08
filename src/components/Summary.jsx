export default function Summary({ data }) {
    return (
        <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(200px,auto))] mt-6">
            {data.map((item) => {
                return (
                    <article className="h-34.25 bg-white rounded-lg hover:bg-linear-to-t from-zinc-200/15 select-none cursor-pointer hover:shadow-md border-2 flex justify-between flex-col border-zinc-200 shadow-sm py-[23.5px] px-4" key={item.id}>
                        <div className="flex items-center justify-between">
                            <p>{item.title}</p>
                            <div className="size-9 rounded-md border-2 text-green-600 border-zinc-200 flex-center text-xl"><item.Icon /></div>
                        </div>
                        <p className="text-4xl">
                            <strong>{item.value}</strong>
                            <span className="text-base text-zinc-600"> عدد</span>
                        </p>
                    </article>
                );
            })}
        </div>
    );
}
