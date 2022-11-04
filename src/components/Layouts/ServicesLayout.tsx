import { CopyRight, Header } from '@components/Includes';
import React, { FC, ReactNode } from 'react';

export const ServicesLayout:FC<PrposType> = ({children}) => {
    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
            <CopyRight/>
        </div>
    );
};

type PrposType = {
    children?:ReactNode;
}
