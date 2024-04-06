'use client'
import { PostMedia } from "@/components/PostMedia";
import POSTS from "../../data/posts";
import { Post } from "@/components/Post";
import { useMemo, useState } from "react";
import { PostModal } from "@/components/Modal";

export default function Home() {
  const fakeFetch = () => {
    return POSTS
  }
  const showPosts = useMemo(() => fakeFetch(POSTS), [])

  const [postModalOpen, setPostModalOpen] = useState(false)
  return (
    <main className="flex min-h-screen flex-col items-center p-24">

      <PostModal open={postModalOpen} closeModal={() => setPostModalOpen(false)} />
      <h1 className=" text-4xl font-extrabold ">
        Welcome to the CouchSurfing Blog!
      </h1>

      <div className="mt-5 mb-1">
        <button onClick={() => setPostModalOpen(true)} className="border-2 border-primary rounded-lg pl-3 pr-3 font-semibold bg-primary text-white">Add new post +</button>
      </div>



      {
        showPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))
      }


    </main>
  );
}
