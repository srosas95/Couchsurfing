"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { PostMedia } from "./PostMedia";
import USERS from "../../data/users,";


const defaultPost = {
    id: 0,
    userId: 1,
    content: {
        text: 'Hello this is my first post',
        mediaURL: ''

    },
    date: '4/5/2024'
}

export const Post = ({
    post = defaultPost,
    owner = null,
    ...props
}) => {
    const [user, setUser] = useState(null)
    const getUserData = () => {
        const user = USERS.find(p => p.id === post.userId);
        console.log(user)
        setUser(user)
    }

    useEffect(() => {
        if (owner === null) {

            getUserData()
        } else {
            setUser(owner)
        }
    }, [])

    return (
        <div className="flex flex-col pt-2 pr-2 pl-2 pb-1 min-w-80 max-w-80  min-h-7  rounded-lg border-solid border-2 border-sky-500 text-center mt-5 mb-5">
            {user !== null &&

                <div className="flex flex-row last:ml-auto mb-3">
                    <div className="border border-gray-300 overflow-hidden rounded-[50%] inline-block  w-[30px] h-[30px] ">
                        <Image src={user.profilePicURL}
                            width={30}
                            height={30}
                            alt="profile-pic"
                        />
                    </div>
                    <p className="mr-auto ml-auto">{user.name} {user.lastName} </p>
                    <p className="text-xs min-w-[70px]">{post.date}</p>
                </div>

            }
            <div>
                {post.content.text}
            </div>
            {
                post.content.mediaURL.length > 0 && <PostMedia mediaURL={post.content.mediaURL} />
            }
        </div>
    );
};
