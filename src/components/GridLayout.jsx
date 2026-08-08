import clsx from "clsx";
import { useState} from "react";
import { BiShoppingBag } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import DetailsDataTable from "./DetailsDataTable";
import Pagination from "./Pagination";
export default function GridLayout({ data ,numberRow,handlers,page}) {
  const [PaginationNumber,setPaginationNumber] = useState({ firstItem: 0, lastItem: numberRow });
  const paginationpage=(firstItemValue,lastItemValue)=>{
    setPaginationNumber({firstItem:firstItemValue,lastItem:lastItemValue})            
    }
    return (
        <>
          <section className={clsx('grid grid-cols-1 min-[860px]:grid-cols-3 min-[970px]:grid-cols-2 xl:grid-cols-3 gap-5 max-[600px]:px-[10%] max-[360px]:px-0',page=='products'||page=='users'?'min-[1440px]:grid-cols-4!':null,page!=='comments'?'min-[600px]:grid-cols-2':'min-[640px]:grid-cols-2')}>
            {data.slice(PaginationNumber.firstItem, PaginationNumber.lastItem).map((dataItem) => {
                return (
                    <article className={clsx('duration-150 p-5  space-y-3 border-2 border-zinc-200 bg-white rounded-lg',dataItem.isPublished||dataItem.status==='پاسخ داده شده'?'hover:border-green-600/50':'hover:border-red-600/50')} key={dataItem.id}>
                        {(page==='users'||page==='products')&&<img className="h-55 flex-center overflow-hidden size-full object-cover duration-300 hover:scale-105  transition-all rounded-lg" src={dataItem.img} alt="i cant open this photo" />}
                        {page==='users'?
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-bold min-[600px]:text-nowrap">نام : {dataItem.fullName}</p>
                                <div className={clsx("badge", dataItem.role==='مدیر' ? "admin-badge" : dataItem.role==='پشتیبانی'?'support-badge':'user-badge')}>{dataItem.role}</div>
                            </div>
                        </div>
                        :page=='products'?<div className="space-y-2">
                            <h3 className="font-bold! min-[600px]:text-nowrap">{dataItem.title}</h3>
                            <p className="text-[13px] text-neutral-500 line-clamp-2 h-9.75">{dataItem.description}</p>
                            <div className="flex items-center justify-between gap-1">
                                <div className={clsx("badge", dataItem.isPublished ? "success-badge" : "danger-badge")}>
                                    {dataItem.isPublished ? (
                                        <>
                                            <BsEye />
                                            منتشر شده
                                        </>
                                    ) : (
                                        <>
                                            <BsEyeSlash />
                                            مخفی شده
                                        </>
                                    )}
                                </div>
                                <div className="text-xs text-zinc-600 flex gap-1 items-center">
                                    <BiShoppingBag className="size-4" />
                                    <span className="min-[600px]:text-nowrap">تعداد موجودی:</span>
                                    <span>{Number(dataItem.entity).toLocaleString('fa-IR')}</span>
                                </div>
                            </div>
                        </div>
                        :<div className="flex justify-between items-center gap-2">
                            <p className="text-sm font-bold">نام : {page=='comments'?dataItem.fullName:dataItem.sender}</p>
                            <span className={clsx('badge min-[600px]:text-nowrap',dataItem.status=='پاسخ داده شده' ||dataItem.isPublished?'success-badge':'danger-badge')}>{page==='comments'&&dataItem.isPublished?'منتشر شده':page==='comments'&&!dataItem.isPublished?'منتشر نشده':dataItem.status}</span>
                        </div>
                        }
                        <div className="flex items-center justify-between gap-2.5">
                            {page==='users'&&<p className="text-sm min-[600px]:text-nowrap">شماره : {dataItem.phoneNumber}</p>}
                           {page!=='users'&&page!=='tickets'&&page!=='comments'&&
                           <div className="flex items-center gap-1">
                                <span className="text-lg font-black"> {Number(dataItem.price).toLocaleString('fa-IR')} </span>
                                <span className="text-zinc-500 text-xs">تومان</span>
                            </div>}
                            {(page=='tickets'||page=='comments')&&<p className="text-sm">عنوان : {page=='comments'?dataItem.product:dataItem.title}</p>}
                            <DetailsDataTable handlers={handlers} page={page} item={dataItem}/>
                        </div>
                    </article>
                );
            })}
          </section>
          <Pagination numberRow={numberRow} dataLength={data.length} data={PaginationNumber} handler={paginationpage}/>
        </>
    );
}
