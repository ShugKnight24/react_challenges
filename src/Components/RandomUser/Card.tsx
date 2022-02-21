import { FC, useState } from 'react';
import { RandomUser } from '../../Types/ApiResponses/RandomUser';

interface RandomUserCardProps {
	userData: RandomUser;
}

enum ActiveCardState {
	ADDRESS='address',
	DOB='dob',
	EMAIL='email',
	PASSWORD='password',
	PHONE='phone',
	USER='user'
}

export const RandomUserCard: FC<RandomUserCardProps> = (props) => {
	const {
		userData
	} = props;
	const imageUrl = userData?.picture?.large;
	const fullName = `${userData?.name?.first}  ${userData?.name?.last}`;
	const streetAddress = `${userData?.location?.street?.number} ${userData?.location?.street?.name}`;
	const [activeTab, setActiveTab] = useState<ActiveCardState>(ActiveCardState.USER);

	const handleTabClick = (tab: ActiveCardState) => {
		setActiveTab(tab);
	}

	return(
		<div className="random-user-card-container">
			<img
				className='random-user-card-image'
				alt={`${fullName}'s headshot`}
				src={imageUrl}
			/>
			<div className="random-user-card-text-container">
				{activeTab === ActiveCardState.USER && (
					<div className="random-user-card-text-user">
						<h3>Hi, my name is</h3>
						<p>{fullName}</p>
					</div>
				)}
				{activeTab === ActiveCardState.EMAIL && (
					<div className="random-user-card-text-email">
						<h3>My email is</h3>
						<p>{userData?.email}</p>
					</div>
				)}
				{activeTab === ActiveCardState.DOB && (
					<div className="random-user-card-text-dob">
						<h3>My birthday is</h3>
						<p>{userData?.dob?.date}</p>
					</div>
				)}
				{activeTab === ActiveCardState.ADDRESS && (
					<div className="random-user-card-text-address">
						<h3>My address is</h3>
						<p>{streetAddress}</p>
					</div>
				)}
				{activeTab === ActiveCardState.PHONE && (
					<div className="random-user-card-text-phone">
						<h3>My phone number is</h3>
						<p>{userData?.phone}</p>
					</div>
				)}
				{activeTab === ActiveCardState.PASSWORD && (
					<div className="random-user-card-text-password">
						<h3>My password is</h3>
						<p>{userData?.login?.password}</p>
					</div>
				)}
			</div>
			<div className={`random-user-card-navigation ${activeTab}`}>
				<i
					className="fas fa-user-circle"
					onClick={() => handleTabClick(ActiveCardState.USER)}
				></i>
				<i
					className="fas fa-envelope"
					onClick={() => handleTabClick(ActiveCardState.EMAIL)}
				></i>
				<i
					className="fas fa-calendar-alt"
					onClick={() => handleTabClick(ActiveCardState.DOB)}
				></i>
				<i
					className="fas fa-map-marked-alt"
					onClick={() => handleTabClick(ActiveCardState.ADDRESS)}
				></i>
				<i
					className="fas fa-phone"
					onClick={() => handleTabClick(ActiveCardState.PHONE)}
				></i>
				<i
					className="fas fa-unlock-alt"
					onClick={() => handleTabClick(ActiveCardState.PASSWORD)}
				></i>
			</div>
		</div>
	);
};