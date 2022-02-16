import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { connect } from "react-redux";
import colors from "../../../config/colors";
import { searchResult } from "../../../redux";

function SearchHeaderRight(props) {
  return (
    <View>
      <TextInput
        style={styles.search_header}
        placeholder="Search anything..."
        onChangeText={(e) => props.searchResult(e, 1)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  search_header: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    minWidth: "80%",
    borderRadius: 100,
    backgroundColor: colors.lightgray,
  },
});
export default connect(null, {
  searchResult,
})(SearchHeaderRight);
