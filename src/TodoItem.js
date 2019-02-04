import React from 'react'

class TodoItem extends React.Component{
    // 实现点击item时将item删除
    handleDelete() {
        // 首先要获取下标，这个下标需要从父组件递过来，然后通过组件的index获取
     //   console.log(this.props.index)
        // 当获取到下标以后，子组件就要告诉父组件删除某个下标的item
        //（因为子组件到底要显示多少项是由父组件里的list决定的）
        // 这里就涉及到子组件向父组件传递参数的问题
        // 重要！！！注意在react当中，如果子组件想要向父组件通信（传值），子组件要调用父组件传递过来的方法
        // 调用父组件传递过来的函数（方法）
        this.props.handleDel(this.props.index)// 我们再将 index回传给给父组件，通知父组件删除该节点,
        // 回传后，父组件里handleDel的就能接收到回传的index 参数
    }
    render() {
        return (
            <div onClick={this.handleDelete.bind(this)}>
                {/* 子组件通过 props属性获取父组件传递过来的参数 */}
                {this.props.content}
            </div>
        )
    }
}

export default TodoItem