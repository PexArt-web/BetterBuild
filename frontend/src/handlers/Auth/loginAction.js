import { loginService } from "../../services/Auth/loginService";
import { loginSchema } from "../Schemas/loginSchema";

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const firstname = formData.get("firstname");
  const surname = formData.get("surname");
  const phoneNumber = formData.get("phoneNumber");
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    loginSchema.parse({ email, password });
    const data = await loginService(firstname, surname, email, phoneNumber, password);

    return { user: data };
  } catch (error) {
    return {
      error:
        error.message ===
          "Error: getaddrinfo ENOTFOUND ghostconnect-shard-00-00.hjfmo.mongodb.net" ||
        error.message ===
          "Error: querySrv ETIMEOUT _mongodb._tcp.ghostconnect.hjfmo.mongodb.net"
          ? "Error connecting Please Retry"
          : error.message,
    };
  }
};
