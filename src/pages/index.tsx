import { HomePage } from '@components/Components';
import { MainLayout } from '@components/Layouts';
import { categoryAPI } from '@libs/api';
import { getAllServiceType, setCategoriesData } from '@store/categories/categories.actions';
import type { NextPage } from 'next';
import Head from 'next/head';
import {useEffect} from 'react';

const Home: NextPage = (props:any) => {
	console.log(props);

	useEffect(() => {
		setCategoriesData(props.categoryData || []);
		getAllServiceType();
	}, []);
	
	return (
		<MainLayout>
			<Head>
				<title>Dorkari</title>
				<meta name="description" content="Dorkari" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<HomePage/>
			
		</MainLayout>
	);
};

export async function getServerSideProps() {
	try {
		const { data, success, message } = await categoryAPI.getCategory();
        
		if (success) {
			return {
				props: {
					categoryData: data ,
				},
			};
		} else {
			return {
				props: {
					categoryData: [],
				},
			};
		}
	} catch (error) {
		return {
			props: {
				categoryData: [],
			},
		};
	}
  }

export default Home;
