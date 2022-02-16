import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../config/colors";

const HomeHeaderLeft = () => {
  return (
    <View>
      <Text style={styles.title1}>
        Asian<Text style={styles.title2}>Huba</Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title1: {
    fontFamily: "mont",
    fontSize: 22,
    color: "#000",
  },
  title2: {
    fontSize: 22,
    color: colors.pink,
  },
});
export default HomeHeaderLeft;
