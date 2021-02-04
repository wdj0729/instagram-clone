import axios from 'axios';

export { default as Home } from './Home';
export { default as PasswordReset } from './PasswordReset';
export { default as Register } from './Register';
export { default as LoginPage } from './LoginPage';

axios.defaults.withCredentials = true;