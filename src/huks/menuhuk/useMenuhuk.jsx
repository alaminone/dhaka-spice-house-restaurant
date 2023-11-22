// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "../openapi/useAxiosOpen";

const useMenuhuk = () => {
    const axiosopenApi = useAxiosOpen();
    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await axiosopenApi.get('/menu')
            return res.data;
        }
    })
    
    return [menu,loading , refetch]
};

export default useMenuhuk;