import Cookies from 'universal-cookie';

const cookies = new Cookies();
const logout = () => {
  cookies.remove('token');
  window.location.href = 'SignUp';
};

export default logout;
