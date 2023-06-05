import GoogleIcon from "@/assets/googleIcon";
import Navbar from "@/components/navbar";
import happyFamily from "@/assets/happyFamily.png";
import {
  container,
  borderedInput,
  primaryBtn,
  secondaryBtn,
} from "@/styles/common";
import { Link, useNavigate } from "react-router-dom";
import { useSignUp } from "@/hooks/useSignUp";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
type Props = {};
interface SignUpFormData {
  email: string;
  password: string;
  passwordConfirmation: string;
}

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(6).required(),
  passwordConfirmation: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "string.base": `"a" should be a type of 'text'`,
      "string.empty": `"a" cannot be an empty field`,
      "string.min": `"a" should have a minimum length of {#limit}`,
      "any.required": `"a" is a required field`,
    }),
});

const SignUp = (props: Props) => {
  const navigate = useNavigate();
  const { isLoading, mutate } = useSignUp<SignUpFormData>((data) => {
    console.log("signUp data:", data?.data);
    navigate(-1);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
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
                  {"Create an account"}
                </h1>
                <p className="mb-8 w-5/6 self-center text-center font-normal text-black">
                  {"Hey, Enter your details to create an account"}
                </p>

                <form
                  className="mb-4 flex flex-col gap-4"
                  action=""
                  id="sign-up-form"
                  onSubmit={handleSubmit((register: SignUpFormData) =>
                    mutate(register)
                  )}
                >
                  <input
                    className={`${borderedInput} font-light text-black hover:border-gray-400`}
                    type="email"
                    id="su-email"
                    placeholder="example@email.com"
                    {...register("email", {
                      required: "Email is required.",
                    })}
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
                    className={`${borderedInput} font-light text-black hover:border-gray-400`}
                    type="password"
                    {...register("passwordConfirmation", {
                      minLength: 6,
                      required: true,
                    })}
                    id="su-confirm-password"
                    placeholder="Confirm Password"
                  />
                  <ErrorMessage
                    errors={errors}
                    name="passwordConfirmation"
                    render={({ message }) => (
                      <p className="-mt-2 ml-1 text-xs font-normal text-red-500">
                        {message}
                      </p>
                    )}
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
