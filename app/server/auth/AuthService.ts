import axios from 'axios';
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
  RegisterService = async (payload: RegisterPayload) => {
    console.log('====================================');
    console.log('payload::', payload);
    console.log('====================================');
    return await axios
      .post('https://backend-service-ifit.onrender.com/register', payload)
      .then(response => {
        return response;
      })
      .catch(error => {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
        return error;
      });
  };

  VerifyOtpService = async (payload: VerifyOtpPayload) => {
    console.log('====================================');
    console.log('payload::', payload);
    console.log('====================================');
    return await axios
      .post('https://backend-service-ifit.onrender.com/verify', payload)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  };

  LoginService = async (payload: LoginPayload) => {
    console.log('====================================');
    console.log('payload::', payload);
    console.log('====================================');
    return axios.post(
      'https://backend-service-ifit.onrender.com/login',
      payload,
    );
  };
}
export default AuthService;
