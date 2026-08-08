import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import CustomTooltip from "./CustomTooltip";
export default function Chart({data}) {
    return (
        <div className="bg-white p-5 space-y-5 border-2 rounded-xl border-zinc-200 my-20">
            <h4 className="text-lg font-extrabold">آمار کلی داشبورد</h4>
            <BarChart className="w-full h-130" responsive data={data}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0}/>
                <YAxis width={'auto'}/>
                <Tooltip cursor={false} content={CustomTooltip}/>
                <Bar dataKey="value" fill="#8884d8" activeBar={{ fill: "yellow", stroke: "red" }} radius={[10, 10, 0, 0]} />
            </BarChart>
        </div>
    );
}
