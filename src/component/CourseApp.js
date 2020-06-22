import React, { Component } from 'react';
import ListCourseComponent from './ListCourseComponent';

class CourseApp extends Component{
    render() {
        return(
            <>
            <h1>Course Application</h1>
            <ListCourseComponent/>
            </>
        )
    }

}

export default CourseApp