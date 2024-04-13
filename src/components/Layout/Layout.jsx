import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import auth from '../../proxyState/auth';
import { useSnapshot } from 'valtio';
const Layout = ({ children }) => {
    const authCtx = useSnapshot(auth)
    return (
        <>
            {
                authCtx.isLogin ? <section id="layout">
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
