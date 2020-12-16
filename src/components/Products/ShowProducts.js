import React,{useState, useEffect} from 'react'

export default function ShowProducts() {
    const [prod, setprod] =  useState()
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }, [])
    return (
        <div>
            

        </div>
    )
}
