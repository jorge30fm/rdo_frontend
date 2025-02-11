import { NextConfig } from "next";
import autoCert from "anchor-pki/auto-cert/integrations/next";

// Enable automatic certificate handling in development
const withAutoCert = autoCert({
	enabledEnv: "development",
});

// Define Next.js configuration
const nextConfig: NextConfig = withAutoCert({
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "rdobackend-bucket.s3.amazonaws.com",
				pathname: "/products/**", // Restrict to specific path
			},
		],
	},
});

export default nextConfig;
