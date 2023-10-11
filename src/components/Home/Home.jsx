import { useLoaderData } from "react-router-dom";




const Home = () => {

    const courses = useLoaderData();
    console.log(courses);



    return (
        <div>
            <div className="slider">
                <div className="carousel w-full relative ">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://i.ibb.co/WBNNTvc/pexels-leon-ardho-1552242.jpg" className="w-full h-fit rounded" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://i.ibb.co/LQDpRbK/training-828726-1280.jpg" className="w-full h-fit rounded" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://i.ibb.co/jDHW40F/man-1282232-1280.jpg" className="w-full h-fit rounded" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="https://i.ibb.co/djhCfVh/woman-2250970-1280.jpg" className="w-full h-fit rounded" />
                    </div>
                </div>
                <div className="text-center absolute top-96 bottom-0 left-0 right-0 gap-8 px-2 hidden lg:flex lg:flex-col items-center">
                    <h1 className="text-4xl text-white ">Train Hard</h1>
                    <p className="text-yellow-400 text-1xl">If you want something you have never had, you must be willing to do something you have never done.-Thomas Jefferson</p>
                    <button className="btn btn-outline text-white">Read More</button>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
            <div>
                <h1 className="text-4xl text-center mt-4 mb-8 uppercase">Class we provide</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 mb-8">
            {courses?.map(course => (
                    <div key={course.id} className="card w-60 bg-base-100 shadow-xl">
                        <figure className="px-2 pt-2">
                            <img src={course.image} alt={course.title} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{course.name}</h2>
                            <p>{course.shortDescription}</p>
                            <p> Price : {course.price} Tk.</p>
                            <div className="card-actions">
                                
                                <button className="btn bg-yellow-400">Join Now</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>




    );
};

export default Home;