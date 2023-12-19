"use client"
import SocialMediaShare from "@/components/share";
import { useState } from "react";


const data = {
    author: {
        name: "Farzeen",
        role: "Team Sharar",
        date: "Feb. 8, 9023",
        imageSrc: "https://shararpakistan.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffarzeen.0f7bfa63.png&w=1080&q=75",
        wall: "https://images.hdqwalls.com/wallpapers/student-study-stress-img.jpg",
    },
    title: "The Crucial Role of Co-Curricular Profiles for Students",
    leadText: "In the dynamic landscape of education, academic excellence alone is no longer the sole benchmark for a student's success. A robust co-curricular profile is emerging as a vital component, offering students a holistic development that extends beyond the confines of textbooks.",
    content: [
        "While grades showcase intellectual prowess, co-curricular activities enrich a student's life with essential skills such as leadership, teamwork, and time management. Participation in clubs, sports, and cultural events fosters a diverse skill set that is invaluable in the real world.",
        "Moreover, colleges and employers increasingly recognize the significance of a well-rounded individual. A compelling co-curricular profile not only distinguishes a student but also reflects their passion, commitment, and the ability to balance multiple responsibilities.",
        "Participating in diverse activities cultivates a sense of identity and self-discovery, allowing students to explore interests beyond the academic sphere. This exploration not only aids personal growth but also aids in making informed career choices.",
        "In an era where adaptability is key, co-curricular engagement equips students with the flexibility to face challenges head-on. Be it public speaking, organizing events, or managing finances for a club – these experiences build resilience and confidence.",
        "<b>Conclusion</b>",
        "In conclusion, the importance of a co-curricular profile lies in its power to mold individuals into well-rounded, adaptable, and socially aware citizens. As the educational landscape evolves, students equipped with a rich tapestry of experiences are better positioned to navigate the complexities of the future with finesse.",
    ],
};

export default function BlogFirst() {
    const backgroundImageStyle = {
        backgroundImage: `url(${data.author.wall})`,
    };

    const [copySuccess, setCopySuccess] = useState(false);

    const copyToClipboard = () => {
        const urlToCopy = window.location.href;

        // Use the Clipboard API to copy the URL to the clipboard
        navigator.clipboard.writeText(urlToCopy)
            .then(() => {
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 2000); // Reset success message after 2 seconds
            })
            .catch((error) => {
                console.error('Copy failed!', error);
            });
    };

    return (
        <>
            <div
                className="w-full h-[40vh] bg-cover bg-top"
                style={backgroundImageStyle}
            ></div>
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 ">
                                    <img
                                        className="mr-4 w-16 h-16 rounded-full"
                                        src={data.author.imageSrc}
                                        alt="Ali Shan"
                                    />
                                    <div>
                                        <a
                                            href="#"
                                            rel="author"
                                            className="text-xl font-bold text-gray-900 "
                                        >
                                            {data.author.name}
                                        </a>
                                        <p className="text-base text-gray-500 -400">
                                            {data.author.role}
                                        </p>
                                        <p className="text-base text-gray-500 -400">
                                            <time dateTime="2023-02-08" title="February 8th, 2023">
                                                {data.author.date}
                                            </time>
                                        </p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">
                                {data.title}
                            </h1>
                        </header>
                        <SocialMediaShare />
                        <p className="lead py-2">{data.leadText}</p>
                        {data.content.map((paragraph, index) => (
                            <p className="py-2" key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                        ))}
                    </article>
                </div>
            </main>


        </>
    );
}
