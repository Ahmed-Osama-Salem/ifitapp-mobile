import axios from 'axios';
interface RegisterPayload {
  email: string;
  password: string;
  name: string;
  phone_number: string;
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
        return error;
      });
  };
}
export default AuthService;
