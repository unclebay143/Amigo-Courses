import React, { Component } from "react"
import {v4 as uuidv4} from 'uuid'

const CourseContextApi = React.createContext()

const CourseContextApiProvider = CourseContextApi.Provider

class CourseApi extends Component {
  constructor(props){
    super(props)
    this.state = {
      courses: [
        {
          id: uuidv4(),
          title: "Html",
          level: "Beginner",
          duration: "5 hours"
        },
        {
          id: uuidv4(),
          title: "Css",
          level: "Beginner",
          duration: "3 hours"
        },
        {
          id: uuidv4(),
          title: "Javascript",
          level: "Beginner",
          duration: "7 hours"
        },
        {
          id: uuidv4(),
          title: "Python",
          level: "Beginner",
          duration: "5 hours"
        },
        {
          id: uuidv4(),
          title: "Java",
          level: "Beginner",
          duration: "15 hours"
        },
        {
          id: uuidv4(),
          title: "Go",
          level: "Beginner",
          duration: "15 hours"
        },
        {
          id: uuidv4(),
          title: "Mysql",
          level: "Beginner",
          duration: "11 hours"
        },
        {
          id: uuidv4(),
          title: "MongoDb",
          level: "Beginner",
          duration: "6 hours"
        },
      ]
    }
  }
  render() {
    const {courses} = this.state
    return (
      <CourseContextApiProvider value={courses}>{this.props.children}</CourseContextApiProvider>
    )
  }
}

export { CourseContextApi, CourseApi }