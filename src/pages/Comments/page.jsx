import Table from "../../components/Table";
import TitleButtons1 from "../../components/TitleButtons1";
import { commentTableHeadRow } from "../../data/DataTableHeadRow";
import GridLayout from "../../components/GridLayout";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import clsx from "clsx";
export default function page() {
    const [ActiveLayout,setActiveLay]=useState(true)
    const [isMobile,setisMobile]=useState(false)
    const {AllDataProject}=useOutletContext()
    useEffect(()=>{
        const widthScreen=()=>{
            setisMobile(window.innerWidth<=768)
        }
        widthScreen()
        window.addEventListener('resize',widthScreen)
        return ()=>{
            window.removeEventListener('resize',widthScreen)
        }
    },[])
    return (
        <div className="space-y-10 pb-5">
            <TitleButtons1 changeLayoutHandler={()=>setActiveLay(!ActiveLayout)} button1={!isMobile} title={"کامنت های وبسایت"} />
            <div className={clsx(isMobile||!ActiveLayout?'':'hidden')}><GridLayout numberRow={12} page={'comments'} data={AllDataProject.AllComments}/></div>
            <div className={clsx(!isMobile&&ActiveLayout?'':'hidden')}><Table numberRow={10} dataTableHeadRow={commentTableHeadRow} data={AllDataProject.AllComments} limit={["id", "fullName", "product", "isPublished",'comment']} page={"comments"} /></div>
        </div>
    );
}
