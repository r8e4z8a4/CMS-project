import { useEffect, useState } from "react";
import Table from "../../components/Table";
import TitleButtons1 from "../../components/TitleButtons1";
import { fetchPOST } from "../../api/fetchPOST";
import { userTableHeadRow } from "../../data/DataTableHeadRow";
import GridLayout from "../../components/GridLayout";
import Modal from "../../components/Modal";
import clsx from "clsx";
import { EditProduct_User,DeleteProduct_User } from "../../helpers/EditChageDeleteHandlers";
import { useOutletContext } from "react-router";
export default function page() {
    const [NewMember,setNewMember]=useState({id: crypto.randomUUID(),userName:'',fullName:'',img:'/images/profile-avatar.jpg',phoneNumber:'',email:'',role:''})
    const [ActiveLayout,setActiveLay]=useState(true)
    const [isMobile,setisMobile]=useState(false)
    const [OpenAddUser,setOpenAddUser]=useState(false);
    const {AllDataProject,setAllDataProject}=useOutletContext()
    useEffect(()=>{
        const widthScreen=()=>{
            setisMobile(window.innerWidth<=795)
        }
        widthScreen()
        window.addEventListener('resize',widthScreen)
        return ()=>{
            window.removeEventListener('resize',widthScreen)
        }
    },[])
    const OpenAddUserModal = () => {
        setOpenAddUser(!OpenAddUser);
        setNewMember({id: crypto.randomUUID(),userName:'',fullName:'',img:'/images/profile-avatar.jpg',phoneNumber:'',email:'',role:''})
    }
    const CreateNewMember=()=>{
        const {img,id,...member}=NewMember
        fetchPOST('users',member)
        setAllDataProject({...AllDataProject,AllMembers:[...AllDataProject.AllMembers,NewMember]})
        setNewMember({id: crypto.randomUUID(),userName:'',fullName:'',img:'/images/profile-avatar.jpg',phoneNumber:'',email:'',role:''})
    }
    return (
        <div className="space-y-10 pb-5">
            <TitleButtons1 title={"کاربران وب سایت"} button1={!isMobile} button2={"ایجاد کاربر جدید"} handler={OpenAddUserModal} changeLayoutHandler={()=>setActiveLay(!ActiveLayout)} />
            {OpenAddUser&&<Modal exception open={OpenAddUser} setopen={setOpenAddUser} content={
                <section className="text-start *:w-full space-y-1.5 *:[p]:text-xs text-gray-600 *:[p]:font-bold">
                    <p>نام کامل :</p>
                    <input required className="input-style mb-4" type="text" onChange={(e)=>{setNewMember({...NewMember,fullName:e.target.value})}} value={NewMember.fullName}/>
                    <p>نقش کاربری :</p>
                    <div className="w-full border-2 border-zinc-200 h-10 rounded-lg flex *:w-full overflow-hidden relative *:cursor-pointer *:transition-all *:duration-300 mb-4">
                        <div className={clsx('absolute -z-1 inset-y-0 w-[33.333333333333336%]! rounded-lg',NewMember.role==='مدیر'?'bg-blue-400/90':NewMember.role==='کاربر'?'bg-green-400/90 mr-[33.333333%]':NewMember.role==='پشتیبانی'?'bg-orange-400/90 mr-[67%]':null)}></div>
                        <button type="button" onClick={()=>{setNewMember({ ...NewMember, role: 'مدیر' })}} className={clsx(NewMember.role=="مدیر"?'text-white':'text-black')}>مدیر</button>
                        <button type="button" onClick={()=>{setNewMember({ ...NewMember, role: 'کاربر' })}} className={clsx(NewMember.role=="کاربر"?'text-white':'text-black')}>کاربر</button>
                        <button type="button" onClick={()=>{setNewMember({ ...NewMember, role: 'پشتیبانی' })}} className={clsx(NewMember.role=="پشتیبانی"?'text-white':'text-black')}>پشتیبانی</button>
                    </div>
                    <p>نام کاربری :</p>
                    <input required className='w-full input-style mb-4 text-end' onChange={(e)=>setNewMember({...NewMember,userName:e.target.value})} value={NewMember.userName} type='text'/>
                    <p>پست الکترونیکی :</p>
                    <input required  className='input-style mb-4 text-end' type='email' onChange={(e)=>setNewMember({...NewMember,email:e.target.value})} value={NewMember.email}/>
                    <p>شماره موبایل :</p>
                    <input required className='input-style mb-4' placeholder="09+++++++++" type="tel" onChange={(e)=>setNewMember({...NewMember,phoneNumber:e.target.value})} value={NewMember.phoneNumber}/>
                </section>
            } title={'ایجاد کاربری جدید'} handler={CreateNewMember}>
                
                </Modal>}
            <div className={clsx(isMobile||!ActiveLayout?'':'hidden')}><GridLayout handlers={{EditProduct_User,DeleteProduct_User,AllDataProject,setAllDataProject}} numberRow={8} page={'users'} data={AllDataProject.AllMembers}/></div>
            <div className={clsx(!isMobile&&ActiveLayout?'':'hidden')}><Table handlers={{EditProduct_User,DeleteProduct_User,AllDataProject,setAllDataProject}} numberRow={10} dataTableHeadRow={userTableHeadRow} data={AllDataProject.AllMembers} limit={["id", "fullName", "userName", "email",'phoneNumber','role','']} page={"users"} /></div>
        </div>
    );
}
