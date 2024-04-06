export const PostModal = ({ open = true, closeModal = () => { console.log('close') } }) => {

    if (!open)
        return

    return (

        <div className="w-screen h-screen absolute top-0  bg-opacity-80 bg-gray ">
            <div className="p-6 rounded-lg h-64  w-72 absolute m-auto opacity-100  bg-white top-[calc(50%-8rem)] right-[calc(50%-9rem)]">
                <div id='modalContainer' className="relative">

                </div>
                <button className="absolute end-[20px]">X</button>
                <h1 className="  font-medium">Share your post</h1>
                <textarea id="post" rows="4" name='profileDescription' className="block p-2.5 w-full text-darkBlue  resize-none text-sm  rounded-lg border border-primary mt-7" placeholder="Write your thoughts here...">

                </textarea>
                <div className=" grid grid-cols-2 mt-6">
                    <button onClick={closeModal} className=" bg-error  text-white  w-24  font-medium rounded-lg text-sm h-10 mr-auto ml-auto"> Cancel</button>
                    <button onClick={closeModal} className=" bg-primary w-24 font-medium rounded-lg text-sm h-10  mr-auto ml-auto"> Save</button>
                </div>
            </div>
        </div>


    );
}



