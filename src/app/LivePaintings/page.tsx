import { Hero } from "@/components";

const heroContent = {
    title: "Capture Your Love Story in Real-Time",
    text: "Turn your wedding into a masterpiece with live painting that preserves the magic of your big day.",
    image: "/images/wedding/firstDance.jpeg",
    buttons: [
        {
            text: "book your live painter today",
            href: "/Contact",
            variant: "contained" as const
        },
    ],

}
const LivePaintings = () => {
    return (
        <div>
            <Hero {...heroContent} />
        </div>
    );
}
export default LivePaintings;