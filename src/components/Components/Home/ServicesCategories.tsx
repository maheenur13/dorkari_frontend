import { Carousel } from '@components/Common';
import { getCategoriesState } from '@store/actions';
import { setCategoriesData } from '@store/categories/categories.actions';
import { Modal } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CategoryDetails } from '../Includes';

const ServicesCategories = () => {
	const { categoriesData } = useSelector(getCategoriesState);
	// console.log('ohoo', categoriesData);

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [currentCategory, setCurrentCategory] = useState<any>({});
	const [activeIndex, setActiveIndex] = useState(null);



	const handleItemClick = (el: any,index:number) => {
		setCurrentCategory(el);
		setActiveIndex(index);
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="my-3 p-0">
			<Carousel
				type='icon'
				bordered
				space={8}
				slides={3}
				navigation
				data={categoriesData}
				clickHandler={handleItemClick}
			/>
			<>
				<Modal
					style={{ top: 20 }}
					title="Category Details"
					width={820}
					open={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}
					footer={false}
				>
					<CategoryDetails setActiveIndex={setActiveIndex} activeIndex={activeIndex} currentCategory={currentCategory} categoryData={categoriesData} />
				</Modal>
			</>
		</div>
	);
};

export default ServicesCategories;
