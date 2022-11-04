import { HomePage } from '@components/Components';
import { MainLayout } from '@components/Layouts';
import type { NextPage } from 'next';
import Head from 'next/head';
const Home: NextPage = () => {
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

export default Home;
