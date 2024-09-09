
const SkeletonLoader  = () => {
    return (

        <div className="my-8 mx-4 md:mx-8 lg:mx-auto p-6 bg-white rounded w-full max-w-6xl">
            <div className="animate-pulse">
                <div className="h-8 bg-gray-300 rounded w-1/2 mb-4"></div>
                <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
                <div className="h-10 bg-gray-300 rounded w-full mb-4"></div>
                <div className="h-40 bg-gray-300 rounded w-full mb-4"></div>
            </div>
        </div>

    )
}

export default SkeletonLoader 