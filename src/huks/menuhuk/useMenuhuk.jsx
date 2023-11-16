// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const useMenuhuk = () => {
    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5001/menu');
            return res.json();
        }
    })
    
    return [menu,loading , refetch]
};

export default useMenuhuk;