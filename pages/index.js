import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import { getSampleData } from "../store/actions/sampleAction";
// import { useEffect } from "react";
export default function Home() {
  // const dispatch = useDispatch();
  // const sampleListData = useSelector((state) => state.sampleData);
  // const { sample } = sampleListData;
  // useEffect(() => {
  //   dispatch(getSampleData());
  // }, [dispatch]);
  return (
    <div className={styles.container + " d-flex justify-content-center"}>
      <Head>
        <title>Sign in</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={["text-center mt-5 mainWidth"]}>
        <div className="mt-4 flex border border-gray-1200 text-center pd-10">
          <form>
            <h1 className="h3 mb-3 fw-normal mt-4 flex">Welcome</h1>
            <div className="form-floating d-flex justify-content-center">
              <input
                type="email"
                className={"form-control formField"}
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">
                Phone number,username or email
              </label>
            </div>
            <div className="form-floating my-3 d-flex justify-content-center">
              <input
                type="password"
                className={"form-control formField"}
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="mt-2">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <div>
              {/* <a
                href="TLI"
                className="text-xs text-blue-900 my-2 flex cursor-pointer "
              >
               
              </a> */}
              <Link href="/forgotPassword">
                <a className={"my-2 "}> Forgot Password?</a>
              </Link>
            </div>
            <div className="mt-2">
              <button className={"btn signinBtn"} type="submit">
                Sign in
              </button>
            </div>
          </form>

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
        <div className="mt-4 flex background-white w-80 border border-gray-300 text-center padding-4">
          <div className="text-sm">Don't have an Account?</div>
          {/* <button className={"btn my-2 " + styles.signinBtn}> */}
          <Link href="/signup">
            <a className={"plainAnchor btn my-2 signinBtn"}> Sign Up</a>
          </Link>
          {/* </button> */}
        </div>
      </main>
    </div>
  );
}
