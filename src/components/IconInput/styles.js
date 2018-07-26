import {StyleSheet} from "react-native"
import theme, {border, standardBoxShadow} from "../../utils/theme"

const debugBorder = {
  ...border("red", "solid", 1),
}

export default StyleSheet.create({
  inputContainer: {
    paddingLeft: 10,
    paddingRight: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "row-reverse",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    ...standardBoxShadow(),
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    // ...debugBorder
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal: 0,
    // width: null,
    // ...debugBorder,
  },
  inputImage: {
    height: null,
    width: 20,
    height: 20,
    marginLeft: 15,
    backgroundColor: "transparent",
    tintColor: theme.placeholderTextColor
    // todo
    // ...debugBorder,
  },
})
