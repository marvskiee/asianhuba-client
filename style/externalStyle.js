import { StyleSheet, Dimensions } from "react-native";
import colors from "../config/colors";
const windowWitdh = Dimensions.get("window").width / 3;

export const externalStyle = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card_layout: {
    flex: 1,
    marginHorizontal: 2,
    flexWrap: "wrap",
    // justifyContent: "center",
    // backgroundColor: "red",
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 5,
  },
  card: {
    position: "relative",
    margin: 5,
    width: windowWitdh - 12,
  },
  card_image: {
    borderRadius: 5,
    width: "100%",
    height: 180,
  },
  card_episode: {
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    paddingVertical: 3,
    color: "#fff",
    paddingHorizontal: 8,
    backgroundColor: "rgba(1,1,1,.5)",
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
    fontSize: 12,
  },
  card_title: {
    fontSize: 12,
    color: "#000",
    textAlign: "center",
    paddingVertical: 5,
  },
  card_header: {
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card_header_category: {
    fontFamily: "mont",
    fontSize: 17,
  },
  card_header_more: {
    fontSize: 13,
    color: colors.pink,
    padding: 5,
  },
  search_history_layout: {
    minHeight: 150,
  },
  search_history: {
    padding: 10,
  },
  search_recommended_layout: {
    padding: 10,
  },
  search_recommended: {
    paddingVertical: 8,
    flex: 1,
    flexDirection: "row",
  },
  search_recommended_header: {
    fontFamily: "mont",
    fontSize: 15,
  },
  pagination_layout: {
    margin: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pagination: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: colors.lightgray,
  },
  watch_layout: { paddingHorizontal: 10 },
  watch_header_category: {
    fontFamily: "mont",
    color: colors.pink,
    // backgroundColor: "red",
    fontSize: 15,
    marginVertical: 15,
  },
  watch_episode: {
    margin: 2,
    flex: 1,
    textAlign: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: colors.lightgray,
  },
  watch_episode_active: {
    backgroundColor: colors.pink,
  },
  watch_episode_text: {
    color: "#000",
  },
  watch_episode_text_active: {
    color: "#fff",
  },
};
