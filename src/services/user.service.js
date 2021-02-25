import authHeader from './auth-header';

const URL = 'http://localhost:3000/'

const getPublicContent = () => window.fetch(URL + 'all');

const getUserBoard = () => window.fetch(URL + 'user', { headers: authHeader() });

const getAdminBoard = () => window.fetch(URL + 'admin', { headers: authHeader() });

export default {
  getPublicContent,
  getUserBoard,
  getAdminBoard
};