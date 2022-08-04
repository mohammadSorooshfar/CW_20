import React, {ReactNode} from 'react';
import Header from "./Header";

interface IUserLayoutProps {
    children: ReactNode
}

function UserLayout({children}: IUserLayoutProps) {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
}

export default UserLayout;