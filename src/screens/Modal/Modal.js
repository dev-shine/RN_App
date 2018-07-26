import React, {Component} from "react"
import {View, Text, Button} from "react-native"
import {connect} from "react-redux"

class Modal extends Component {
  state = {
    type: "",
  }

  componentDidMount() {}

  render() {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        {/* complicated thatn it needs 2be. */}
        {Object.keys(this.props.signup.error.data).reduce((acc, outerKey) => {
          Object.keys(this.props.signup.error.data[outerKey]).map((key) => {
            acc.push(<Text key={outerKey + key}>{this.props.signup.error.data[outerKey][key]}</Text>)
          })
          return acc
        }, [])}

        <Button onPress={() => this.props.navigation.goBack()} title="Dismiss" />
      </View>
    )
  }
}

const mapStateToProps = ({auth: {signup}}) => ({
  signup,
})

export default connect(mapStateToProps)(Modal)
