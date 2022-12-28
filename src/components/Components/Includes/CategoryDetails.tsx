import { Tabs } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';
import { CategoryListComponent } from './CategoryListComponent';

export const CategoryDetails: FC<any> = ({ categoryData,currentCategory,activeIndex,setActiveIndex }) => {

	const handleTabChange = (e: string) => {
		// console.log(e);
		setActiveIndex(e); 
	};

	return (
		<Wrapper>
			<Tabs
				onChange={handleTabChange}
				activeKey={activeIndex}
				tabPosition="left"
				items={categoryData?.map((el, i) => {
					console.log(el);

					return {
						label: `${el?.title}`,
						key: i,
						children: <CategoryListComponent item={el} />,
					};
				})}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	/* max-height: 350px;
    overflow-y: auto; */
`;
