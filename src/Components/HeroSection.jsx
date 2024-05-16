export default function HeroSection() {
    const heroBackgroundStyle = {
        backgroundImage: `url('https://images.unsplash.com/photo-1667400104789-f50a4cb393cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <div style={heroBackgroundStyle} className="bg-gray-200 flex items-end text-center py-12 h-[70vh]">
            <h1 className="text-3xl font-bold mb-3 text-main-background  w-max p-2 mx-auto">ההבדל בין פרויקט טוב לפרויקט מצוין</h1>
            {/* Include a search form here */}
        </div>
    );
};
