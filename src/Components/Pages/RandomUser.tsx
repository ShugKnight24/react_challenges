// create a random user component
// will contain random user cards
import { FC } from 'react';
import { RandomUserResponse } from '../../Types/ApiResponses/RandomUser';

interface RandomUserProps {
	userData: RandomUserResponse | null;
}

export const RandomUser: FC<RandomUserProps> = (props) => {
	
	return(
		<div className="random-user-container">
		</div>
	);
};
