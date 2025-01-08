"use client";
import { Header, Footer } from "@/components";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer/>
		</div>
	);
};

export default MainLayout;
