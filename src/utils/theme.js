export default {
  red: "#de3527",
  text: "#576164",
  placeholderTextColor: "#c0c0c0",
}
export const border = (borderWidth, borderStyle, borderColor) => ({
  borderStyle,
  borderWidth,
  borderColor,
})

export const standardBoxShadow= () => ({
  shadowColor: "#000",
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.3,
  shadowRadius: 2,
  elevation: 1,
})
