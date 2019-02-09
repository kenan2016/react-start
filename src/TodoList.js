import React, { Component, Fragment } from 'react';
//import logo from './logo.svg';
//import './App.css';
import TodoItem from './TodoItem'
// 引入第三方的ajax 工具 axios
import axios from 'axios'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state={
      List:['learn english', 'learn react'],
      inputVal:''
    }
    // 或者这么写：已提高代码性能
    // this.handleinputChange = this.handleinputChange.bind(this) 或者在组件里使用箭头函数
  }

  componentDidMount() {
    axios.get('/api/products').then(() => {
      alert('success')
    }).catch(() => {cls
      alert('error')
    })
  }
  handleBtnClick() {
    this.setState({
      //ES6 数组的新方法
      List:[...this.state.List, this.state.inputVal],
      inputVal:''
    })
  }
  handleinputChange(event) {
    this.setState({
      inputVal:event.target.value
    })
  }
  handleItemClick(index) {
    // 推荐写法，当我们在处理react-state 里的数据的时候，不推荐直接操作。而推荐 将数据复制一个副本，
    // 然后对副本进行操作，最后将副本赋值给state
    // 我们要删除这个数据那么就要先拿到item对象的下标
    const List = [...this.state.List]// 数组浅拷贝
    List.splice(index, 1)// 数组的splice(index, num)方法：从下标index开始移除数组元素，num:移除的个数
    // 并返回List,此时的list已经是新的list
    this.setState({ // 这个写法叫对象的解构赋值{A} 等价于 {A:A}
      List
    })
  }

  handleDeleteCurItem(index) {
    // console.log(index)
    // 既然能够拿到下标，呢么我们就能够删除list里的数据了，并重新渲染数据了
    const List = [...this.state.List]
    List.splice(index, 1)
    this.setState({
      List
    })
  }
  getToDoListItems() {
    return this.state.List.map((item, index) => {
      // 通过content 向 item组件传递参数
      // 即：父组件通过属性的形式向子组件传递参数
      // handleDel={this.handleDelete.bind(this)} 用来子组件和父组件进行通信
      // 同时在父组件创建handleDelete 方法
      // handleDel 要传给子组件里实现
      return (
        <TodoItem 
          handleDel={this.handleDeleteCurItem.bind(this)} 
          key={index} 
          content={item} 
          index={index}/>
      )
    //  return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li> 
    })
  }
  render() {
    return (
      <Fragment>
        <div>
          <input onChange={this.handleinputChange.bind(this)} value={this.state.inputVal}></input>
          {/* 注意这里的如果不写bind(this)则说明 函数会直接指向被点击的按钮！   */}
          <button className='styl-btn' onClick={this.handleBtnClick.bind(this)} style={{background: 'orange', fontSize: 18}}>add</button>
        </div>
        <ul>
          {this.getToDoListItems()}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
