import React, { Component } from 'react'
import student from "../images/student.png"
import mentor from "../images/mentor.png"
import axios from 'axios'

class SelectUser extends Component {
    state = {
        userRole: 'Student'
    }

    handleSelect = role => {
        const student = document.querySelector('.student-select')
        const mentor = document.querySelector('.mentor-select')

        if (role == 'student') {
            student.classList.add('active')
            mentor.classList.remove('active')
            this.setState({ userRole: 'Student' })
        } else if (role == 'mentor') {
            student.classList.remove('active')
            mentor.classList.add('active')
            this.setState({ userRole: 'Mentor' })
        }
    }

    handleSubmit = async () => {
        
    }

    render() {
        console.log(this.state.userRole)
        return (
            <div>
                <div className="selectheader"> <h2>Welcome to ineedmentors.com!</h2> </div>
                <div className="selectcontainer">
                    <div className="item1 selecttext"><h2>Choose your user type </h2></div>
                    <div className="item2">
                        <div className="flex1 mentor-select" onClick={() => this.handleSelect('mentor')}>
                            <img src={mentor} />
                        </div>
                        <div className="flex2 active student-select">
                            <img src={student} onClick={() => this.handleSelect('student')}/>
                        </div>
                    </div>
                    <div className="item3">
                        <button className="next" onClick={this.handleSubmit}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectUser
