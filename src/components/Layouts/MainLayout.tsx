import { CopyRight, Header } from '@components/Includes';
import { FC, ReactNode } from 'react';

export const MainLayout: FC<PropsType> = ({ children }) => {
	return (
		<>
            <Header/>
			<main >
				<div>
				{children}
				</div>
			</main>
			<CopyRight/>
		</>
	);
};

type PropsType = {
	children: ReactNode;
};
