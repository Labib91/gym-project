

const Contact = () => {
    return (

        <div>
            <div className="hero h-60 mt-10 mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/f8TnYtY/pexels-leon-ardho-1552252.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
                        <p className="mb-5">We value your feedback and are here to assist you. Please feel free to reach out to us through any of the following channels:</p>

                    </div>
                </div>
            </div>

            <div className="hero h-60 mt-10 mb-10 flex justify-around " style={{ backgroundImage: 'url(https://i.ibb.co/f8TnYtY/pexels-leon-ardho-1552252.jpg)' }}>
                <div>
                    <h1 className="mb-5 text-white">Name: Ajax </h1>
                    <p className="mb-5 text-white">Email: support@yourwebsite.com</p>
                    <p className="mb-5 text-white">Address:Uk, George,123/34 </p>

                </div>
                <div>
                    <img className="h-40 w-40 rounded-full " src="https://i.ibb.co/1nBLGgT/pexels-andrew-personal-training-733500.jpg" alt="" />
                </div>

            </div>

        </div>



    );
};

export default Contact;