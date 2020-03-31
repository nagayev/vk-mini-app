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

function CourseContent(props){
    function callback(name,index){
        return <Div></Div>
    }
    const data = props.data;
    console.log('data',data);
    if(data==={}) return (
        <Div>
            Error with loading...(
        </Div>
    );
    else return (
        <Div>
            {data.titles.map(callback)}
        </Div>
    );
}
const Course = props => {
    const [content,setContent] = React.useState({})
    var __debug__ = !false;
    var course;
    async function get(){
        if(__debug__) course="js";
        else course = await bridge.send('VKWebAppStorageGet',{keys:['course']})
        if(typeof course==="object") course=course.keys[0].value;
        console.log('course',course)
    }
    get();
    console.log(props); //FIXME: debug
    var rawcontent = null;
    async function updateContent(){
        try{
            rawcontent = await loadCourse(course)
            rawcontent = await rawcontent.json() //JSON.parse response
            console.log(rawcontent)
            //setContent(rawcontent)
        }
        catch(e){
            console.warn(e);
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
			
		</PanelHeader>
        <Div>
            <CourseContent data={content} />
        </Div>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
	</Panel>
    );
}


export default Course;
