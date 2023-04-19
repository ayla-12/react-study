import React, { useEffect, useState } from "react";

export default function AppProducts(){
    const [products, setProducts] = useState([])
    const [checked, setChecked] = useState(false)
    
    useEffect(() =>{
        fetch(`data/${checked ? "sale_products.json" : "products.json"}`).then(res =>{
            return res.json()
        }).then(data=> {
            setProducts(data)
        })
    }, [checked]) //의존성 
    //[] << 이거 안이(Products가 변하면) 안에 함수를 호출해라 라고 하면됨
    //호출 조건
    

    //use Effect로 감싸지 않으면 계속 랜더링을 다시해서 오류가 터짐

    // const [products, setProducts] = useState([
    //     [ 
    //         {
    //           "name": "약관관리",
    //           "price": "50,000"
    //         },
    //         {
    //           "name": "개인정보관리",
    //           "price": "10,000"
    //         },
    //         {
    //           "name": "스탠다드",
    //           "price": "20,000"
    //         }
    //     ]
    // ])
    return(
        <div>
            <input type="checkbox" value={checked} onChange={()=>{
                setChecked(!checked)
            }}/>
            <ul>
                {products.map((product, index) =>
                    <li key={index}>
                        {product.name}
                        {product.price}
                    </li>
                )
                }       

            </ul>
        </div>
    )

}