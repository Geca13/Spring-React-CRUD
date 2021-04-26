import React, { Component } from 'react';
import EmployeeSevices from '../services/EmployeeSevices';

class Details extends Component {

    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }
    componentDidMount() {
      EmployeeSevices.getEmployeeById(this.state.id)
      .then(response => {
          this.setState({employee: response.data })
      })
    }

    render() {
        return (
            <div>
                
                <div className = 'card col-md-6 offset-md-3'>
                  <h2 className='text-center'>Employee Details</h2>
                    <div className = 'card-body'>
                        <div className = 'row'>
                           <label>Employee Id</label>
                              <h5>{this.state.employee.id}</h5>
                        </div>
                        <div className = 'row'>
                           <label>Employee First Name</label>
                              <h5>{this.state.employee.firstName}</h5>
                        </div>
                        <div className = 'row'>
                           <label>Employee Last Name</label>
                              <h5>{this.state.employee.lastName}</h5>
                        </div>
                        <div className = 'row'>
                           <label>Employee Email</label>
                              <h5>{this.state.employee.email}</h5>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Details;