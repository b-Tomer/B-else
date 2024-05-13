import Image from "next/image";

export default function ProjectPreview({ project }) {
    return (
        <div className="relative w-full sm:w-max min-w-[370px] mx-auto ">
            <div className="z-40 rounded p-4 sm:absolute sm:top-[100%] sm:left-[40%] sm:translate-x-[40%] sm:translate-y-[-50%] bg-slate-100 bg-opacity-90">
                <h3 className="text-lg font-bold py-2">{project.name}</h3>
                <p className="text-sm text-gray-600 w-[180] sm:w-[300px]">{project.description}</p>
            </div>
            <div className="overflow-hidden sm:w-[650px] w-full h-[300px] relative">
                <Image
                    src={project.imageUrl}
                    alt={project.name}
                    className="object-center object-cover"
                    fill />
            </div>
        </div>
    );
}
