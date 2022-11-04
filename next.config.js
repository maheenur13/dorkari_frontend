/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// experimental: {
	// 	forceSwcTransforms: true,
	//   },
	env: {
		apiUrl: process.env.API_URL,
	},
};

module.exports = nextConfig;
