import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../../config/colors";
const NavigateToDetails = ({ navigation }, data, screen, title) => {
  navigation.navigate("recommended", {
    navigationData: data,
    prevScreen: screen,
    title,
  });
};
const RecommendedLayout = (props) => {
  return props.item.map((item, index) => (
    <TouchableOpacity
      key={index}
      style={styles.items}
      onPress={() =>
        NavigateToDetails(
          props.parent_props,
          item["link"],
          props.screen,
          item["label"]
        )
      }
    >
      <Text style={{ color: colors.pink }}>{item["label"]}</Text>
    </TouchableOpacity>
  ));
};
const styles = StyleSheet.create({
  items: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderColor: "#000",
    borderWidth: 1,
    margin: 5,
    borderRadius: 100,
  },
});
export default RecommendedLayout;
