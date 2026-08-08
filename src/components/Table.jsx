import clsx from "clsx";
import { useState } from "react";
import DataTable from "./DataTable";
import TableHeadButton from "./TableHeadButton";
import Pagination from "./Pagination";
export default function Table({ dataTableHeadRow, data, limit, page,numberRow ,handlers}) {
    const [PaginationNumber,setPaginationNumber]=useState({firstItem:0,lastItem:numberRow})
    const paginationpage=(firstItemValue,lastItemValue)=>{
        setPaginationNumber({firstItem:firstItemValue,lastItem:lastItemValue})            
    }
    let bgGray = true;
    return (
        <section className="border-2 bg-white border-zinc-200 rounded-xl overflow-hidden pb-3">
            <div className="flex items-center justify-between px-5 h-16">
                <h5 className="text-xl font-bold">{page === "home" || page==='products'? "لیست محصولات" : page==='users'?`مدیریت کاربران (${data.length} کاربر)`:page=='tickets'?`تیکت ها (${data.length} تیکت)`:page=='comments'?`لیست کامنت ها (${data.length} کامنت)`:null}</h5>
                <TableHeadButton page={page} />
            </div>
            <table className="w-full">
                <thead className={clsx("text-sm h-10 text-[#666D80] font-semibold", bgGray ? "bg-[#ededed]" : "bg-white")}>
                    {(bgGray = !bgGray)}
                    <tr>
                        {dataTableHeadRow.map((item) => {
                            return (
                                <th className="text-start px-3" key={crypto.randomUUID()}>
                                    {item}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.slice(PaginationNumber.firstItem,PaginationNumber.lastItem).map((item) => {
                        return (
                            <tr dir="ltr" className={clsx("text-end h-14 text-sm", bgGray ? "bg-[#ededed]" : "bg-white")} key={item.id}>
                                {limit.map((el) => {
                                    return (
                                        <td className="px-3" key={crypto.randomUUID()}>
                                            <DataTable handlers={handlers} data={{ value: item[el], key: el, page, item }} />
                                        </td>
                                    );
                                })}
                                {(bgGray = !bgGray)}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <hr className="my-3 text-zinc-200 border-t-2" />
            <Pagination numberRow={numberRow} dataLength={data.length} data={PaginationNumber} handler={paginationpage}></Pagination>
        </section>
    );
}
