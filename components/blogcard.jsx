import Link from "next/link";
import IMG from '../public/gp01.jpg'
import Image from "next/image";


const blogData = [
  {
    id: 1,
    category: 'Articles',
    date: '1 March 2023',
    title: 'Team Sharar BLOG IS STARTING SOON',
    imageSrc: IMG,
    content: 'Climate change is no longer a distant threat; it is an alarming reality that affects every....',
    link: '/blog1', // Add the link for this blog post
  },
  {
    id: 1,
    category: 'Articles',
    date: '1 March 2023',
    title: 'Team Sharar BLOG IS STARTING SOON',
    imageSrc: IMG,
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, excepturi.....',
    link: '/blog1', // Add the link for this blog post
  },
  
  {
    id: 1,
    category: 'Articles',
    date: '1 March 2023',
    title: 'Team Sharar BLOG IS STARTING SOON',
    imageSrc: IMG,
    content: 'Climate change is no longer a distant threat; it is an alarming reality that affects every....',
    link: '/blog1', // Add the link for this blog post
  },
];

const Blog = () => {
  return (
    <div className="bg-[#135858] my-16">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {/* Title */}
        <div className="mx-auto py-8 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px text-3xl font-semibold font-pop tracking-wider text-teal-100 uppercase rounded bg-teal-accent-400">
            Read our New Blogs
          </p>
        </div>
        {/* Blog Posts */}
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {blogData.map((post) => (
            <div
              key={post.id}
              className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
            >
              <Image
                src={post.imageSrc}
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <Link
                    href={post.link}
                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                    aria-label="Category"
                    title={post.category}
                  >
                    {post.category}
                  </Link>
                  <span className="text-gray-600">— {post.date}</span>
                </p>
                <Link
                  href={post.link} // Use the link from the blogData
                  aria-label="Category"
                  title={post.title}
                  className="inline-block leading-6 mb-3 text-2xl font-bold  transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  {post.title}
                </Link>
                <p className="mb-2 text-gray-700">{post.content}</p>
                <Link
                  href={post.link} // Use the link from the blogData
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
