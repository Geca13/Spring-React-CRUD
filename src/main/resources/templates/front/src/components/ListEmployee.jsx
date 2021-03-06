import React, { Component } from 'react'
import EmployeeSevices from '../services/EmployeeSevices'

class ListEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
             employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee= this.deleteEmployee.bind(this);
    }

    deleteEmployee(id) {
        EmployeeSevices.deleteEmployee(id)
        .then(response => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)})
        })

    }
    employeeDetails(id){
        this.props.history.push(`details-employee/${id}`)
    }

    editEmployee(id){
      this.props.history.push(`update-employee/${id}`)
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
                                       <td>
                                           <button onClick={()=> this.editEmployee(employee.id)} className='btn btn-info'>Update</button>
                                           <button style={{marginLeft: '10px'}} onClick={()=> this.deleteEmployee(employee.id)} className='btn btn-danger'>Delete</button>
                                           <button onClick={()=> this.employeeDetails(employee.id)} className='btn btn-success'>Details</button>
                                       </td>

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