import { fetchPATCH } from "../api/fetchPATCH";
import { fetchDELETE } from "../api/fetchDELETE";
export const EditProduct_User = (item, title_FullNameInput, isPublished_RoleInput, Entity_UserNameInput, price_EmailInput, description_PhoneNumberInput, AllData, setAllData) => {
    let newData;
    if (item.title) {
        newData = AllData.AllProducts.map((DataItem) => (DataItem.id === item.id ? { ...DataItem, title: title_FullNameInput, description: description_PhoneNumberInput, entity: Entity_UserNameInput, isPublished: isPublished_RoleInput, price: Number(price_EmailInput) } : DataItem));
        fetchPATCH("products", item.id, { title: title_FullNameInput, description: description_PhoneNumberInput, entity: Number(Entity_UserNameInput), isPublished: isPublished_RoleInput, price: Number(price_EmailInput) });
            setAllData({...AllData,AllProducts:newData});
    } else {
        newData = AllData.AllMembers.map((DataItem) => (DataItem.id === item.id ? { ...DataItem, fullName: title_FullNameInput, phoneNumber: description_PhoneNumberInput, userName: Entity_UserNameInput, role: isPublished_RoleInput, email: price_EmailInput } : DataItem));
        fetchPATCH('users',item.id,{fullName: title_FullNameInput, phoneNumber: Number(description_PhoneNumberInput), userName: Entity_UserNameInput, role: isPublished_RoleInput, email: price_EmailInput})
        setAllData({...AllData,AllMembers:newData});
    }
};
export const ChangePublisheProduct = (item, isPublished_RoleInput, AllData, setAllData) => {
    const newProducts = AllData.AllProducts.map((DataItem) => (DataItem.id === item.id ? { ...DataItem, isPublished: isPublished_RoleInput } : DataItem));
    fetchPATCH('products',item.id,{isPublished:isPublished_RoleInput})
    setAllData({...AllData,AllProducts:newProducts});
};
export const DeleteProduct_User = (item, AllData, setAllData) => {
    let newData
    if (item.title) {
        newData=AllData.AllProducts.filter((DataItem) => DataItem.id !== item.id);
        fetchDELETE('products',item.id)
        setAllData({...AllData,AllProducts:newData});
    } else {
        newData=AllData.AllMembers.filter((DataItem) => DataItem.id !== item.id);
        fetchDELETE('users',item.id)
        setAllData({...AllData,AllMembers:newData});
    }
};
