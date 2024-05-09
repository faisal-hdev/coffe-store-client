import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
// import Swal from "sweetalert2";
import axios from "axios";
// import { data } from "autoprefixer";
// import axios from "axios";
// import { data } from "autoprefixer";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  // useEffect(() => {
  //   fetch("/")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  // useEffect(() => {
  //   axios.get("/").then((data) => {
  //     console.log(data.data);
  //   });
  // }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // new user has been created
        const createAt = result?.user?.metadata?.creationTime;
        const user = { email, createdAt: createAt };
        // using axios
        axios.post("http://localhost:5000/user", user).then((data) => {
          if (data.data.insertedId) {
            console.log("data added to the database");
          }
        });

        // using fetch
        // fetch("http://localhost:5000/user", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(user),
        // });
        // .then((res) => res.json())
        // .then((data) => {
        //   if (data.insertedId) {
        //     Swal.fire({
        //       title: "Good job!",
        //       text: "User added to the Database!",
        //       icon: "success",
        //     });
        //   }
        //   console.log(data);
        // });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left mb-6">
          <h1 className="text-5xl font-bold">Sign Up Now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
