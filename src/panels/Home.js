import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
//import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
//import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Menu from '../Menu'; 

const Home = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader>Programmer guide</PanelHeader>
		<Group title="User Data Fetched with VK Bridge">
			{/*<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell> */ }
		</Group>

		<Group title="Navigation Example">
			<Menu go={go}/>
		</Group>
	</Panel>
);

export default Home;
