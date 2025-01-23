import React from "react";

const page = async ({params}) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const details = await data.json();
  return (
    <>
      <section className="my-32 max-w-screen-2xl mx-auto px-5">
        <div className="border p-5">
          <h1 className="text-2xl font-bold pb-3">Title: {details.title}</h1>
          <p><span className="font-bold">Details:</span> {details.body}</p>

        </div>
      </section>
    </>
  );
};

export default page;
