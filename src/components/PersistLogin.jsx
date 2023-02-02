import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useRefreshToken } from '../hooks/useRefreshToken'
import { useLocalStorage } from '../hooks/useLocalStorage'


const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true)
    const refresh = useRefreshToken()
    const { auth } = useAuth()
    const [persist] = useLocalStorage('persist', false)

    useEffect(() => {
        let isMounted = true

        const verifyRefreshToken = async () => {
            try {
                await refresh()
            }
            catch (err) {
                console.error(err)
            }
            finally {
                isMounted && setIsLoading(false)
            }
        }

        // persist added here
        // Avoids unwanted call to verifyRefreshToken
        !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false)

        return () => isMounted = false
    }, [])

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`)
        console.log(`aT: ${JSON.stringify(auth?.accessToken)}`)
    }, [isLoading])


    const content = (<>
        {
            !persist
                ? <Outlet />
                : isLoading
                    ? <p>Loading...</p>
                    : <Outlet />
        }
    </>)

    return content
}

export default PersistLogin