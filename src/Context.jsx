
import { useState, useContext, useEffect, createContext } from "react";



export const UserContext = createContext();




export const UserProvider =({children})=>{


  

  const [activeMenu,setActiveMenu ] = useState( {
    id:1,
    text:"Discover",
    to:"/"
  });
  
  const menuData =[
    {
      id:1,
      text:"Discover",
      to:"/"
    },
    {
      id:2,
      text:"Browse ",
      to:"/browsegames"
    },
    {
      id:3,
      text:"News",
      to:"/news"
    }
  ]
  
  const openMenu = (link)=>{
  

    
    setActiveMenu(link)
  }

  console.log(activeMenu)
  
    const isUser = localStorage.user ? JSON.parse(localStorage.user) : false;

  const [user, setUser] = useState(isUser);
  const value={user,openMenu,menuData,activeMenu,setUser}
return <UserContext.Provider value={value}>{children}</UserContext.Provider> ;
}