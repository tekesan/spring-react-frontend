import axios from 'axios';

const COURSE_NAME = 'APAP'
const COURSE_API_URL = 'http://localhost:8080'
const COURSE_NAME_API_URL = `${COURSE_API_URL}/course/${COURSE_NAME}`

class CourseDataService {
    retrieveAllCourses(name){
        return axios.get(`${COURSE_NAME_API_URL}`);
    }

}

export default new CourseDataService()