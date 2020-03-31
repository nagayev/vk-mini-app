import React from 'react';
import { Button } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
function CourseButton(props){
    //localStorage.setItem('course',props.language);
    async function send(){
        await bridge.send('VKWebAppStorageSet',{key:"course",value:props.language})
    }
    send()
    const style={backgroundColor:"red"}
    return (
        <Button style={style} size="m" level="2" onClick={props.go} data-to="course">{props.language}</Button>               
    )
}
export default CourseButton;