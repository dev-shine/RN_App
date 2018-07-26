import React, {Component} from "react"
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  AsyncStorage,
  Dimensions,
} from "react-native"
import {Container, Content, Form, Button} from "native-base"
import VideoPlayer from "react-native-video-player"
import Swiper from "react-native-swiper"

import EE from "../../utils/EventEmitter"
import imgs from "../../utils/imgs"
import theme from "../../utils/theme"
import Loading from "../Loading/Loading"

import {checkToken} from "../../actions/thunks"
import {connect} from "react-redux"

const HeaderRight = (props) => (
  <View style={{flexDirection: "row-reverse", alignItems: "center", padding: 10}}>
    <Image source={imgs.graduationHat} style={{height: null, height: 30, width: 30, marginHorizontal: 10}} />
    <Text style={{color: "#fff", fontSize: 17}}>Application Name</Text>
  </View>
)

const HeaderLeft = ({handlePress}) => (
  <TouchableOpacity style={{padding: 10}} onPress={handlePress}>
    <Image source={imgs.menuButton} style={{height: null, height: 20, width: 30}} />
  </TouchableOpacity>
)

class Home extends Component {
  state = {
    paused: true,
  }
  static navigationOptions = ({navigation}) => {
    const {params} = navigation
    return {
      headerLeft: (
        <HeaderLeft
          handlePress={() => {
            EE.emit("headerleft_pressed")
          }}
        />
      ),
      headerRight: <HeaderRight />,
      headerStyle: {
        backgroundColor: theme.red,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }
  }

  async componentDidMount() {
    const token = await AsyncStorage.getItem("@global/authToken")
    this.props.checkToken(token)

    this.leftHeaderListener = EE.addListener("headerleft_pressed", () => {
      console.log("header pressed")
      this.props.navigation.navigate("Login")
      // handle left button press
    })
    // setup navigation stuff
    EE.addListener("NAVIGATE/LOGIN", () => {
      this.props.navigation.popToTop()
      this.props.navigation.navigate("Login")
    })

    EE.addListener("NAVIGATE/REGISTER", () => {
      this.props.navigation.popToTop()
      this.props.navigation.navigate("Register")
    })

    EE.addListener("NAVIGATE/MODAL", () => {
      this.props.navigation.navigate("Modal")
    })
  }
  componentWillUnmount() {
    this.leftHeaderListener.remove()
    console.log("unmounting home")
  }

  handleLogout = () => {
    this.props.navigation.navigate("Login")
  }

  render() {
    if (this.props.loading) {
      return <Loading />
    }

    return (
      <ScrollView>
        <Container style={{}}>
          <View style={{height: 270, overflow: "hidden"}}>
            <Swiper
              style={styles.wrapper}
              dot={null}
              loop={false}
              loadMinimal={true}
              height={250}
              bounces={true}
              showsPagination={false}
              removeClippedSubviews={true}>
              <View style={styles.slide1} />
              <View style={styles.slide2} />
              <View style={styles.slide3} />
            </Swiper>
          </View>

          <TouchableWithoutFeedback style={styles.videoContainer} onPress={this.handleVideoPress}>
            <VideoPlayer
              style={styles.video}
              video={require("../../assets/videos/movie.mp4")}
              thumbnail={imgs.videoThumbnail}
              endWithThumbnail={true}
              resizeMode="cover"
              hideControlsOnStart={true}
              disableFullscreen={true}
            />
          </TouchableWithoutFeedback>

          <View style={styles.statsContainer}>
            <View style={styles.statsItem}>
              <Image source={imgs.people} style={styles.statsImg} />
              <Text style={styles.statsText}>Members</Text>
              <Text style={styles.statsNumber}>1800</Text>
            </View>
            <View style={styles.statsItem}>
              <Image source={imgs.video} style={styles.statsImg} />
              <Text style={styles.statsText}>Video</Text>
              <Text style={styles.statsNumber}>180</Text>
            </View>
            <View style={styles.statsItem}>
              <Image source={imgs.online} style={styles.statsImg} />
              <Text style={styles.statsText}>Online</Text>
              <Text style={styles.statsNumber}>18</Text>
            </View>
          </View>
        </Container>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  statsItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  statsText: {
    color: "#000",
    marginBottom: 5,
    fontSize: 18,
  },
  statsNumber: {
    color: theme.red,
    fontSize: 18,
  },
  videoContainer: {
    // padding: 10,
    height: 200,
  },
  video: {
    height: 200,
    width: Dimensions.get("window").width - 20,
    marginHorizontal: 10,
  },
  wrapper: {
    paddingVertical: 10,
    // backgroundColor: "yellow",
    height: 270,
    overflow: "hidden",
  },
  slide: {},
  slide1: {
    // flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48FB1",
    height: 250,
  },
  slide2: {
    // flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B39DDB",
    height: 250,
  },
  slide3: {
    // flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ef9a9a",
    height: 250,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
})
const mapDispatchToProps = {checkToken}
const mapStateToProps = ({auth: {loading}}) => ({
  loading,
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
