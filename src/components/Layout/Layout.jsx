import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import auth from '../../proxyState/auth';
import { useSnapshot } from 'valtio';
import { useParams } from 'react-router-dom';
const Layout = ({ children }) => {
    const authCtx = useSnapshot(auth)
    console.log(authCtx.isLogin)
    const alias=window.location.pathname
    
    return (
        <>
            {
                authCtx.isLogin && alias!="/login" ? <section id="layout">
                    <Sidebar>
                        {children}
                    </Sidebar>

                </section> : <>
                    {children}
                </>
            }
        </>

    );
};

export default Layout;
