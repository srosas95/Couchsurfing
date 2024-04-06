"use client"
import { useEffect, useMemo, useState } from "react";


import { UserProfile } from "@/components/UserProfile";
import { Loading } from "@/components/Loading";
import USERS from "../../../../data/users,";
import POSTS from "../../../../data/posts";
import { Post } from "@/components/Post";
import { PostModal } from "@/components/Modal";

export default function Profile({ params }) {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [editTemp, setEditTemp] = useState({})
    const [postModalOpen, setPostModalOpen] = useState(false)
    const fakeFetch = () => {
        const userPosts = POSTS.filter(post => {
            console.log(post)
            console.log(params.userId)
            return (post.userId == params.userId)
        });
        console.log(userPosts)
        return userPosts
    }
    const showPosts = useMemo(() => fakeFetch(), [])


    useEffect(() => {
        if (params.userId == 0)
            setIsLoggedIn(true)

        setTimeout(() => {
            setUser(USERS[params.userId])
            setLoading(false)
        }, 800)
    }, [])

    const handleInputChange = (event) => {
        console.log(event)
        const { name, value } = event.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const enableEdit = () => {
        setIsEditing(true)
        setEditTemp({ ...user })
    }
    const cancelEdit = () => {
        setIsEditing(false)
        setUser({ ...editTemp })
    }
    const saveEdit = () => {
        setIsEditing(false)

    }




    return (
        <main className="flex min-h-screen flex-col items-center p-24 pt-5">
            <PostModal open={postModalOpen} closeModal={() => setPostModalOpen(false)} />

            {
                loading ?
                    <Loading />
                    :
                    <>
                        <UserProfile user={user} />
                        <div className="rounded-md h-4/5 w-4/5 bg-neutral-200 mb-10">
                            <div id='userDataContainer' className="">
                                {
                                    !isEditing
                                        && user ?
                                        <div className=" grid grid-cols ">
                                            <div className="flex flex-col mb-3">
                                                <h2 className=' w-52 mr-auto ml-auto  text-4xl font-extrabold mb-5'>About Me</h2>
                                                <p>{user.profileDescription}</p>
                                            </div>

                                            {
                                                isLoggedIn &&
                                                <div className='w-full text-end'>
                                                    <button onClick={enableEdit} className=" bg-primary  w-24 font-medium rounded-lg text-sm h-10"> Edit</button>
                                                </div>
                                            }
                                        </div>
                                        :
                                        <div className=" grid grid-cols ">
                                            <div className="flex flex-row mb-2">
                                                <h2 className='w-24 font-semibold'>Name:</h2>
                                                <input type="text" name='name'
                                                    value={user.name}
                                                    onChange={(event) => handleInputChange(event)}
                                                    className="border border-primary rounded-lg pl-2"
                                                    maxLength="10"
                                                />
                                            </div>
                                            <div className="flex flex-row mb-2">
                                                <h2 className='w-24 font-semibold' >Last Name: </h2>
                                                <input type="text" name='lastName'
                                                    onChange={(event) => handleInputChange(event)}
                                                    value={user.lastName}
                                                    className="border border-primary rounded-lg pl-2"
                                                    maxLength="10"
                                                />
                                            </div>
                                            <div className="flex flex-col mb-2">
                                                <h2 className='w-24' >Description: </h2>
                                                <textarea id="message" rows="4" name='profileDescription' onChange={handleInputChange} value={user.profileDescription} className="block p-2.5 w-full text-darkBlue  resize-none text-sm  rounded-lg border border-primary" placeholder="Write your thoughts here...">

                                                </textarea>


                                            </div>
                                            <div className=" grid grid-cols-2 mt-4">
                                                <button onClick={cancelEdit} className=" bg-error  text-white  w-24  font-medium rounded-lg text-sm h-10 mr-auto ml-auto"> Cancel</button>
                                                <button onClick={saveEdit} className=" bg-primary w-24 font-medium rounded-lg text-sm h-10  mr-auto ml-auto"> Save</button>
                                            </div>


                                        </div>
                                }
                            </div>
                        </div>
                        {
                            showPosts.length > 0 ? <>
                                <h1 className=" text-4xl font-extrabold ">
                                    Checkout my posts
                                </h1>
                                {
                                    showPosts.map((post) => (
                                        <Post post={post} />
                                    ))
                                } </> :
                                <>
                                    <h1 className=" text-2xl font-extrabold text-center">
                                        Oh oh you haven't posted anything yet... <br></br> give it a try
                                    </h1>
                                    <div className="mt-5 mb-1">
                                        <button onClick={() => setPostModalOpen(true)} className="border-2 border-primary rounded-lg pl-3 pr-3 font-semibold bg-primary text-white">Add new post +</button>
                                    </div>
                                </>
                        }


                    </>
            }

        </main>
    );
}
