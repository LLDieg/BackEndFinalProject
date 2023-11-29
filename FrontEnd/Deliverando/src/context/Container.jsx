import { useEffect, useState } from "react";
import { MyContext } from "./context";

export default function Container({children}){

  const [user,setUser]= useState(null)
  const [products,setProducts]= useState([])
  const [cart, setCart]= useState([])

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){ 
      fetch("http://localhost:9000/api/users/verifytoken",{ // if we use another path we have to modify this 
          method:"GET",
          headers:{"token":token}
      }).then(res=>res.json())
      .then(result=>{
          if(result.success){
              setUser(result.data)
          }else{
              console.log(result.message)
          }
      })
  }
},[])

  return (
    <MyContext.Provider value={{user,setUser,products,setProducts,cart, setCart}} >
      {children}
    </MyContext.Provider>
  )
}