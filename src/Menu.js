import React from 'react';
import CourseButton from './CourseButton';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
function Menu(props){
    return (
        <Div>
            <CourseButton language="HTML" go={props.go} />
            <CourseButton language="JS" go={props.go} />
            <CourseButton language="CSS" go={props.go} />
        </Div>
    );
}
export default Menu;