import { FC, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
	RandomUser
} from '../Pages';
import { RandomUserResponse } from '../../Types/ApiResponses/RandomUser';
import {
	getRandomUserData
} from '../../Services/RandomUser';

type RandomUserResponseType = RandomUserResponse | null;

export const Main: FC = () => {
	const [UserData, setUserData] = useState<RandomUserResponseType>(null);
	
	useEffect(() => {
		const fetchRandomUserData = () => {
			getRandomUserData()
				.then(response => setUserData(response));;
		}

		fetchRandomUserData();
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RandomUser userData={UserData}/>} />
			</Routes>
		</ BrowserRouter>
	);
}