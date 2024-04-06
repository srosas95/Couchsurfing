"use client"
import React from "react";
import Image from "next/image";
import { useState } from "react";

const defaultUser = {
    id: 'N/A',
    name: 'Default',
    lastName: 'Default',
    profilePicURL: '/userPics/default.png',
    profileDescription: 'N/A',
    amountFriends: 0,
    amountPosts: 0
}

export const UserProfile = ({
    user = defaultUser,
    isVisitor = false,
    ...props
}) => {

    return (
        <div className=" overflow-auto  flex flex-col p-8 min-w-80 min-h-80  max-w-80 max-h-80  justify-between rounded-lg border-solid border-2 border-primary bo text-center mt-8 mb-8">

            <div className="text-right text-sm">{user.status}</div>

            <div className=" border-gray-300 p-2 overflow-hidden rounded-[50%] inline-block mr-auto ml-auto border-2 " style={{ width: '100px', height: '100px' }}>
                <Image
                    src={user.profilePicURL}
                    width={100}
                    height={100}
                    alt="profile-pic"
                />
            </div>
            <p className=" text-4xl  border-b-2 pb-2">{user.name + ' ' + user.lastName}</p>
            <div className=" grid grid-cols-2 ">
                <div className="text-center border-r-2" >
                    Posts{' '}
                    <b>{user.amountPosts}</b>
                </div>
                <div className="text-center" >
                    Friends{' '}
                    <b>{user.friends.length}</b>
                </div>
            </div>

            {
                isVisitor &&
                <div className=" grid grid-cols-2 ">
                    <div className="text-center" >
                        <button className=" bg-primary w-5/6 font-medium rounded-lg text-sm h-10"> Message</button>
                    </div>
                    <div  >
                        <button className="text-center bg-primary w-5/6 h-10 font-medium rounded-lg text-sm px">Send Friend Request</button>
                    </div>
                </div>
            }


        </div>
    );
};
