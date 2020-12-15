import React from 'react';
class AddList extends React.Component {
constructor(props) {
    super(props);

    this.state = {todos: ['buy milk', 'prepare tea'],
                  value: ''

    };
}
handleChange = ()=>{
    console.log('mmm')
}

    render() {
        return  <div>
            <input type='text' onChange={this.handleChange}/>
            <ul>
                {this.state.todos.map((v,i) =>{
                    return <li key={i}>{v}</li>
                }
                )}
            </ul>
        </div>;
    }
}
export default AddList;