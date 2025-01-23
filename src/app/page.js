import Link from "next/link";

export default async function Home() {

  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const allPosts = await data.json()
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-5 mt-20">
        <h1 className="text-4xl font-bold capitalize text-center py-5 mt-10">Our Popular Blogs</h1>
        <hr />
        <div className="mt-5 grid grid-cols-2 gap-5 my-20">
          {
            allPosts.map(post => 
            <div key={post.id} className="border rounded-lg hover:shadow-md p-5 font-bold duration-300">
              <h1 className=" text-xl pb-3">{post.title}</h1>
              <Link className="hover:text-blue-600 px-3 py-2 border rounded-lg text-sm duration-300 hover:border-blue-600" href={`/blog/${post.id}`}>View Details</Link>
            </div>
            )
          }
        </div>
      </section>
    </>
  );
}
