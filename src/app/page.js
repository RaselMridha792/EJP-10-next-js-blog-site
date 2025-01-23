import Link from "next/link";

export default async function Home() {

  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-5 mt-20">
        <h1 className="text-4xl font-bold capitalize text-center py-5 mt-10">Our Popular Blogs</h1>
        <hr />
        <div className="mt-5 grid grid-cols-2 gap-5 my-20">
          {
            posts.map(post => 
            <div key={post.id} className="border rounded-lg hover:shadow-md p-5 text-xl font-bold hover:text-blue-600 duration-300">
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </div>
            )
          }
        </div>
      </section>
    </>
  );
}
