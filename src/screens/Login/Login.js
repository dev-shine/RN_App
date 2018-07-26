import React, {Component} from "react"
import {View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from "react-native"
import {Container, Header, Body, Title, Content, Form, Item, Input, Button} from "native-base"
import {connect} from "react-redux"
import IconInput from "../../components/IconInput/IconInput"
import theme, {border} from "../../utils/theme"

import { login } from "../../actions/thunks"

class Login extends Component {
  static navigationOptions = {
    title: "Login",
    // headerLeft: null,
    headerStyle: {
      backgroundColor: theme.red,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  }

  state = {
    userName: "",
    password: "",
    loading: false,
  }

  handleLogin = () => {
    const {userName, password} = this.state
    let data = new FormData()
    data.append("userName", userName)
    data.append("password", password)
    this.props.login(data)
  }

  render() {
    const {loading} = this.state
    return (
      <Container style={{paddingTop: 20}}>
        <Content>
          <Form>
            <IconInput
              containerStyle={{marginBottom: 5}}
              img="profile"
              placeholder="Username"
              value={this.state.userName}
              onChangeText={(userName) => this.setState({userName})}
            />
            <IconInput
              containerStyle={{marginBottom: 10}}
              img="lock"
              placeholder="Password"
              value={this.state.password}
              secureTextEntry
              onChangeText={(password) => this.setState({password})}
            />
            <View style={{marginBottom: 25}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("ResetPassword")}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <Button block style={styles.loginButton} primary onPress={this.handleLogin} disabled={loading}>
              {!loading ? (
                <Text style={[styles.loginText]}>Log in</Text>
              ) : (
                <ActivityIndicator size="small" color="#fff" />
              )}
            </Button>
            <Text style={styles.noAccount}>Don't have an account?</Text>
            <Button
              block
              color="#fff"
              style={styles.registerButton}
              success
              disabled={loading}
              onPress={() => this.props.navigation.navigate("Register")}>
              <Text style={styles.registerText}>Register Now</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  forgotPassword: {marginLeft: 10, marginTop: 5, color: theme.red},
  loginButton: {
    marginHorizontal: 5,
    backgroundColor: theme.red,
    ...border(StyleSheet.hairlineWidth, "solid", theme.red),
  },
  loginText: {color: "#fff"},
  noAccount: {marginRight: 5, marginBottom: 15, marginTop: 5, textAlign: "right"},
  registerButton: {
    marginHorizontal: 5,
    backgroundColor: "transparent",
    ...border(StyleSheet.hairlineWidth, "solid", theme.red),
  },
  registerText: {color: theme.red},
})

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  {
    login
  }
)(Login)
