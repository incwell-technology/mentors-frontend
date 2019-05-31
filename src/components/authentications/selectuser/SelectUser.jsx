import React, { Component } from 'react'
import student from "../images/student.png"
import teacher from "../images/teacher.png"

const SelectUser = () => {

    return (
        <div>
            <div className="selectcolor"><h1> WELCOME TO I NEED MENTOR!<br /> Sign Up as </h1></div>
            <div className="selectuser">
                <div className="user">
                    <img src={teacher} />
                    <h2 className="selectcolor">MENTOR</h2>
                </div>
                <div className="user">
                    <img src={student} />
                    <h2 className="selectcolor">STUDENT</h2>
                </div>
            </div>
            <div>
                <button className="next">Next</button>
            </div>
        </div>
    )
}

export default SelectUser
