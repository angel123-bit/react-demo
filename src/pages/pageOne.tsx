import styles from './index.less';
import React from 'react';

// ES6的class形式，称为类组件
// 在类组件中是在this.state这个对象中定义数据
export default class PageOne extends React.Component {
  constructor(props) {
    super(props);
    // 这里的state相当于vue里面的data,内部数据
    // props 参数数据
    this.state = {
      styleData: {color: 'red', 'fontSize': '16px'},
      isHead: true,
      className: 'title'
    }
  }
  render() {
    return (
      <div>
        <div
          className={`${this.state.className} ${this.state.isHead ? 'head' : ''}`}
          style={this.state.styleData}
        > this is pageOne</div>
        <div>
          {this.props.title}
        </div>
      </div>
    )   //注意这里return 带上括号，在括号里面写内容
  }
}