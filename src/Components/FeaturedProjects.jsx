import ProjectPreview from './ProjectPreview';

export default function FeaturedProjects() {
    // Sample data for the projects
    const projects = [
        {
            id: 1,
            name: 'בלוגים ואתרי מכירות ',
            description: "בלוג אוכל טבעוני בעל עיצוב מדויק רספונסיבי ומוקפד, עם מערכת ניהול תוכן מתקדמת שמקנה נוחות משתמש רבה. הפלטפורמה מעודדת חשיפה מוגברת ומקדמת מכירות דרך שילוב של כלים חכמים ותוכן איכותי.",
            imageUrl: '/images/noy-web.png',
        },
        {
            id: 2,
            name: 'אפלקציית ניהול משימות',
            description: ' ממשק גרפי נקי ומערכת ניהול משימות דינאמית. הפלטפורמה פותחה במטרה לאפשר תכנון וניהול של פרויקטים בצורה אורגנית ויעילה, תוך שימוש בטכנולוגיות חדישות ומתקדמות.',
            imageUrl: '/images/trellax.png',
        },
        {
            id: 3,
            name: 'דפי נחיתה לעסקים',
            description: 'עמוד נחיתה מעוצב בקפידה, מאופיין בממשק משתמש אינטואיטיבי ועיצוב אישי. כולל תהליכים מובנים לאינטגרציה עם גוגל רשתות חבריות ומיילים, מהלכים המאפשרים למשתמשים להשאיר פרטי קשר בקלות וביעילות.',
            imageUrl: '/images/driving-school.png',
        }
    ];

    return (
        <div id="projects" className="bg-gray-100 py-10 pb-20">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center ">best seller UI Design</h2>
                <div className="grid grid-cols-1 place-content-center gap-5 sm:gap-40">
                    {projects.map(project => (
                        <ProjectPreview key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
