import { signupService } from "../../services/Auth/signupService";

// import {v4 as uuidv4} from "uuid"

export const signupAction = async ({ request }) => {
  const formData = await request.formData();
  const firstname = formData.get("firstname");
  const surname = formData.get("surname");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  // const uniqueId = uuidv4()
  try {
    if (
      !firstname ||
      !surname ||
      !phoneNumber ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      throw Error("All fields are required ");
    }
    if (password !== confirmPassword) {
      throw Error("Passwords do not match");
    }
    const data = await signupService(
      firstname,
      surname,
      email,
      phoneNumber,
      password
    );
    return { user: data };
  } catch (error) {
    // error.message = "TypeError: Failed to fetch"
    //   ? (error.message =
    //       "Network error: Unable to connect. Please check your internet connection and try again.")
    //   : error.message;
    return { error: error.message };
  }
};
