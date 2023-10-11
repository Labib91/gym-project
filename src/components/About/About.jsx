

const About = () => {
    return (
        <div className="carousel w-full h-80 mt-8 mb-8">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero min-h-96 bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse text-center">
                        <img src="https://i.ibb.co/VvJVwvS/pexels-andrea-piacquadio-3768913.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">About</h1>
                            <p className="py-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut  <br></br>assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className="hero min-h-96 bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse text-center">
                        <img src="https://i.ibb.co/Gsf05TT/pexels-bruno-bueno-2204179.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">About</h1>
                            <p className="py-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut  <br></br>assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <div className="hero min-h-96 bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse text-center">
                        <img src="https://i.ibb.co/vczK7fx/pexels-andrea-piacquadio-3768916.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">About</h1>
                            <p className="py-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut  <br></br>assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <div className="hero min-h-96 bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse text-center">
                        <img src="https://i.ibb.co/47r6jbS/pexels-andres-ayrton-6551098.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">About</h1>
                            <p className="py-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut  <br></br>assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default About;