import axios from 'axios';

const EMPLOYEE_API = "http://localhost:8081/api/v1/employees";

class EmployeeServices {
    getEmployees(){
        return axios.get(EMPLOYEE_API);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API,employee);
    }
}

export default new EmployeeServices()