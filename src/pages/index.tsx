import styles from './index.less';
import { useState } from 'react';
// usestate 这个是react hook ，可以定义一些变量，作用：？？
// 在函数组件的写法中使用useState这个React Hook定义了数据

// 组件的HTML部分，Vue推荐使用template模板，React推荐使用JSX语法
// 这是函数组件，函数形式
// 在React中是使用{}给属性赋值变量，且className只接受字符串，不接受数组或者对象，可以用ES6的模板字符串功能来拼接变量生成字符串

import HelloWorld from './HelloWorld.tsx'
// 在React中组件的命名必须以大写字母开头，因为 React 会将以小写字母开头的组件视为原生 DOM 标签

export default function IndexPage(props) {
  const [styleData] = useState({ color: 'red', 'fontSize': "16px" });
  const [isHead] = useState(true);
  const [className] = useState('title');
  const {title = 'hello world'} = props;
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div 
        className="title head"
        style={{color:'red',fontSize:'16px'}}
      >
        hello world
      </div>

      <div className={`${className} ${isHead ? 'head' : ''}`}
        style={styleData}>
          我很牛逼
      </div>
      <div style={{fontSize: '30px', color: 'pink'}}>
        {title}
      </div>
      <HelloWorld/>
    </div>
    
  );
}


