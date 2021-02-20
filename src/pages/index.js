import axios from 'axios';

export { default as Home } from './Home';
export { default as PasswordReset } from './PasswordReset';
export { default as Register } from './Register';
export { default as LoginPage } from './LoginPage';
export { default as Explore } from './Explore';
export { default as Profile } from './Profile';

axios.defaults.withCredentials = true;