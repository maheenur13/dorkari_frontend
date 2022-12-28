/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// images: {
	// 	remotePatterns: [
	// 	  {
	// 		protocol: 'https',
	// 		hostname: 'i.ibb.co',
	// 		port: '',
	// 		pathname: '',
	// 	  },
	// 	],
	//   },
	images: {
		domains: ['i.ibb.co','cdn.zdrop.com.bd'],
	},
	// experimental: {
	// 	forceSwcTransforms: true,
	//   },
	env: {
		apiUrl: process.env.API_URL,
	},
};

module.exports = nextConfig;
