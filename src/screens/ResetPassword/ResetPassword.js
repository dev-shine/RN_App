import React, {Component} from "react"
import {View, Text, StyleSheet} from "react-native"
import {Container, Content, Form, Button} from "native-base"
import IconInput from "../../components/IconInput/IconInput"
import theme, {border} from "../../utils/theme"

import EE from "../../utils/EventEmitter"

class Register extends Component {
  static navigationOptions = {
    title: "Reset Password",
    headerStyle: {
      backgroundColor: theme.red,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  }

  handleSendCode = () => {
    this.props.navigation.navigate("VerifyPhone")
  }

  state = {}
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <IconInput img="phone" placeholder="Phone" value="" keyboardType="phone-pad" onChangeText={(f) => f} />
            <Button block style={styles.sendButton} success onPress={this.handleSendCode}>
              <Text style={styles.sendText}>Send Code</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  sendButton: {
    marginHorizontal: 5,
    backgroundColor: theme.red,
    marginTop: 30,
    marginBottom: 20,
    ...border(StyleSheet.hairlineWidth, "solid", theme.red),
  },
  sendText: {color: "#fff"},
})

export default Register
