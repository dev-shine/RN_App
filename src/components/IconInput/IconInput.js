import React, {Component} from "react"
import PropTypes from "prop-types"
import {View, Text, Image} from "react-native"
import {Input} from "native-base"
import styles from "./styles"
import images from "../../utils/imgs"
import theme from "../../utils/theme"

class IconInput extends Component {
  state = {}
  render() {
    console.log("value: ",this.props.value)
    const {img, containerStyle = {}, imageStyle = {}, inputStyle = {}, ...props} = this.props
    return (
      <View style={[styles.inputContainer, containerStyle]}>
        <Image source={images[img]} style={[styles.inputImage, imageStyle]} />
        <Input {...props} style={[styles.input, inputStyle]} placeholderTextColor={theme.placeholderTextColor} />
      </View>
    )
  }
}

IconInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  containerStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  inputStyle: PropTypes.object,
}

export default IconInput
