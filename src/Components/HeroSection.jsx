export default function HeroSection() {
    const heroBackgroundStyle = {
        backgroundImage: `url('https://images.unsplash.com/photo-1667400104789-f50a4cb393cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <div style={heroBackgroundStyle} className="bg-gray-200 flex flex-col sm:justify-end text-center py-12 h-[70vh] font-ibm">
            <h1 className="text-shadow-md text-2xl sm:text-4xl text-main-orange sm:w-max mx-auto">Redefining the Web Experience</h1>
            <h2 className="text-main-background drop-shadow-xl mx-auto">Join us to be something else</h2>
        </div>
    );
};
