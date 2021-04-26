import React, { Component } from 'react';
import EmployeeServices from '../services/EmployeeSevices'

class Update extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: props.match.params.id,
            firstName: '',
            lastName: '',
            email: ''

        }
        this.changeFirstNameHendler = this.changeFirstNameHendler.bind(this);
        this.changeLastNameHendler = this.changeLastNameHendler.bind(this);
        this.changeEmailHendler = this.changeEmailHendler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeServices.getEmployeeById(this.state.id)
        .then((response => {
            let employee = response.data;
            this.setState({
               firstName: employee.firstName,
               lastName: employee.lastName,
               email: employee.email  
            })
        }))
    }

    updateEmployee = (e) => {
        e.preventDefault();

       let employee = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email} 
       
       EmployeeServices.updateEmployee(employee,this.state.id)
       .then(response => this.props.history.push('/employees'));
       
    }

    changeFirstNameHendler = (e) =>{
        this.setState({firstName: e.target.value})
    }
    changeLastNameHendler = (e) => {
        this.setState({lastName: e.target.value})
    }
    changeEmailHendler = (e) => {
        this.setState({email: e.target.value})
    }

    cancel() {
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add New Employee</h3>
                              <div className='card-body'>
                                  <form>
                                      <div className='form-group'>
                                          <label>First Name</label>
                                             <input name='firstName' placeholder='Marjan' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHendler}/>
                                          <label>Last Name</label>
                                             <input name='lastName' placeholder='Geca' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHendler}/>
                                          <label>Email</label>
                                             <input name='email' placeholder='1@2' className='form-control' value={this.state.email} onChange={this.changeEmailHendler}/>

                                      </div>
                                      <button className='btn btn-success' onClick={this.updateEmployee}> Save</button>
                                      <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Cancel</button>
                                  </form>

                              </div>

                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Update;