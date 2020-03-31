import React from 'react';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import bridge from '@vkontakte/vk-bridge';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
//import persik from '../img/persik.png';
import './Persik.css';
import {loadCourse} from '../utils';
//import { useEffect } from 'react/cjs/react.production.min';
const osName = platform();

function CourseContent(props){
    console.log('CourseContent props:',props);
    function callback(name,index){
    return <Div>{name}</Div>
    }
    const data = props.data;
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
class Course extends React.Component{
    constructor(){
        super();
        this.state = {
            content:<Div>Error with loading((</Div>
        };
    }
    componentWillMount(){
        var __debug__ = false;
        var course; //name of course, what required js f.e
        async function get(){
            if(__debug__) course="js";
            else course = await bridge.send('VKWebAppStorageGet',{keys:['course']})
            if(typeof course==="object") course=course.keys[0].value;
            //console.log('course',course)
        }
        get();
        //now we have name of course (js)
        //It's time to get contents
        var responseJSON = {}; //default value (Error with loading...)
        const updateContent=async ()=>{
            try{
                responseJSON = await loadCourse(course)
                responseJSON = await responseJSON.json() //JSON.parse response
                //console.log('responseJSON',responseJSON)
                this.setState({content:<CourseContent data={responseJSON} />})
            }
            catch(e){
                console.warn(e);
            }
        }
        updateContent();
    }
    render(){
        return (
            <Panel id={this.props.id}>
            <PanelHeader
                left={<PanelHeaderButton onClick={this.props.go} data-to="home">
                    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </PanelHeaderButton>}
            >
                
            </PanelHeader>
            <Div>
                {this.state.content}
            </Div>
        {/*<img className="Persik" src={persik} alt="Persik The Cat"/>*/ }
        </Panel>
        );
    }
}

export default Course;
