import React from "react";
import { Text, StyleSheet } from "react-native";

const RecommendedHeaderLeft = (props) => {
  const prevscreen = props.route.params.prevScreen;
  return (
    <>
      <Text style={styles.header_style}>{prevscreen}</Text>
    </>
  );
};
const styles = StyleSheet.create({
  header_style: {
    fontFamily: "mont",
    fontSize: 18,
  },
});
export default RecommendedHeaderLeft;
