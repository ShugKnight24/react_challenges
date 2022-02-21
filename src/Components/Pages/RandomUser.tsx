// create a random user component
// will contain random user cards
import { FC } from 'react';
import { RandomUserResponse } from '../../Types/ApiResponses/RandomUser';
import { RandomUserCard } from '../RandomUser';
interface RandomUserProps {
	userData: RandomUserResponse | null;
}

export const RandomUser: FC<RandomUserProps> = (props) => {
	
	const {
		userData
	} = props;

	const userDataArray = userData?.results;
	return(
		<div className="random-user-container">
			{userDataArray?.map((user) => {
				return (
					<RandomUserCard
						key={user?.id?.value}
						userData={user}
					/>
				);
			})}
		</div>
	);
};
