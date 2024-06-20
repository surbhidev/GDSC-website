import BlogInfo from './Bloginfo.jsx';
import bgImage from "./assets/bgm.png";

export default function BlogPage() {
    return (
        <>
            <div className="bg-cover pt-24 " style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="border-8 border-blog-border max-w-3xl ml-24 p-4 ">
                    <h1 className="text-7xl font-bold mb-8 font-sans">Enjoy our Blogs On Medium</h1>
                    {BlogInfo.map((info, index) => (
                        <div key={index} className="mb-8"> {/* Add margin-bottom */}
                            <h2 className="text-2xl font-bold mb-2 font-sans">{info.question}</h2>
                            <p className="text-red-500 font-mono">{info.answer}</p>
                            <button className="bg-red-500 text-white px-6 py-3 rounded-md mt-4"> {/* Increase padding */}
                                <a href={info.link}>Read more</a>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
