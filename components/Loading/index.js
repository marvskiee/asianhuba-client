import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React from "react";
import { externalStyle } from "../../style/externalStyle";
import colors from "../../config/colors";

const Loading = (props) => {
  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
        zIndex: 1,
        position: "absolute",
        backgroundColor: props.inner ? "rgba(0,0,0,.2)" : "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 40,
      }}
    >
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: 15,
          padding: 10,
          height: 100,
          width: 100,
          marginBottom: 80,
        }}
      >
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../../assets/images/loading.gif")}
        />
        <Text
          style={{
            textAlign: "center",
            color: colors.pink,
          }}
        >
          Fetching Data..
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(externalStyle);

export default Loading;
