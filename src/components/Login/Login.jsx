import { Link } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";

const Login = () => {

    const auth = getAuth(app);
    console.log(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth, provider)
        .then(result =>{
            const user =result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log('error', error.message)
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log({ username: form.get('username'), password: form.get('password') })
    }




    return (
        <div>
            <h1 className="text-xl my-10 text-center">Please Login</h1>
            <form onSubmit={handleLogin} className="card-body md:/4 lg:w-1/2 mx-auto">
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
                    <button onClick={handleGoogleSignIn} className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center mt-4 mb-10">Do not have an account  <Link className="text-blue-600" to="/register">Register</Link></p>

        </div>


    );
};

export default Login;