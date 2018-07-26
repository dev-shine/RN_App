import React, {Component} from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import {Container, Header, Body, Title, Content, Form, Item, Input, Button} from "native-base"

import IconInput from "../../components/IconInput/IconInput"
import theme, { border } from "../../utils/theme"

class VerifyPhone extends Component {
  static navigationOptions = {
    title: "Verify Phone",
    headerStyle: {
      backgroundColor: theme.red,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  }

  state = {}
  confirmResetCode = () => {
    // console.warn("handle confirmResetCode")
  }

  render() {
    return (
      <Container style={{paddingTop: 20}}>
        <Content>
          <Form>
            <IconInput img="mail" placeholder="Phone" value="" keyboardType="phone-pad" onChangeText={(f) => f} />
            <Button block style={styles.sendButton} success onPress={this.confirmResetCode}>
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

export default VerifyPhone
