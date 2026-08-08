import { useState } from "react"
import { CiGrid41 ,CiViewTable} from "react-icons/ci"

export default function TitleButtons1({title,button1=false,button2=false,handler,changeLayoutHandler='',state=''}) {
  const [GridLayoutIcon,setGridLayoutIcon]=useState(false)
  const changeLayout=()=>{
    changeLayoutHandler()
    setGridLayoutIcon(!GridLayoutIcon)
  }
  return (
    <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold font-IRANSansX">{title}</h3>
        <div className="flex gap-4 items-center">
          {button1&&<button onClick={changeLayout} className="text-2xl size-10 flex-center bg-[#ECEFF3] text-[#818898] *:stroke-1 rounded-md hover:bg-[#e1e4e7] active:scale-90 active:bg-[#ECEFF3] duration-150 transition-all border-zinc-200 border-2 cursor-pointer shadow">{GridLayoutIcon?<CiViewTable/>:<CiGrid41/>}</button>}
          {button2&&<button className="primary-bg px-4 py-2 text-sm focus:ring-0" onClick={handler}>{state?'درحال انتقال':button2}</button>}
        </div>
    </div>
  )
}
