import React,{Component} from 'react';

class TodoList extends Component {
    render() { // render会把代码返回的内容如实地渲染到页面上 
        // return <h1>Hello</h1>;
        return(
            <div>
                <div>
                    <input />
                    <button>提交</button>
                </div>
                <ul>
                    <li>学英语</li>
                    <li>Learing React</li>
                </ul>
            </div>
       )
    }
}

export default TodoList;