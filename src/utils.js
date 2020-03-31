async function loadCourse(course){
    if(!course) course="js";
    //load course content from github
    return fetch(`https://raw.githubusercontent.com/nagayev/vk-mini-app/master/src/courses/${course}.json`)
}
export {loadCourse}