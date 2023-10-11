import { Link } from "react-router-dom";


const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
    }


    return (
        <div>
        <h1 className="text-xl my-10 text-center">Please Register</h1>
        <form onSubmit={handleRegister} className="card-body md:/4 lg:w-1/2 mx-auto">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name="Name" placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="email" placeholder="Photo URL" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
            </div>
        </form>
        <p className="text-center mt-4 mb-10">All rady have an account  <Link className="text-blue-600" to="/login">Login Now</Link></p>

    </div>

    );
};

export default Register;