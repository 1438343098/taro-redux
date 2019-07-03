import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    navigationStyle: 'custom'
  }

  componentWillMount () { }

  componentDidMount () {
    Taro.showActionSheet({
      itemList: ['a', 'b', 'c']
    }).then( res => {
      console.log( res )
      Taro.setTabBarBadge({
        index: 0,
        text: '1'
      })
    })

    
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>chat</Text>
      </View>
    )
  }
}
