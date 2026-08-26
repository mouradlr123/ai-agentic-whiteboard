"use client"

import { UserDetailContext } from "@/context/UserDetailContext";
import axios from "axios";
import { useEffect, useState } from "react"

function Provider({children}:{children: React.ReactNode}){
    
    const [userDetail,setuserDetail] = useState<any>();
    useEffect(() => {
        CreateNewUser();
    },[])


    const CreateNewUser = async ()=>{
        const result = await axios.post('/api/users')
        
        console.log(result.data);
        setuserDetail(result.data);
    
    }
   
    return (
        <UserDetailContext.Provider value={{}}>
              <div>
                 {children}
              </div>
        </UserDetailContext.Provider>
        
    )
}

export default Provider