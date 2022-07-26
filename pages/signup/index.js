import Head from "next/head";
import Link from "next/link";

function Signup() {
  return (
    <div className="d-flex justify-content-center">
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"text-center mt-3 mainWidth"}>
        <h1 className="h3 mb-3 fw-normal">Fill the form</h1>

        <div className="form-floating d-flex justify-content-center mt-3">
          <input
            type="Phonenumber"
            className={"form-control formField"}
            id="floatingInput"
            placeholder="number"
          />
          <label htmlFor="floatingInput">Phone number</label>
        </div>
        <div className="form-floating d-flex justify-content-center mt-3">
          <input
            type="username"
            className={"form-control formField"}
            id="floatingInput"
            placeholder="username"
          />
          <label htmlFor="floatingInput">username</label>
        </div>
        <div className="form-floating d-flex justify-content-center mt-3">
          <input
            type="email"
            className={"form-control formField"}
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">email</label>
        </div>
        <div className="form-floating d-flex justify-content-center mt-3">
          <input
            type="password"
            className={"form-control formField"}
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="w-40 btn signinBtn mt-3" type="submit">
          Sign Up
        </button>
        <h3 className="mt-4 flex h3 mb-3 fw-normal">
          Already Have an Account?
        </h3>
        {/* <a href="signin" className=" btn signinBtn" type="submit">
          Signin
        </a> */}
        <Link href="/">
          <a className={"plainAnchor btn my-2 signinBtn"}> Sign in</a>
        </Link>
        <div>
          <button className={"my-4 flex mx-3 fbBtn"}>
            <span className="text-xs text-blue-900 font-semibold">
              Login with Facebook
            </span>
          </button>
          <button className={"my-4 flex fbBtn googlebtn"}>
            <span className="text-xs text-blue-900 font-semibold">
              Login with Google
            </span>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Signup;
