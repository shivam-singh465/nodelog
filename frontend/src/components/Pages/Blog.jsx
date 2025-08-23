import React from 'react'

function Blog() {
    return (
        <div style={{
            clipPath:
                "polygon(7% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%)",
        }} className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] 
             
             bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30
             sm:left-[calc(50%-30rem)] sm:w-[72rem]  bg-red-400">

            {/* </div> */}
            {/* <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center"> */}
            <h1 className="text-5xl font-bold text-white">Beautiful Gradient Hero 🚀</h1>
        </div>

    )
}

export default Blog