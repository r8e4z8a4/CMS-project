import { useState } from "react";
import Chart from "../../components/Chart";
import Summary from "../../components/Summary";
import Table from "../../components/Table";
import TitleButtons1 from "../../components/TitleButtons1";
import { generateChartData, generateSummaries } from "../../data/home";
import { productsTableHeadRow } from "../../data/DataTableHeadRow";
import { useNavigate, useOutletContext } from "react-router"
import { EditProduct_User,DeleteProduct_User,ChangePublisheProduct } from "../../helpers/EditChageDeleteHandlers";
import LastProduct_User from "../../components/LastProduct_User";
import GridLayout from "../../components/GridLayout";
export default function page() {
    // const {AllProducts,setAllProducts,AllMembers,AllTickets}=useOutletContext()
    const {AllDataProject,setAllDataProject}=useOutletContext()
    const summaryData = generateSummaries({ productsLength: AllDataProject.AllProducts.length, usersLength: AllDataProject.AllMembers.filter((member)=>member.role=='کاربر').length, ticketsLength: AllDataProject.AllTickets.length, adminsLength: AllDataProject.AllMembers.filter((member)=>member.role=='مدیر').length });
    const chartData = generateChartData({ productsLength: AllDataProject.AllProducts.length, usersLength: AllDataProject.AllMembers.filter((member)=>member.role=='کاربر').length, ticketsLength: AllDataProject.AllTickets.length, adminsLength: AllDataProject.AllMembers.filter((member)=>member.role=='مدیر').length });
    const navigate = useNavigate();
    const [state, setState] = useState(false);
    const HomeHandlerTitleButton = () => { 
        setState(!state);
        setTimeout(() => {
            navigate("/products");
        }, 1500);
    };
    return (
        <div className="pb-10">            
            <TitleButtons1 state={state} handler={HomeHandlerTitleButton} title={"داشبورد"} button2={"ایجاد محصول"} />
            <Summary data={summaryData} />
            <Chart data={chartData} />
            <div className="hidden sm:block">
                <Table handlers={{EditProduct_User,ChangePublisheProduct,DeleteProduct_User,AllDataProject,setAllDataProject}} numberRow={5} dataTableHeadRow={productsTableHeadRow} data={AllDataProject.AllProducts} limit={["id", "title", "isPublished", "price", ""]} page={"home"} />
            </div>
            <div className="block sm:hidden">
                <GridLayout page={'products'} handlers={{EditProduct_User,ChangePublisheProduct,DeleteProduct_User,AllDataProject,setAllDataProject}} numberRow={8} data={AllDataProject.AllProducts}/>
            </div>
            <div className="grid grid-cols-12 *:p-5 *:border-2 *:border-zinc-200 *:bg-white *:rounded-xl gap-3 *:shadow mt-10">
                <LastProduct_User title={"محصولات"} data={AllDataProject.AllProducts.slice(-4)} type={"products"} length={AllDataProject.AllProducts.length}/>
                <LastProduct_User title={"کاربران"} data={AllDataProject.AllMembers.slice(-5)} type={"users"} length={AllDataProject.AllMembers.length}/>
            </div>
        </div>
    );
}
