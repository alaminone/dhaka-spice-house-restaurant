import { useEffect, useState } from "react";


const useMenuhuk = () => {
    const [menu , setmenu] = useState([]);
    const [loding , setloding] = useState(true)

    useEffect(()=>{
        fetch('http://localhost:5001/menu')
        .then(res => res.json())
        .then(data =>{
           
            setmenu(data)
            setloding(false)
        })
    },[])
    
    return [menu,loding]
};

export default useMenuhuk;