import { Outlet } from "react-router";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import BackgroundOverlay from "./BackgroundOverlay";
import { useEffect, useState } from "react";
import { products } from "../data/products";
import users from "../data/users";
import { fetchGET } from "../api/fetchGET";
import { CirclesWithBar } from "react-loader-spinner";
export default function RootLayout() {
    const [islaoding,setislaoding]=useState(true)
    const [AllDataProject,setAllDataProject]=useState({AllProducts:[],AllMembers:[],AllTickets:[],AllComments:[]})
    useEffect(() => {
        fetchGET(setAllDataProject,setislaoding)
    }, []);
    return (
        <main className="flex">
            <Sidebar />
            <section className="grow">
                <Topbar />
                <div className="relative pt-6 px-6">
                    {islaoding?
                    <div className='fixed size-full! top-0 left-0 z-10 bg-black/30 flex-center duration-300 px-5'>
                        <CirclesWithBar height="100" width="100" color="#4fa94d" outerCircleColor="#04C0CF" innerCircleColor="#B200BA" barColor="#C4402D" ariaLabel="درحال ارتباط با سرور" visible={true}/>
                    </div>
                    :<Outlet context={{AllDataProject,setAllDataProject}} />}
                    <BackgroundOverlay />
                </div>
            </section>
        </main>
    );
}
