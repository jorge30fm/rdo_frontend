import { Header } from "@/components";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default MainLayout;