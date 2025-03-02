import axios from 'axios';
import {appEnvConfig} from '../../utils/Config';
interface RegisterPayload {
  email: string;
  password: string;
  name: string;
  phone_number: string;
}
interface VerifyOtpPayload {
  otp: string | any;
}

interface LoginPayload {
  email: string;
  password: string;
}
class AuthService {
  private BATH_URL = appEnvConfig.BASE_URL;
  RegisterService = async (payload: RegisterPayload) => {
    console.log('====================================');
    console.log('payload::', this.BATH_URL);
    console.log('====================================');
    return await axios.post(`${this.BATH_URL}auth/register`, payload);
  };

  VerifyOtpService = async (payload: VerifyOtpPayload) => {
    console.log('====================================');
    console.log('payload::', payload);
    console.log('====================================');
    return await axios
      .post(`${this.BATH_URL}verify`, payload)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  };

  LoginService = async (payload: LoginPayload) => {
    console.log('====================================');
    console.log('payload::', this.BATH_URL);
    console.log('====================================');
    return axios.post(`${this.BATH_URL}auth/login`, payload);
  };
}
export default AuthService;
