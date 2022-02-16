import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
} from "react-native";

const WatchHeaderRight = (props) => {
  const [statusbar, setStatusBar] = useState(false);
  const infoHandler = () => {
    Alert.alert(
      "",
      "To hide notification bar for old device users in full-screen mode, toggle the wrench icon to fix the issue.",
      [{ text: "Ok", onPress: () => console.log("OK Pressed") }]
    );
  };
  return (
    <>
      <StatusBar hidden={statusbar} />
      <TouchableOpacity onPress={() => setStatusBar(!statusbar)}>
        <Image
          style={styles.header_icon}
          source={require("../../../assets/images/wrench_icon.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={infoHandler}>
        <Image
          style={styles.header_icon}
          source={require("../../../assets/images/info_icon.png")}
        />
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  header_icon: {
    width: 35,
    marginLeft: 5,
    height: 35,
  },
});
export default WatchHeaderRight;
