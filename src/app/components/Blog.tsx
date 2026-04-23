import React from 'react';
import BlogCard from './BlogCard';
export default function Blog() {

    const posts = [
    {
      id: 1,
      title: "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem lit sed risus amet lacinia. Aliquam in elementum tellus...",
      image: "/vr.png",
      variant: "featured" as const
    },
    {
      id: 2,
      title: "Morem ipsum dolor sit amet, ing elit...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, entum tellus...",
      image: "/vr.png",
      variant: "standard" as const
    },
    {
      id: 3,
      title: "Morem ipsum dolor sit amet, ing elit...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, entum tellus...",
      image: "/vr.png",
      variant: "standard" as const
    }
  ];
    return (
    <section id="blog" className="py-20 px-6 sm:px-12 lg:px-24 bg-[#11072B]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Featured Post - Left Column */}
          <div className="lg:col-span-5">
            <BlogCard 
              title={posts[0].title}
              description={posts[0].description}
              image={posts[0].image}
              variant="featured"
            />
          </div>
          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Header Section */}
            <div className="space-y-6">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
                <span className="text-white">Metaverse </span>
                <span className="text-purple-500">Blog</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fring.
              </p>
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all w-fit uppercase text-sm tracking-wider cursor-pointer">
                See all post
                <span className="text-xl">→</span>
              </button>
            </div>
            {/* Smaller Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {posts.slice(1).map((post) => (
                <div key={post.id}>
                  <BlogCard 
                    title={post.title}
                    description={post.description}
                    image={post.image}
                    variant="standard"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
    
}