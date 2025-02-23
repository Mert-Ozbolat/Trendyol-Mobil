import { View, Text } from 'react-native'
import React from 'react'
import { RouteType } from '../'

type Props = RouteType<'App'>


const App: React.FC<Props> = ({ navigation, route }) => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App