import React, { FC, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import ServicesCategories from './ServicesCategories';
import { SpecificCategories } from '../../Common/SpecificCategories';
import Router from 'next/router';
import { WhyChooseUs } from '../About';
import { useSelector } from 'react-redux';
import { getCategoriesState } from '@store/actions';

export const HomePage: FC = () => {
	const { categoriesData,allServices,allProperties } = useSelector(getCategoriesState);
	const [services,setServices] = useState([]);

	const handleCardClick = (el:any,dataType:string) => {
		console.log(el);
		if(dataType === 'property') {
			Router.push(`/properties/${el.slug}`);
		}
		else {
			Router.push(`/services/${el.slug}`);
		}
		
		
	};

	useEffect(()=>{
		// categoriesData.map((el,idx)=>{
		// 	if(el.title.includes('Appliance Repair')) {
		// 		setServices(el.services);
		// 	}
		// });

	},[]);

	

	return (
		<div>
			<Wrapper>
				<div>
					<h1>Your Personal Assistant</h1>
					<h4>One-stop solution for your services. Order any service, anytime.</h4>
				</div>
				<div></div>
			</Wrapper>
			<Container>
				<ServicesCategories />
				<SpecificCategories slidesNo={4} carouselData={allServices} clickHandler={handleCardClick} title='For Your Home' titleSize={1.1}  />
				<SpecificCategories carouselData={allServices} clickHandler={handleCardClick} title='Recently View' titleSize={1.1}  />
				<SpecificCategories carouselData={allProperties} clickHandler={handleCardClick} title='Properties' titleSize={1.1} dataType="property"  />
				<SpecificCategories carouselData={allServices} clickHandler={handleCardClick} title='Trending' titleSize={1.1}  />
				
			</Container>
			<WhyChooseUs/>
		</div>
	);
};

const Wrapper = styled.div`
	background-image: url('/images/bg.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	height: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	* {
		color: #ffffff;
	}
	h1 {
		font-weight: 700;
		font-size: 4rem;
		text-align: center;
	}
	h4 {
		font-weight: 600;
		font-size: 2rem;
		text-align: center;
	}
`;
