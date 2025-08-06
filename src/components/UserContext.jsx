import React, { createContext, useState } from 'react'

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'Emmanuel Ofori' })

    const updateUser = (newName) => {
        setUser({ name: newName })
    }

    return <UserContext.Provider value={{ user, updateUser }}>
        {children}
    </UserContext.Provider>
}

export { UserContext, UserContextProvider }
