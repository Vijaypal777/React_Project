import React, { createContext, useState } from 'react';



const UserContextProvider=({children})=>{
    const [user, setUser]=React.useState(null)
    return(
        <UserContextProvider value={{user,setUser}}>
        {children}

        </UserContextProvider>
    )

}

export default UserContextProvider;