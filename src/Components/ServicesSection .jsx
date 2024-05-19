import { scrollToSection } from "@/utils/helpers";
import ServicePreview from "./ServicePreview";



export default function ServicesSection() {

    const services = [
        {
            iconURL: '/images/brainstorm.png',
            header: 'עיצוב וחווית משתמש',
            text: 'מעצבי UI/UX , מתכנתים בקוד מהשורה הראשונה, אנשי שיווק וקידום אתרים, קריאייטיב ועוד...',
            link: "#projects"
        },
        {
            iconURL: '/images/laptop.png',
            header: 'בניית אתר בקוד',
            text: 'אנו מציעים בניית אתרים בקוד מותאם בשימוש ב-Next.js, מה שמאפשר גמישות עיצובית רחבה, ביצועים מהירים ואבטחה מוגברת. אתרכם יהיה ייחודי ומותאם במדויק לצרכים שלכם, תוך הבטחת סקאלביליות ויכולת תחזוקה עתידית עצמאית.',
            link: "#projects"
        },
        {
            iconURL: '/images/camera.png',
            header: 'מיתוג אישי',
            text: 'some text about it',
            link: "#projects"
        },
    ]

    return (
        <div className="bg-white pb-10 text-center">
            <div className="bg-main-purple py-40">
                <button
                    onClick={() => scrollToSection("contact")}
                    className="text-xl hover:scale-110 duration-300 shadow-xl bg-main-background font-semibold p-3 px-6 rounded-lg font-sans">JOIN US</button>
            </div>

            <div id="services" className="container mx-auto py-20 px-6 sm:px-0 grid grid-cols-1 sm:grid-cols-3 sm:gap-8 md:gap-3 gap-20">
                {services.map((service, index) =>
                    <ServicePreview
                        key={index}
                        service={service}
                        iconURL={service.iconURL}
                        header={service.header}
                        text={service.text}
                        link={service.link}
                    />
                )}
            </div>
        </div>
    );
};
