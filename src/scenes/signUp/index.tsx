import GoogleIcon from "@/assets/googleIcon";
import Navbar from "@/components/navbar";
import happyFamily from "@/assets/happyFamily.png";
import {
  container,
  borderedInput,
  primaryBtn,
  secondaryBtn,
} from "@/styles/common";
import { Link } from "react-router-dom";
type Props = {};

const SignUp = (props: Props) => {
  return (
    <div>
      <Navbar />
      <main
        style={{ minHeight: "calc(100vh - 88px - 36px)" }}
        className="flex flex-col items-center justify-center bg-gray-100"
      >
        <section className={`${container} justify-center`}>
          <div className=" flex w-5/6 flex-row-reverse justify-around rounded-3xl bg-white py-12">
            <div className=" flex items-end justify-center pb-8">
              <img src={happyFamily} alt="" className="h-fit w-3/4" />
            </div>
            <div className=" w-[400px] min-w-[400px] rounded-xl bg-white ">
              <div className="flex flex-col items-stretch justify-center px-12 py-8">
                <h1 className="mb-4 text-center text-2xl font-bold text-black">
                  {"Create an account"}
                </h1>
                <p className="mb-8 w-5/6 self-center text-center font-normal text-black">
                  {"Hey, Enter your details to create an account"}
                </p>

                <form className="mb-4 flex flex-col gap-4" action="" id="sign-up-form">
                  <input
                    className={`${borderedInput} font-light text-black hover:border-gray-400`}
                    type="text"
                    name=""
                    id="su-email"
                    placeholder="example@email.com"
                  />
                  <input
                    className={`${borderedInput} font-light text-black hover:border-gray-400`}
                    type="password"
                    name=""
                    id="su-password"
                    placeholder="Password"
                  />
                  <input
                    className={`${borderedInput} font-light text-black hover:border-gray-400`}
                    type="password"
                    name=""
                    id="su-confirm-password"
                    placeholder="Confirm Password"
                  />

                  <input
                    className={`${primaryBtn} flex cursor-pointer justify-center text-center text-base font-semibold`}
                    type="submit"
                    value="Sign up"
                  />
                </form>

                <button
                  className={`${secondaryBtn} mb-4 flex items-center justify-center gap-2 font-normal`}
                >
                  <GoogleIcon width={24} />
                  Sign up with google
                </button>

                <p className="text-black">
                  Have an account?{" "}
                  <Link to="/signin" className="text-blue-500">
                    Sign in
                  </Link>
                </p>
              </div>

              {/* <div className="w-full bg-gray-200 rounded-b-xl px-4 py-1 text-xs">
            By clicking the button above, you agree to our terms of use and
            privacy policies
          </div> */}
            </div>
          </div>
        </section>
      </main>

      <div className="bg-gray-300">
        <div className="container mx-auto px-5 py-2">
          <p className="text-sm capitalize text-gray-700 xl:text-center">
            © 2023 All rights reserved{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
