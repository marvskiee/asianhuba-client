import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  FlatList,
} from "react-native";
import { externalStyle } from "../../../style/externalStyle";
const NavigateToDetails = ({ navigation }, data, screen) => {
  navigation.navigate("watch", { navigationData: data, prevScreen: screen });
};
const CardLayout = (props) => {
  return (
    props.data["links"] &&
    props.data["links"].map((item, index) => (
      <TouchableOpacity
        key={index}
        style={styles.card}
        onPress={() =>
          NavigateToDetails(
            props.parent_props,
            {
              image: item["image"],
              link: item["link"],
              title: item["title"],
            },
            props.screen
          )
        }
      >
        {item["episode"] && (
          <Text style={styles.card_episode}>EP {item["episode"]}</Text>
        )}
        <Image style={styles.card_image} source={{ uri: item["image"] }} />
        <Text style={styles.card_title} numberOfLines={2}>
          {item["title"]}
        </Text>
      </TouchableOpacity>
    ))
  );
};

export default CardLayout;
const styles = StyleSheet.create(externalStyle);
