import { useEffect } from "react";
import SharedButton from "@/Shared/component/SharedButton";
import SharedInput from "@/Shared/component/SharedInput";
import {
  Form,
  NavLink,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
const Signup = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  const actionData = useActionData();
  console.log(actionData, "action error");
  useEffect(() => {
    if (actionData && actionData?.user) {
      dispatch({ type: "LOGIN", payload: actionData.user });
      navigate("/login", { replace: true });
    }
  }, [actionData, dispatch, navigate]);
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-900"
      style={{
        backgroundImage:
          "url('https://www.betterbuildhub.com/storage/banner/Asset%205_1.png')",
      }}
    >
      <div className="">
        <img
          src="https://www.betterbuildhub.com/storage/logo/bb_logo_light_white.svg"
          alt="BetterBuild Logo"
          className="w-48 h-auto mx-auto mb-5 mt-5"
        />

        <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Create a Vendor Account
          </h2>

          <Form method="post">
            <div className="mb-4  flex  gap-4">
              <div>
                <label
                  className="block text-gray-600 mb-2"
                  htmlFor="first name"
                >
                  Your First name*
                </label>
                <SharedInput
                  type={"text"}
                  id={"firstname"}
                  name={"firstname"}
                  className={
                    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }
                  placeholder={""}
                />
              </div>
              {/*  */}
              <div>
                <label className="block text-gray-600 mb-2" htmlFor="surname">
                  Your Surname*
                </label>
                <SharedInput
                  type={"text"}
                  id={"surname"}
                  name={"surname"}
                  className={
                    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }
                  placeholder={""}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email Address*
              </label>
              <SharedInput
                type={"email"}
                id={"email"}
                name={"email"}
                className={
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                }
                placeholder={""}
              />
            </div>

            <div className="mb-6">
              <div className="mb-6">
                <label className="block text-gray-600 mb-2" htmlFor="password">
                  Password*
                </label>
                <SharedInput
                  type={"password"}
                  id={"password"}
                  name={"password"}
                  className={
                    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }
                  placeholder={""}
                />
              </div>
              {/*  */}

              <div>
                <label className="block text-gray-600 mb-2" htmlFor="password">
                  Confirm Password*
                </label>
                <SharedInput
                  type={"password"}
                  id={"password"}
                  name={"password"}
                  className={
                    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }
                  placeholder={""}
                />
              </div>
            </div>
            <SharedButton
              type={"submit"}
              className={
                "w-full py-3 bg-yellow-500 text-2md text-black rounded-lg font-semibold hover:bg-black transition duration-200 hover:text-white"
              }
              // disabled={navigation.state === "submitting"}
              disabled={true}
              label={
                navigation.state === "submitting"
                  ? "Please wait..."
                  : "Register"
              }
            />

            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="text-sm text-gray-500">or</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            <SharedButton
              type={"button"}
              className={
                "w-full py-3 bg-gray-300 text-1xl text-gray-700 rounded-lg font-semibold  transition duration-200 hover:bg-gray-300 "
              }
              disabled={navigation.state === "submitting"}
              label={
                navigation.state === "submitting"
                  ? "Please wait..."
                  : "Continue with Google"
              }
            />
            {actionData?.error && (
              <p style={{ color: "red" }} className="text-center">
                {actionData.error === "Error: read ECONNRESET"
                  ? "Please check your network connection and try again"
                  : actionData.error}
              </p>
            )}
          </Form>

          <div className="mt-6 text-gray-950  text-md text-start space-y-3">
            <p className="font-medium">Sign up today and you’ll be able to:</p>
            <ul className="text-left max-w-md mx-auto space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-500 text-lg">✔️</span>

                <span>Speed your way through checkout</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 text-lg">✔️</span>

                <span>Track your orders easily</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 text-lg">✔️</span>

                <span>Keep a record of all your purchases</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
