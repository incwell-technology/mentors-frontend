// Click Handler for User Select component

const handleSelect = role => {
    const student = document.querySelector('.student-select')
    const mentor = document.querySelector('.mentor-select')

    if (role == 'student'){
        student.classList.add('active')
        mentor.classList.remove('active')
    } else if (role == 'mentor') {
        student.classList.remove('active')
        mentor.classList.add('active')
    }
}

export default handleSelect