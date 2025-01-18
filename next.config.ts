import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
};

// next.config.js
module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "rdobackend-bucket.s3.amazonaws.com",
				pathname: "/products/**", // Optional: Restrict to a specific path
			},
		],
	},
};

export default nextConfig;
