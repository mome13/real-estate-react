import GoogleIcon from "@/assets/googleIcon";
import Navbar from "@/components/navbar";
import happyFamily from "@/assets/happyFamily-2.png";
import {
  container,
  borderedInput,
  primaryBtn,
  secondaryBtn,
} from "@/styles/common";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "@/hooks/useSignIn";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

type Props = {};
interface RegisterFormData {
  email: string;
  password: string;
}

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(6).required(),
});

const SignIn = (props: Props) => {
  const navigate = useNavigate();
  const { isLoading, mutate } = useSignIn<RegisterFormData>((data) => {
    console.log("signin data:", data?.data);
    navigate(-1);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: "onChange",
    resolver: joiResolver(schema),
  });

  if (isLoading) {
    return <h2>Loading</h2>;
  }

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
                  {"Welcome"}
                </h1>
                <p className="mb-8 w-5/6 self-center text-center font-normal text-black">
                  {"Hey, Enter your details to sign into your account"}
                </p>

                <form
                  onSubmit={handleSubmit((register: RegisterFormData) =>
                    mutate(register)
                  )}
                  className="mb-4 flex flex-col gap-4"
                  action=""
                  id="sign-up-form"
                >
                  <input
                    className={`${borderedInput} font-light text-black hover:border-gray-400`}
                    type="text"
                    {...register("email", {
                      required: "Email is required.",
                    })}
                    id="su-email"
                    placeholder="example@email.com"
                  />
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => (
                      <p className="-mt-2 ml-1 text-xs font-normal text-red-500">
                        {message}
                      </p>
                    )}
                  />
                  <input
                    className={`${borderedInput} font-light text-black hover:border-gray-400`}
                    type="password"
                    {...register("password", {
                      minLength: 6,
                      required: true,
                    })}
                    id="su-password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    errors={errors}
                    name="password"
                    render={({ message }) => (
                      <p className="-mt-2 ml-1 text-xs font-normal text-red-500">
                        {message}
                      </p>
                    )}
                  />

                  <input
                    className={`${primaryBtn} flex cursor-pointer justify-center text-center text-base font-semibold`}
                    type="submit"
                    value="Sign in"
                  />
                </form>

                <button
                  className={`${secondaryBtn} mb-4 flex items-center justify-center gap-2 font-normal`}
                >
                  <GoogleIcon width={24} />
                  Sign in with google
                </button>

                <p className="text-black">
                  Need an account?{" "}
                  <Link to="/signup" className="text-blue-500">
                    Sign up
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

export default SignIn;
