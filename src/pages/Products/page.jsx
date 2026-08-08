import { useEffect, useState } from "react";
import Table from "../../components/Table";
import TitleButtons1 from "../../components/TitleButtons1";
import { productsAllTableHeadRow} from "../../data/DataTableHeadRow";
import GridLayout from "../../components/GridLayout";
import Modal from "../../components/Modal";
import clsx from "clsx";
import { fetchPOST } from "../../api/fetchPOST";
import { EditProduct_User,DeleteProduct_User,ChangePublisheProduct } from "../../helpers/EditChageDeleteHandlers";
import { useOutletContext } from "react-router";
export default function page() {
    const [NewProduct,setNewProduct]=useState({id: crypto.randomUUID(),title:'',description:'',img:'/images/product-img.jpg',isPublished:false,price:'',entity:''})
    const [ActiveLayout,setActiveLayout]=useState(true)
    const [isMobile,setisMobile]=useState(false)
    const [OpenAddProduct,setOpenAddProduct]=useState(false);
    const {AllDataProject,setAllDataProject}=useOutletContext()
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
    const OpenModalProduct = () => {
        setOpenAddProduct(!OpenAddProduct);
        setNewProduct({id: crypto.randomUUID(),title:'',description:'',img:'/images/product-img.jpg',isPublished:false,price:'',entity:''})
    }
    const CreateNewProduct=()=>{
        const {img,id,...product}=NewProduct
        product.price=Number(product.price)
        product.entity=Number(product.entity)
        console.log(product);
        fetchPOST('products',product)
        setAllDataProject({...AllDataProject,AllProducts:[...AllDataProject.AllProducts,NewProduct]})
        setNewProduct({id: crypto.randomUUID(),title:'',description:'',img:'/images/product-img.jpg',isPublished:false,price:'',entity:''})
    }
    return (
        <div className="space-y-10 pb-5">
            <TitleButtons1 title={"لیست محصولات"} button1={!isMobile} button2={"ایجاد محصول"} handler={OpenModalProduct} changeLayoutHandler={()=>setActiveLayout(!ActiveLayout)} />
            {OpenAddProduct&&<Modal exception open={OpenAddProduct} setopen={setOpenAddProduct} content={
                <section className="text-start *:w-full space-y-1.5 *:[p]:text-xs text-gray-600 *:[p]:font-bold">
                    <p>عنوان محصول :</p>
                    <input required className="input-style mb-4" type="text" onChange={(e)=>{setNewProduct({...NewProduct,title:e.target.value})}} value={NewProduct.title}/>
                    <p>وضعیت انتشار :</p>
                    <div className="w-full border-2 border-zinc-200 h-10 rounded-lg flex *:w-full overflow-hidden relative *:cursor-pointer *:transition-all *:duration-300 mb-4">
                        <div className={clsx('absolute -z-1 inset-y-0 w-[50%]! rounded-lg',NewProduct.isPublished?'mr-[50%] bg-green-500':'bg-red-600')}></div>
                        <button type="button" onClick={()=>setNewProduct({...NewProduct,isPublished:false})} className={clsx(NewProduct.isPublished?'text-black':'text-white')}>خصوصی</button>
                        <button type="button" onClick={()=>setNewProduct({...NewProduct,isPublished:true})} className={clsx(NewProduct.isPublished?'text-white':'text-black')}>عمومی</button>
                    </div>
                    <p>موجودی محصول :</p>
                    <input required className="w-full input-style mb-4" onChange={(e)=>setNewProduct({...NewProduct,entity:e.target.value})} value={NewProduct.entity} type="number"/>
                    <p>قیمت محصول :</p>
                    <input required className="input-style mb-4" type="number" onChange={(e)=>setNewProduct({...NewProduct,price:e.target.value})} value={NewProduct.price} inputMode="numeric"/>
                    <p>تضیحات محصول :</p>
                    <textarea required className="input-style py-3 min-h-25" onChange={(e)=>setNewProduct({...NewProduct,description:e.target.value})} value={NewProduct.description}></textarea>
                </section>
            } title={'ایجاد محصول جدید'} handler={CreateNewProduct}>  
            </Modal>}
            <div className={clsx(isMobile||!ActiveLayout?'':'hidden')}><GridLayout page={'products'} handlers={{EditProduct_User,ChangePublisheProduct,DeleteProduct_User,AllDataProject,setAllDataProject}} numberRow={8} data={AllDataProject.AllProducts}/></div>
            <div className={clsx(!isMobile&&ActiveLayout?'':'hidden')}><Table handlers={{EditProduct_User,ChangePublisheProduct,DeleteProduct_User,AllDataProject,setAllDataProject}} numberRow={10} dataTableHeadRow={productsAllTableHeadRow} data={AllDataProject.AllProducts} limit={["id", "title", "isPublished", "price",'entity', ""]} page={"products"} /></div>
        </div>
    );
}
