import { useLoaderData } from "react-router-dom";

const Class = () => {
    const courses = useLoaderData();
    console.log(courses);

    return (
        <div>
            
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

export default Class;