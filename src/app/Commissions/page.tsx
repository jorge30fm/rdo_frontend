import { Hero } from "@/components";

const heroContent = {
    title: "BRING YOUR VISION TO LIFE",
    subtitle: "Custom Paintings Tailored to Your Story",
    text: "Whether it’s a cherished memory, a special occasion, or an abstract idea, Roldan Valdez Studio transforms your vision into a timeless masterpiece. With expertise in acrylic and live painting, every commissioned piece is crafted with care and artistic precision to create something uniquely yours.",
    image: "/images/sectionImages/paintingStudio.jpeg",
    buttons: [
        {
            text: "Request a Commission",
            href: "/Contact",
            variant: "contained" as const
        },
    ],

}
const Commissions = () => {
    return (
        <div>
            <Hero {...heroContent} />
        </div>
    );
}
export default Commissions;