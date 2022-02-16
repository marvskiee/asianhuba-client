import React, { useEffect, useRef, useState } from "react";
import { Text, SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import colors from "../../config/colors";
import { externalStyle } from "../../style/externalStyle";
import CardLayout from "../Home/components/CardLayout";
function History(props) {
  const mounted = useRef();
  useEffect(async () => {
    if (!mounted.current) {
      mounted.current = true;
    }
  });
  return props.loading ? (
    <SafeAreaView>
      <Text>Loading</Text>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={[styles.container]}>
      {props.history.length > 0 ? (
        <ScrollView>
          <View style={styles.card_layout}>
            <CardLayout data={{ links: props.history }} parent_props={props} />
          </View>
        </ScrollView>
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Text style={{ color: colors.pink, paddingBottom: 40 }}>
            No History
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}
const mapStateToProps = (state) => {
  return {
    loding: state.history.loading,
    history: state.history.history,
  };
};
const styles = StyleSheet.create(externalStyle);

export default connect(mapStateToProps, {})(History);
