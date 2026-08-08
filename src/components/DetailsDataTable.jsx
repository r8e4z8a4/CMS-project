import { BiEdit } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";
import { IoMdEye } from "react-icons/io";
import Modal from "./Modal";
import { clsx } from "clsx";
import { useState } from "react";
import { Link } from "react-router";
import { TbMessageBolt } from "react-icons/tb";
import { RiEyeLine } from "react-icons/ri";
export default function DetailsDataTable({ page,item,handlers}) {
    const [isPublished_RoleInput,setIspublished_RoleInput]=useState(page==='users'?item.role:item.isPublished)
    const [title_FullNameInput,settitle_FullNameInput]=useState(page==='users'?item.fullName:item.title)
    const [Entity_UserNameInput,setEntity_UserNameInput]=useState(page==='users'?item.userName:item.entity)
    const [price_EmailInput,setPrice_EmailInput]=useState(page==='users'?item.email:item.price)
    const [description_PhoneNumberInput, setDescription_PhoneNumberInput]=useState(page==='users'?item.phoneNumber:item.description)
    const editproducts=()=>{
        handlers.EditProduct_User(item,title_FullNameInput,isPublished_RoleInput,Entity_UserNameInput,price_EmailInput,description_PhoneNumberInput,handlers.AllDataProject,handlers.setAllDataProject)
    }
    const changepublished=()=>{
        handlers.ChangePublisheProduct(item,!isPublished_RoleInput,handlers.AllDataProject,handlers.setAllDataProject)
        setIspublished_RoleInput(!isPublished_RoleInput)
    }
    const deleteproduct=()=>{
        handlers.DeleteProduct_User(item,handlers.AllDataProject,handlers.setAllDataProject)
    }
    if (page == "home" || page=='products' ||page==='users') {
        return (
            <div dir="rtl" className="flex items-center gap-2 *:size-5">
                <Modal handler={deleteproduct} title={`حذف ${page=='users'?item.role:'محصول'}`} content={<div className="flex items-center justify-center"> آیا از حذف {page!='users'?"محصول":null}<kbd className="px-2 py-1 rounded-md bg-red-500/15 font-black! mx-2 text-red-500">{page=='users'?item.fullName:item.title}</kbd> اطمینان دارید؟</div>}><HiOutlineTrash values={item.id} className="text-red-500"/></Modal>
                {(page=='home'||page=='products')&&<Modal handler={changepublished} title={'تغییر وضعیت انتشار'} content={<div className="flex items-center justify-center"><p> آیا از{" "}<span className={clsx(isPublished_RoleInput ? "text-blue-500" : "text-green-500")}>{" "}<strong>{isPublished_RoleInput ? "خصوصی" : "عمومی"}</strong></span>{" "} کردن این محصول اطمینان دارید؟</p></div>}><IoMdEye values={item.id} className="text-blue-500"/></Modal>}
                <Modal handler={editproducts} title={`تغییر جزئیات ${page=='users'?item.role:'محصول'}`} content={
                    <section className="text-start *:w-full space-y-1.5 *:[p]:text-xs text-gray-600 *:[p]:font-bold">
                        <p>{page=='users'?'نام کامل':'عنوان محصول '} :</p>
                        <input required className="input-style mb-4" type="text" onChange={(e)=>{settitle_FullNameInput(e.target.value)}} value={title_FullNameInput}/>
                        <p>{page=='users'?'نقش کاربری':'وضعیت انتشار'} :</p>
                        <div className="w-full border-2 border-zinc-200 h-10 rounded-lg flex *:w-full overflow-hidden relative *:cursor-pointer *:transition-all *:duration-300 mb-4">
                            {page=='users'?
                            <>
                                <div className={clsx('absolute -z-1 inset-y-0 w-[33.333333333333336%]! rounded-lg',isPublished_RoleInput==='مدیر'?'bg-blue-400/90':isPublished_RoleInput==='کاربر'?'bg-green-400/90 mr-[33.333333%]':isPublished_RoleInput==='پشتیبانی'?'bg-orange-400/90 mr-[67%]':null)}></div>
                                <button type="button" onClick={()=>{setIspublished_RoleInput('مدیر')}} className={clsx(isPublished_RoleInput=="مدیر"?'text-white':'text-black')}>مدیر</button>
                                <button type="button" onClick={()=>{setIspublished_RoleInput("کاربر")}} className={clsx(isPublished_RoleInput=="کاربر"?'text-white':'text-black')}>کاربر</button>
                                <button type="button" onClick={()=>{setIspublished_RoleInput("پشتیبانی")}} className={clsx(isPublished_RoleInput=="پشتیبانی"?'text-white':'text-black')}>پشتیبانی</button>
                            </>:
                            <>
                                <div className={clsx('absolute -z-1 inset-y-0 w-[50%]! rounded-lg',isPublished_RoleInput?'mr-[50%] bg-green-500':'bg-red-600')}></div>
                                <button type="button" onClick={()=>{setIspublished_RoleInput(false)}} className={clsx(isPublished_RoleInput?'text-black':'text-white')}>خصوصی</button>
                                <button type="button" onClick={()=>{setIspublished_RoleInput(true)}} className={clsx(isPublished_RoleInput?'text-white':'text-black')}>عمومی</button>
                            </>}
                        </div>
                        <p>{page=='users'?'نام کاربری':'موجودی محصول'} :</p>
                        <input required className={clsx('w-full input-style mb-4',page=='users'?'text-end':null)} onChange={(e)=>setEntity_UserNameInput(e.target.value)} value={Entity_UserNameInput} type={page==='users'?'text':'number'}/>
                        <p>{page==='users'?'پست الکترونیکی':'قیمت محصول'} :</p>
                        <input required className={clsx('input-style mb-4',page=='users'?'text-end':null)} type={page==='users'?'email':'number'} onChange={(e)=>setPrice_EmailInput(e.target.value)} value={price_EmailInput} {...(page==='users'&&{inputMode:"numeric"})}/>
                        <p>{page==='users'?'شماره موبایل':'توضیحات محصول'} :</p>
                        {page==='users'?<input required className='input-style mb-4' type="tel" onChange={(e)=>setDescription_PhoneNumberInput(e.target.value)} value={description_PhoneNumberInput}/>:
                        <textarea required className="input-style py-3 min-h-25" onChange={(e)=>setDescription_PhoneNumberInput(e.target.value)} value={description_PhoneNumberInput}></textarea>}
                    </section>
                }><BiEdit values={item.id} className="text-green-500"/></Modal>
            </div>
        );
    }else if (page=='tickets') {
        return <Link to={`/tickets/${item.id}`} className="flex items-center gap-1 link-text justify-end text-nowrap">
                <span>مشاهده پیغام</span>
                <TbMessageBolt />
            </Link>
    }else if (page=='comments') {
       return <Modal title={'نمایش کامل کامنت'} content={<p>{item.comment}</p>}>
            <div className="flex items-center gap-1.5 text-blue-600 hover:text-blue-900 transition-all duration-200 hover:scale-[1.1] text-sm">
                <RiEyeLine/>
                <p className="truncate max-w-30" dir="rtl">{item.comment}</p>
            </div>
       </Modal>
        
    }
}
