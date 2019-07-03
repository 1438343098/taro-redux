// src/pages/index/index.js
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button,Audio } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.less'

import { add, minus } from '../../actions/counter'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  adds () {
    dispatch(add())
  },
  decs () {
    dispatch(minus())
  }
}))
class Index extends Component {
  
  config = {
    navigationStyle: 'custom'
  }

  

  constructor (props) {
    super(props)
    this.state = {//存储数据的
      age:30,
      time1:new Date(),
      
  	};
  }
  // 挂载
  componentDidMount(){
    this.times = setInterval(()=>{
      // 要执行的函数需要返回
      return this.time2()
    },1000)
  }
  // 卸载
  componentWillUnmount(){
    clearInterval(this.times)
  }

  // 自己的方法
  time2(){
    this.setState({
      time1:new Date()
    })
  }
  // audio
  audioPlay(){
    document.getElementById("audio").play()
  }
  audioPause(){
    document.getElementById("audio").pause()
  }
  plays(){
    console.log("我播放了")
  }

  render () {
    return (
      <View className='todo'>
        <Audio
          src='http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
          controls={false}
          autoplay={false}
          loop={false}
          muted={false}
          onPlay={this.plays}
          id='audio'
        />
        <Button className='add_btn' onClick={this.props.adds}>+</Button>
        <Button className='dec_btn' onClick={this.props.decs}>-</Button>    
        <Text className='dec_btn'>{this.props.counter.num}</Text> 
        <Text className='dec_btn'>{this.state.age}</Text>    
        <Text>现在时间是{this.state.time1.toLocaleTimeString()}</Text>    
        <Button className='dec_btn' onClick={this.audioPlay.bind(this)}>播放音乐</Button>
        <Button className='dec_btn' onClick={this.audioPause.bind(this)}>暂停音乐</Button>
      </View>
    )
  }
}

export default Index