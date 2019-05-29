import React, { Component } from 'react'
import student from "../images/student.png"
import teacher from "../images/teacher.png"

const SelectUser = () => {

    return (
        <div>
            <div class="selectcolor"><h1> WELCOME TO I NEED MENTOR!<br /> Sign Up as </h1></div>
            <div class="selectuser">
                <div class="user">
                    <img src={teacher} />
                    <h2 class="selectcolor">MENTOR</h2>
                </div>
                <div class="user">
                    <img src={student} />
                    <h2 class="selectcolor">STUDENT</h2>
                </div>
            </div>
            <div>
                <button class="next">Next</button>
            </div>
        </div>
    )
}

export default SelectUser
