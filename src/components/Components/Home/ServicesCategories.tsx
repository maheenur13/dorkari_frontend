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
	const [categoryData, setCategoryData] = useState<any>({});
	const carouselData: any = [
		{
			imageSrc: '/images/categories/freeze.webp',
			title: 'Appliance Repair',
			subCategories: [],
		},
		{
			imageSrc: '/images/categories/freeze.webp',
			title: 'Shifting',
			subCategories: [],
		},
		{
			imageSrc: '/images/categories/freeze.webp',
			title: 'Cleaning & Pest Control',
			subCategories: [],
		},
		{
			imageSrc: '/images/categories/freeze.webp',
			title: 'Electronics & Gadgets Repair',
			subCategories: [],
		},
	];

	useEffect(() => {
		setCategoriesData(carouselData);
	}, []);

	const handleItemClick = (el: any) => {
		setCategoryData(el);
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
					<CategoryDetails categoryData={categoryData} />
				</Modal>
			</>
		</div>
	);
};

export default ServicesCategories;
