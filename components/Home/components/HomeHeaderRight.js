import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";

const NavigateToDetails = ({ navigation }, name) => {
  navigation.navigate(name);
};
const HomeHeaderRight = (props) => {
  return (
    <>
      <TouchableOpacity onPress={() => NavigateToDetails(props, "history")}>
        <Image
          style={styles.header_icon}
          source={require("../../../assets/images/history_icon.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => NavigateToDetails(props, "search")}>
        <Image
          style={styles.header_icon}
          source={require("../../../assets/images/search_icon.png")}
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
export default HomeHeaderRight;
