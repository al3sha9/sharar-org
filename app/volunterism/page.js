"use client"
import SocialMediaShare from "@/components/share";
import { useState } from "react";



const data = {
    author: {
        name: "Anique Ahmed",
        role: "Team Sharar",
        date: "Feb. 8, 9023",
        imageSrc: "https://shararpakistan.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faneeq.468bb149.png&w=1080&q=75",
        wall: "https://images.hdqwalls.com/wallpapers/student-study-stress-img.jpg",
    },
    title: "The Power of Volunteerism: Creating Positive Change Together",
    leadText: "Volunteerism is a remarkable example of collective goodwill and selflessness. It involves individuals dedicating their time, skills, and resources to causes they are passionate about, without expecting any material gain. This practice is the foundation of compassionate societies all over the world. In this blog, we will explore the profound impact of volunteerism on the volunteers themselves, the recipients of their generosity, and the communities they serve. It is a force that transcends borders, uniting people in a shared mission to create positive change.",
    content: [
        "Volunteerism is the backbone of resilient communities. When people come together with a common purpose, they establish connections and support systems that are invaluable in times of need. From disaster relief efforts to local initiatives, volunteers are the unsung heroes that hold communities together. Their dedication and selflessness provide the groundwork for strong, close-knit societies that remain resilient in the face of adversity. It is through their unwavering commitment that communities can weather storms and emerge stronger, united by a shared sense of purpose.",
        "Engaging in volunteer work is a transformative experience for individuals. It presents opportunities to learn new skills, gain diverse perspectives, and develop a deeper understanding of societal issues. This not only enriches one’s professional profile but also cultivates a more empathetic and socially aware individual. Through volunteering, people step outside their comfort zones, interacting with a diverse range of people, backgrounds, and experiences. This firsthand interaction fosters empathy and understanding, breaking down societal barriers and building bridges of compassion.",
        "Volunteerism is a catalyst for addressing social inequities. Volunteers advocate for marginalized communities, champion causes, and work towards a more just and inclusive society. Their tireless efforts contribute to dismantling systemic barriers and creating opportunities for those who have been historically marginalized. Additionally, research has shown that volunteering has positive impacts on mental and emotional well-being. The act of giving back, along with the sense of purpose and accomplishment it provides, significantly increases overall happiness and satisfaction, highlighting the profound personal benefits of volunteerism.",

        "<b>Conclusion</b>",
        "Volunteerism is a force that extends beyond individual actions, creating a positive ripple effect that resonates far beyond the initial act of kindness. It empowers individuals, strengthens communities, and paves the way for a more compassionate and inclusive society. As we reflect on the immeasurable impact of volunteerism, let us continue to celebrate and support those who dedicate their time and energy to making the world a better place for all. Remember, a single act of kindness, no matter how small, can create a ripple effect that touches countless lives. Together, through volunteerism, we have the power to shape a brighter, more inclusive future for our global community.",
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
