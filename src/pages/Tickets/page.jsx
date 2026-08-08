
import Table from "../../components/Table";
import TitleButtons1 from "../../components/TitleButtons1";
import { ticketTableHeadRow } from "../../data/DataTableHeadRow";
import GridLayout from "../../components/GridLayout";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import clsx from "clsx";
export default function page() {
    const [ActiveLayout,setActiveLay]=useState(true)
    const [isMobile,setisMobile]=useState(false)
    // const {AllTickets}=useOutletContext()
    const {AllDataProject}=useOutletContext()
    useEffect(()=>{
            const widthScreen=()=>{
                setisMobile(window.innerWidth<=1080)
            }
            widthScreen()
            window.addEventListener('resize',widthScreen)
            return ()=>{
                window.removeEventListener('resize',widthScreen)
            }
    },[])
    return (
        <div className="space-y-10 pb-5">
            <TitleButtons1 changeLayoutHandler={()=>setActiveLay(!ActiveLayout)} button1={!isMobile} title={"مدیریت تیکت ها"} />
            <div className={clsx(isMobile||!ActiveLayout?'':'hidden')}><GridLayout numberRow={12} page={'tickets'} data={AllDataProject.AllTickets}/></div>
            <div className={clsx(!isMobile&&ActiveLayout?'':'hidden')}><Table numberRow={10} dataTableHeadRow={ticketTableHeadRow} data={AllDataProject.AllTickets} limit={["id", "sender", "title", "status",'createDate','']} page={"tickets"} /></div>
        </div>
    );
}
