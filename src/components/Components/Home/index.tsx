import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import ServicesCategories from './ServicesCategories';
import { SpecificCategories } from '../../Common/SpecificCategories';
import Router from 'next/router';
import { WhyChooseUs } from '../About';

export const HomePage: FC = () => {
	const carouselData: any = [
		{
			imageSrc: '/images/categories/stove.webp',
			title: 'Gas Stove / Burner Repair',
			subCategories: [],
			slug:'gas_or_burner_repair',
		},
		{
			imageSrc: '/images/categories/worker.webp',
			title: 'Plumbing and Sanitary Services',
			subCategories: [],
			slug:'plumbing_sanitary_repair',

		},
		{
			imageSrc: '/images/categories/worker.webp',
			title: 'Cleaning & Pest Control',
			subCategories: [],
			slug:'cleaning_pest_control',
			
		},
		{
			imageSrc: '/images/categories/worker.webp',
			title: 'Painting Service',
			subCategories: [],
			slug:'cleaning_pest_control',
			
		},
		{
			imageSrc: '/images/categories/worker.webp',
			title: 'Electronics & Gadgets Repair',
			subCategories: [],
			slug:'electronics_gadgets_repair',
		},
	];

	const handleCardClick = (el:any) => {
		console.log(el);
		Router.push(`/services/${el.slug}`);
		
	};

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
				<SpecificCategories slidesNo={3} carouselData={carouselData} clickHandler={handleCardClick} title='For Your Home' titleSize={1.1}  />
				<SpecificCategories carouselData={carouselData} clickHandler={handleCardClick} title='Recently View' titleSize={1.1}  />
				<SpecificCategories carouselData={carouselData} clickHandler={handleCardClick} title='Trending' titleSize={1.1}  />
				
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
