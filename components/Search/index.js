import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import colors from "../../config/colors";
import { searchResult, clearSearchResult } from "../../redux";
import { externalStyle } from "../../style/externalStyle";
import CardLayout from "../Home/components/CardLayout";
import Loading from "../Loading";
import RecommendedLayout from "./components/RecommendedLayout";

const NavigateToDetails = ({ navigation }, data) => {
  navigation.navigate("watch", { navigationData: data, prevScreen: "search" });
};

const Search = (props) => {
  const mounted = useRef();
  const [page, setPage] = useState(1);

  let prev = props.keyword;
  useEffect(() => {
    if (!mounted.current) {
      props.clearSearchResult();
      mounted.current = true;
    }
  });
  const paginationHandler = (page) => {
    props.searchResult(props.keyword, page);
    setPage(page);
  };
  return props.loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        {props.result ? (
          <>
            <View style={styles.card_header}>
              <Text style={{ fontFamily: "mont" }} numberOfLines={1}>
                Search result for:{" "}
                <Text style={{ fontFamily: "" }}>{props.result["title"]}</Text>
              </Text>
            </View>
            <View style={styles.card_layout}>
              <CardLayout
                data={{ links: props.result["result"] }}
                parent_props={props}
                screen="search"
              />
            </View>
          </>
        ) : (
          props.recommended && (
            <>
              <View style={styles.search_history_layout}>
                {props.history.length == 0 ? (
                  <View>
                    <Text
                      style={{
                        textAlign: "center",
                        padding: 40,
                        color: colors.pink,
                      }}
                    >
                      No Search History
                    </Text>
                  </View>
                ) : (
                  props.history.map((item, index) => (
                    <TouchableOpacity
                      style={styles.search_history}
                      key={index}
                      onPress={() =>
                        NavigateToDetails(props, {
                          title: item["title"],
                          link: item["link"],
                          image: item["image"],
                        })
                      }
                    >
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          style={{ width: 35, height: 35 }}
                          source={require("../../assets/images/search_history_icon.png")}
                        />
                        <Text>{item["title"]}</Text>
                      </View>
                    </TouchableOpacity>
                  ))
                )}
              </View>
              <View style={styles.search_recommended_layout}>
                <Text style={styles.search_recommended_header}>
                  Latest Movies
                </Text>
                <View style={styles.search_recommended}>
                  <RecommendedLayout
                    item={props.recommended["latest_movie"]}
                    parent_props={props}
                    screen="Latest Movies"
                  />
                </View>
              </View>
              <View style={styles.search_recommended_layout}>
                <Text style={styles.search_recommended_header}>
                  Latest TV Series
                </Text>
                <View style={styles.search_recommended}>
                  <RecommendedLayout
                    item={props.recommended["latest_tv"]}
                    parent_props={props}
                    screen="Latest TV Series"
                  />
                </View>
              </View>
            </>
          )
        )}
        {props.result && props.result["page"].length > 0 && (
          <View style={styles.pagination_layout}>
            <Text style={{ fontFamily: "mont" }}>Page: </Text>
            <View style={{ flexDirection: "row" }}>
              {props.result["page"].map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.pagination,
                    {
                      backgroundColor:
                        page == item ? colors.pink : colors.lightgray,
                    },
                  ]}
                  onPress={() => {
                    paginationHandler(item);
                  }}
                >
                  <Text
                    style={{
                      color: page != item ? colors.pink : colors.lightgray,
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.search.loading,
    result: state.search.result,
    page: state.search.page,
    keyword: state.search.keyword,
    history: state.search.history,
    recommended: state.home.result,
  };
};
const styles = StyleSheet.create(externalStyle);
export default connect(mapStateToProps, {
  searchResult,
  clearSearchResult,
})(Search);
