async function loadCourse(course){
    //load course content from github
    console.log('loading....')
    return fetch(`https://raw.githubusercontent.com/nagayev/vk-mini-app/master/courses/${course}.json`)
}
export {loadCourse}