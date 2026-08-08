import clsx from "clsx";
import DetailsDataTable from "./DetailsDataTable";
export default function DataTable({ data ,handlers}) {
    return data.key == "id" ? data.value.length > 10 ? data.value.slice(0, 10) + "..." : 
    data.value : data.key == "isPublished" ? <span className={clsx("badge ml-auto", data.value ? "success-badge" : "danger-badge")}>{data.value&&data.page==='comments' ? "منتشر شده" : !data.value&&data.page==='comments'?'منتشر نشده':data.value?'عمومی':"خصوصی"}</span> : 
    data.key == "price" ||data.key=='entity' ? Number(data.value).toLocaleString("fa-IR") : 
    data.key == "" ||data.key==='comment'? <DetailsDataTable handlers={handlers} page={data.page} item={data.item}/> : data.key=='img'?<img loading="lazy" className="block rounded-lg size-13 object-cover ml-auto" src={`${import.meta.env.BASE_URL}${data.value.replace(/^\/+/, "")}`} alt="i cant open this photo" />:data.key==='role'?<span className={clsx("badge ml-auto", data.value==='مدیر' ? "admin-badge" : data.value==='پشتیبانی'?'support-badge':'user-badge')}>{data.value}</span>:data.key==='status'?<span className={clsx('badge ml-auto',data.value==='در انتظار پاسخگویی'?'danger-badge':'success-badge')}>{data.value}</span>:data.value
}
