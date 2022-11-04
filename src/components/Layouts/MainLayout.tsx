import { CopyRight, Header } from '@components/Includes';
import { FC, ReactNode } from 'react';

export const MainLayout: FC<PropsType> = ({ children }) => {
	return (
		<>
            <Header/>
			<main>{children}</main>
			<CopyRight/>
		</>
	);
};

type PropsType = {
	children: ReactNode;
};
