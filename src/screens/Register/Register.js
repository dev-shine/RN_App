import React, {Component} from "react"
import {View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator} from "react-native"
import {Container, Content, Form, Input, Button} from "native-base"
import IconInput from "../../components/IconInput/IconInput"
import theme, {border, standardBoxShadow} from "../../utils/theme"
import imgs from "../../utils/imgs"

import {connect} from "react-redux"
import {signup} from "../../actions/thunks"

class Register extends Component {
  static navigationOptions = {
    title: "Register",
    headerStyle: {
      backgroundColor: theme.red,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  }

  // userName gender class_level password repeatpassword date_of_birth

  state = {
    userName: "testtest",
    password: "test12",
    repeatpassword: "test12",
    date_of_birth: {
      day: "1",
      month: "10",
      year: "1992",
    },
    email: "test@test.com",
    class_level: "2",
    phone: "+2001091949849",
    loading: false,
    gender: "male",
  }

  handleRegister = () => {
    const data = new FormData()
    Object.keys(this.state).forEach((key) => {
      if (key === "date_of_birth") {
        const {day, month, year} = this.state.date_of_birth
        data.append("date_of_birth", `${day}/${month}/${year}`)
      } else {
        data.append(key, this.state[key])
      }
    })

    this.props.signup(data)
  }

  handleDOFChange = (value, name) => {
    this.setState((ps) => ({
      ...ps,
      date_of_birth: {
        ...ps.date_of_birth,
        [name]: value,
      },
    }))
  }
  render() {
    return (
      <Container style={{}}>
        <Content>
          <Form>
            <IconInput
              img="profile"
              placeholder="Username"
              value={this.state.userName}
              onChangeText={(userName) => this.setState({userName})}
            />

            <IconInput
              img="mail"
              placeholder="Email"
              keyboardType="email-address"
              value={this.state.email}
              onChangeText={(email) => this.setState({email})}
            />

            <IconInput
              img="lock"
              placeholder="Password"
              secureTextEntry
              value={this.state.password}
              onChangeText={(password) => this.setState({password})}
            />

            <IconInput
              img="lock"
              placeholder="Repeat Password"
              secureTextEntry
              value={this.state.repeatpassword}
              onChangeText={(repeatpassword) => this.setState({repeatpassword})}
            />

            <View style={styles.genderContainer}>
              <TouchableOpacity style={styles.male} onPress={() => this.setState({gender: "male"})}>
                <Image
                  source={imgs.male}
                  style={[styles.genderImg, this.state.gender === "male" ? styles.genderImgActive : {}]}
                />
                <Text style={[this.state.gender === "male" ? styles.genderActive : {}]}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.female} onPress={() => this.setState({gender: "female"})}>
                <Image
                  source={imgs.female}
                  style={[styles.genderImg, this.state.gender === "female" ? styles.genderImgActive : {}]}
                />
                <Text style={[this.state.gender === "female" ? styles.genderActive : {}]}>Female</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.dateContainer}>
              <Input
                style={[styles.dateItem, styles.year]}
                keyboardType="numeric"
                placeholder="YYYY"
                value={this.state.date_of_birth.year}
                placeholderTextColor={theme.placeholderTextColor}
                onChangeText={(value) => this.handleDOFChange(value, "year")}
              />
              <Input
                style={[styles.dateItem, styles.month]}
                keyboardType="numeric"
                placeholder="MM"
                value={this.state.date_of_birth.month}
                placeholderTextColor={theme.placeholderTextColor}
                onChangeText={(value) => this.handleDOFChange(value, "month")}
              />
              <Input
                style={[styles.dateItem, styles.day]}
                keyboardType="numeric"
                placeholder="DD"
                value={this.state.date_of_birth.day}
                placeholderTextColor={theme.placeholderTextColor}
                onChangeText={(value) => this.handleDOFChange(value, "day")}
              />
            </View>

            <IconInput
              img="screen"
              placeholder="Class Level"
              value={this.state.class_level}
              onChangeText={(class_level) => this.setState({class_level})}
            />

            <IconInput
              img="phone"
              placeholder="Phone"
              value={this.state.phone}
              keyboardType="phone-pad"
              onChangeText={(phone) => this.setState({phone})}
            />

            <Button block style={styles.registerButton} success onPress={this.handleRegister}>
              <Text style={styles.registerText}>
                {!this.props.loading ? `Register` : <ActivityIndicator size="small" color="#fff" />}
              </Text>
            </Button>

            <Button block style={styles.cancelButton} primary onPress={() => this.props.navigation.navigate("Login")}>
              <Text style={styles.cancelText}>Cancel</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  registerButton: {
    marginHorizontal: 5,
    backgroundColor: theme.red,
    marginTop: 30,
    marginBottom: 20,
    ...border(StyleSheet.hairlineWidth, "solid", theme.red),
  },
  registerText: {color: "#fff"},
  cancelButton: {
    marginHorizontal: 5,
    backgroundColor: "transparent",
    ...border(StyleSheet.hairlineWidth, "solid", theme.red),
  },
  cancelText: {color: theme.red},
  genderContainer: {
    marginVertical: 10,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  male: {
    padding: 5,
    marginRight: 5,
    marginLeft: 5,
    flexDirection: "row-reverse",
  },
  female: {
    padding: 5,
    flexDirection: "row-reverse",
  },
  genderActive: {
    color: theme.red,
  },
  genderImg: {
    height: null,
    width: 20,
    height: 20,
    marginLeft: 2,
    backgroundColor: "transparent",
    tintColor: theme.placeholderTextColor,
  },
  genderImgActive: {
    tintColor: theme.red,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
    ...standardBoxShadow(),
  },
  dateItem: {
    backgroundColor: "#fff",
    textAlign: "center",
  },
  day: {
    flex: 3,
  },
  month: {
    flex: 3,
    marginHorizontal: 5,
  },
  year: {
    flex: 4,
  },
})

const mapStateToProps = ({auth: {signup}}) => ({
  loading: signup.loading,
})

export default connect(
  mapStateToProps,
  {
    signup,
  },
)(Register)
