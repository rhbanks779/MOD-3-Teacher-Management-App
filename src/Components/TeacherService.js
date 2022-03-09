import axios from 'axios';

const teacher_url = "http://localhost:8081/api/teachers"
class TeacherService {

    getTeachers(){
      return axios.get(teacher_url);
    }

    addTeacher(teacher){
      return axios.post(teacher_url, teacher);
    }

    getTeacherById(teacherId){
      return axios.get(teacher_url +'/' + teacherId);
    }

    updateTeacher(teacher, teacherId){
      return axios.put(teacher_url +'/' + teacherId, teacher);
    }

    deleteTeacher(teacherId){
      return axios.delete(teacher_url + '/' + teacherId);
    }
}

export default new TeacherService()