// Setup up a random user service
// using https://randomuser.me/

import { doGet } from './ApiService';

export const getRandomUserData = () => {
	return doGet('https://randomuser.me/api/');
}