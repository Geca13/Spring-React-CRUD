import React, { Component } from 'react'
import EmployeeSevices from '../services/EmployeeSevices'

class ListEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
             employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
    }
    componentDidMount() {
        EmployeeSevices.getEmployees().then((response)=>{
           this.setState({employees: response.data}) ;
        });
    }

    addEmployee(){
       this.props.history.push('/add-employee');
    }
    render() {
        return (
             <div>
                 <h2 className = 'text-center'>Employees</h2>
                 <div className='row'>
                    <button className='btn btn-primary' onClick={this.addEmployee}>Add + </button>
                 </div>
                 <div className='row'>
                    <table className = 'table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                              this.state.employees.map(
                                  employee => 
                                   <tr key={employee.id}>
                                       <td>{employee.id}</td>
                                       <td>{employee.firstName}</td>
                                       <td>{employee.lastName}</td>
                                       <td>{employee.email}</td>

                                   </tr>
                                
                                )
                          }

                        </tbody>

                    </table>

                 </div>

             </div>
        )
    }
}

export default ListEmployee