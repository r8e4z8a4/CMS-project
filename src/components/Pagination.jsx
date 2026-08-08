import clsx from "clsx";
export default function Pagination({ dataLength, handler, data ,numberRow}) {
    const pageNumber = [];
    for (let index = 0; index < Math.ceil(dataLength / numberRow); index++) {
        pageNumber.push(index);
    }
    const changePage = (type) => {
      type?handler(data.firstItem+numberRow,data.lastItem+numberRow):handler(data.firstItem-numberRow,data.lastItem-numberRow)
    };
    const openpage=(value)=>{
      handler(value*numberRow-numberRow,value*numberRow)
    }
    return (
        <div className="pagination">
            <button className={clsx("pagination-prev_next-button", data.firstItem == 0 ? "pages-ended active-tab" : null)} disabled={data.firstItem === 0} onClick={() => changePage(false)}>
                قبلی
            </button>
            {pageNumber.map((num) => (
              <button onClick={(e)=>openpage(Number(e.target.value))} value={num+1} key={num} className={clsx("pagination-button", data.firstItem/numberRow===num?'active-tab':"non-active-tab")}>{num+1}</button>
            ))}
            <button className={clsx("pagination-prev_next-button", data.lastItem >= dataLength ? "pages-ended active-tab" : null)} disabled={data.lastItem >= dataLength} onClick={() => changePage(true)}>
                بعدی
            </button>
        </div>
    );
}