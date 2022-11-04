import store, { persistor } from '@store';
import { PersistGate } from 'redux-persist/integration/react';
import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/css/app.css';
import '../../public/sass/app.scss';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		</>
	);
}

export default MyApp;
