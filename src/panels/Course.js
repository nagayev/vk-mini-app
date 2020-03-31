import React from 'react';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import bridge from '@vkontakte/vk-bridge';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import persik from '../img/persik.png';
import './Persik.css';
import {loadCourse} from '../utils';
const osName = platform();

const Course = props => {
    var __debug__ = true;
    var course;
    async function get(){
        if(__debug__) course="js";
        else course = await bridge.send('VKWebAppStorageGet',{keys:['course']}).keys[0].value 
    }
    get();
    console.log(props); //FIXME: debug
    var content = null;
    async function updateContent(){
        try{
            content = JSON.parse(await loadCourse(course));
            console.log(content);
        }
        catch(e){
            console.warn(e);
            content = {error:400}
        }
    }
    updateContent(content);
    return (
        <Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Course
		</PanelHeader>
        <Div>

        </Div>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
	</Panel>
    );
}


export default Course;
