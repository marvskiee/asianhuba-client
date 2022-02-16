import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import CardLayout from "./components/CardLayout";
import { connect } from "react-redux";
import {
  homeResult,
  setWatchHistoryMany,
  setSearchHistoryMany,
} from "../../redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { externalStyle } from "../../style/externalStyle";
import Loading from "../Loading";

const NavigateToDetails = ({ navigation }, data, screen, title) => {
  navigation.navigate("recommended", {
    navigationData: data,
    prevScreen: screen,
    title,
  });
};

function Home(props) {
  const mounted = useRef();
  useEffect(async () => {
    if (!mounted.current) {
      props.homeResult();
      getData();
      mounted.current = true;
    } else {
      props.result;
    }
  });

  const getData = async () => {
    try {
      const searchStoredHistory = await AsyncStorage.getItem("search_history");
      const watchStoredHistory = await AsyncStorage.getItem("watch_history");

      if (searchStoredHistory !== null) {
        let stored = JSON.parse(searchStoredHistory);
        props.setSearchHistoryMany(stored);
      }
      if (watchStoredHistory !== null) {
        let stored = JSON.parse(watchStoredHistory);
        props.setWatchHistoryMany(stored);
      }
    } catch (e) {
      console.log("Warning get in Home.js: " + e.message);
    }
  };
  return props.loading ? (
    <Loading inner={false} />
  ) : (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {props.result["suggestion"] &&
          props.result["suggestion"].map((item, index) => (
            <View key={index}>
              <View style={styles.card_header}>
                <Text style={styles.card_header_category}>
                  {item["more"]["label"]}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    NavigateToDetails(
                      props,
                      item["more"]["link"],
                      item["more"]["label"],
                      "All"
                    )
                  }
                >
                  <Text style={styles.card_header_more}>View More</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.card_layout}>
                <CardLayout data={item} parent_props={props} screen="watch" />
              </View>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.home.loading,
    result: state.home.result,
  };
};
const styles = StyleSheet.create(externalStyle);

export default connect(mapStateToProps, {
  homeResult,
  setWatchHistoryMany,
  setSearchHistoryMany,
})(Home);
