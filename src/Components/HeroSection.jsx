export default function HeroSection() {
    const heroBackgroundStyle = {
        backgroundImage: `url('https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <div style={heroBackgroundStyle} className="bg-gray-200 text-center py-12 h-[60vh]">
            <h1 className="text-3xl font-bold mb-3 text-white bg-slate-400 bg-opacity-50 w-max p-2 mx-auto">ההבדל בין פרויקט טוב לפרויקט מצוין</h1>
            {/* Include a search form here */}
        </div>
    );
};
