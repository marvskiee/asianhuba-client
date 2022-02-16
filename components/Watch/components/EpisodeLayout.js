// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   FlatList,
// } from "react-native";
// import config from "../../../config/axios_config";
// import colors from "../../../config/colors";

// const windowWidth = Dimensions.get("window").width / 3;
// const EpisodeLayout = (props) => {
//   const episodeHandler = async (data) => {
//     props.loading(true);
//     await config.get(`/watch/${data}`).then((res) => {
//       console.log(data);
//       //   setData(res.data);
//       props.state_setter(res.data);
//       props.loading(false);

//       //   setLoading(false);
//     });
//   };
//   return (
//     // <View style={styles.layout}>
//     //   {props.episode &&
//     //     props.episode.map((item, index) => (
//     //       <TouchableOpacity
//     //         style={[styles.items, props.active == item["title"]]}
//     //         key={index}
//     //         onPress={() => episodeHandler(item["link"])}
//     //       >
//     //         <Text style={{ textAlign: "center", fontSize: 13 }}>
//     //           Episode {item["title"]}
//     //         </Text>
//     //       </TouchableOpacity>
//     //     ))}
//     // </View>

//   );
// };
// const styles = StyleSheet.create({
//   layout: {
//     // flex: 1,
//     marginVertical: 15,
//     // flexWrap: "wrap",
//     // flexDirection: "row",
//   },
//   active: {
//     backgroundColor: colors.pink,
//     color: "#fff",
//   },
//   items: {
//     // width: windowWidth - 15,
//     margin: 2,
//     textAlign: "center",
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     backgroundColor: colors.lightgray,
//   },
// });
// export default EpisodeLayout;
