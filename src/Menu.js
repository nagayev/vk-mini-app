import React from 'react';
import CourseButton from './CourseButton';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
function Menu(props){
    return (
        <div>
            <Div><CourseButton language="Python" go={props.go} /></Div>
            <Div><CourseButton language="JS" go={props.go} /> </Div>
            <Div><CourseButton language="C++" go={props.go} /></Div>
        </div>
    );
}
export default Menu;