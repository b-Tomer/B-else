import ServicePreview from "./ServicePreview";



export default function ServicesSection() {

    const services = [
        {
            iconURL: '/images/brainstorm.png',
            header: 'הצוות שלנו ',
            text: 'מעצבי UI/UX , מתכנתים בקוד מהשורה הראשונה, אנשי שיווק וקידום אתרים, קריאייטיב ועוד...',
            link: "#projects"
        },
        {
            iconURL: '/images/laptop.png',
            header: '',
            text: 'some text about it',
            link: "#projects"
        },
        {
            iconURL: '/images/camera.png',
            header: '',
            text: 'some text about it',
            link: "#projects"
        },
    ]

    return (
        <div className="bg-white pb-10 text-center">
            <div className="bg-main-orange py-20">
                <h1 className="text-3xl font-bold mb-3 text-slate-600">Makes it better</h1>
                <p className="mb-6 text-slate-600">כחברה מצטיינת ומובילה במקצוענות וחדשנות עם דגש על רמת שירות גבוהה לטובת לקוחותיה. חזון החברה מוטמע בכל מחלקות החברה, תוך שימת דגש על מספר ערכים מרכזיים: חתירה למצוינות ומקצוענות באיכות כתיבת הקוד בפיתוח שאיפה מתמדת לחדשנות בתחום עיצוב אתרים לצד ממשקי משתמש מתקדמים עם דגש על הטכנולוגיה. חשיבה גלובאלית, פעילות לוקאלית, יחס אישי, הגינות, יושרה ופתיחות שקיפות מלאה מול הלקוח!</p>
            </div>

            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 p-6 gap-4">
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
