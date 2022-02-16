import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";
import { WebView } from "react-native-webview";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import { setWatchHistoryMany } from "../../redux";

import config from "../../config/axios_config";
import EpisodeLayout from "./components/EpisodeLayout";
import { externalStyle } from "../../style/externalStyle";
import colors from "../../config/colors";
import Loading from "../Loading";

function Watch(props) {
  const navprops = props.route.params.navigationData;
  const prevscreen = props.route.params.prevScreen;
  const [lines, setLines] = useState(5);
  const [data, setData] = useState(null);
  const [innerLoad, setInnerLoad] = useState(false);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(1);
  const mounted = useRef();

  const episodeHandler = async (data, page) => {
    setInnerLoad(true);
    await config.get(`/watch/${data}`).then((res) => {
      console.log(data);
      setData(res.data);
      setInnerLoad(false);
      setActive(page);
    });
  };
  useEffect(() => {
    let isCancelled = false;
    const load = async () => {
      if (!mounted.current) {
        await config.get(`/watch/${navprops["link"]}`).then((res) => {
          if (!isCancelled) {
            setData(res.data);
            setLoading(false);
            storeData(navprops, prevscreen);
          }
        });
        mounted.current = true;
      }
    };
    load();
    return () => {
      isCancelled = true;
    };
  });
  const checker = (item_list) => {
    let items = item_list;
    let i = 0;
    while (i < items.length) {
      if (items[i]["title"] == navprops["title"]) {
        return true;
      }
      i = i + 1;
    }
    return false;
  };
  const storeData = async (data, screen) => {
    if (screen == "search") {
      if (!checker(props.search_history)) {
        let prevHistory = props.search_history;
        if (prevHistory.length >= 5) {
          prevHistory.pop();
        }
        prevHistory.unshift(data);
        let newHistory = prevHistory;
        try {
          await AsyncStorage.setItem(
            "search_history",
            JSON.stringify(newHistory)
          );
        } catch (e) {
          console.log("Warning set in Watch.js: " + e);
        }
      }
    }

    if (!checker(props.watch_history)) {
      let prevHistory = props.watch_history;
      if (prevHistory.length >= 20) {
        prevHistory.pop();
      }
      prevHistory.unshift(data);

      let newHistory = prevHistory;
      try {
        await AsyncStorage.setItem("watch_history", JSON.stringify(newHistory));
      } catch (e) {
        console.log("Warning set in Watch.js: " + e);
      }
    }
  };

  const information = () => {
    return (
      <>
        <WebView
          scrollEnabled={false}
          style={{ height: 260 }}
          source={{
            uri: data["iframe"],
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/517.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/517.36",
            },
          }}
          allowsFullscreenVideo={true}
        />
        <View style={styles.watch_layout}>
          <Text style={[styles.card_header_category, { paddingTop: 15 }]}>
            {data["title"]}
          </Text>
          <Text style={styles.watch_header_category}>Description</Text>
          <TouchableOpacity
            onPress={() => (lines == 5 ? setLines(0) : setLines(5))}
          >
            <Text numberOfLines={lines}>
              {data["description"] ? data["description"] : "No description"}
            </Text>
          </TouchableOpacity>
          <Text style={styles.watch_header_category}>Other Episodes</Text>
        </View>
      </>
    );
  };
  return loading ? (
    <SafeAreaView style={styles.container}>
      <Loading inner={true} />

      <ScrollView>
        <Image
          style={{ aspectRatio: 16 / 10.55 }}
          source={{ uri: navprops["image"] }}
        />
        <View style={styles.card_header}>
          <Text style={styles.card_header_category}>{navprops["title"]}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      {innerLoad && <Loading inner={true} />}

      <FlatList
        columnWrapperStyle={styles.watch_layout}
        nestedScrollEnabled={true}
        data={data["other_episodes"]}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.watch_episode,
              active == item["title"] && styles.watch_episode_active,
            ]}
            onPress={() => episodeHandler(item["link"], item["title"])}
          >
            <Text
              style={[
                active == item["title"]
                  ? styles.watch_episode_text_active
                  : styles.watch_episode_text,
                { textAlign: "center", fontSize: 13 },
              ]}
            >
              Episode {item["title"]}
            </Text>
          </TouchableOpacity>
        )}
        ListHeaderComponent={information}
        ListFooterComponent={() => <Text></Text>}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  return {
    watch_history: state.history.history,
    search_history: state.search.history,
  };
};

const styles = StyleSheet.create(externalStyle);

export default connect(mapStateToProps, {
  setWatchHistoryMany,
})(Watch);
