import React from "react";
import { Image, TouchableOpacity, StyleSheet, Alert } from "react-native";

const HistoryHeaderRight = (props) => {
  const infoHandler = () => {
    Alert.alert(
      "",
      "Hi dear user, We set the storage limit of 20 Watch History for better user experience.",
      [{ text: "Ok", onPress: () => console.log("OK Pressed") }]
    );
  };
  return (
    <>
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
export default HistoryHeaderRight;
