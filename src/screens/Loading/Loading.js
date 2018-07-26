import React, {Component} from "react"
import {ActivityIndicator, StyleSheet, View, AsyncStorage} from "react-native"
import {verifyToken} from "../../../api/api"

class Loading extends Component {
  state = {}
  async componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#bbb" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default Loading
