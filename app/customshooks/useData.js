'use client'
import {useState, useEffect} from 'react'
import { fetchData } from '@/utils/fetchData'

export default function useData(url, token) {
    const [datos, setDatos] = useState({})

    useEffect(()=>{
        fetchData(url, token)
            .then((rs)=>setDatos(rs))
            .catch((error)=>console.log(error))
    },[url])
    return {datos}
}
