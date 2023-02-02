import { Outlet } from 'react-router-dom'


const Layout = () => {
    
    const content = (
        <main className='App'>
            <Outlet />
        </main>
    )

    return content
}

export default Layout