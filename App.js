// REDUX
import { Provider } from "react-redux";
import store from "./redux/store";

import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import History from "./components/History";
import HistoryHeaderRight from "./components/History/components/HistoryHeaderRight";
import { useFonts } from "expo-font";

import HomeHeaderLeft from "./components/Home/components/HomeHeaderLeft";
import HomeHeaderRight from "./components/Home/components/HomeHeaderRight";
import Watch from "./components/Watch";
import Search from "./components/Search";
import SearchHeaderRight from "./components/Search/components/SearchHeaderRight";
import Recommended from "./components/Recommended";
import RecommendedHeaderLeft from "./components/Recommended/components/RecommendedHeaderRight";
import WatchHeaderRight from "./components/Watch/components/WatchHeaderRight";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [loaded] = useFonts({
    mont: require("./assets/fonts/mont-heavy.otf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            title="DramaKrazy"
            name="home"
            component={Home}
            options={(props) => ({
              title: "",
              headerStyle: styles.header_style,
              headerLeft: () => <HomeHeaderLeft {...props} />,
              headerRight: () => <HomeHeaderRight {...props} />,
            })}
          />
          <Stack.Screen
            title="Watch"
            name="watch"
            component={Watch}
            options={(props) => ({
              title: "Watch",
              headerTitleStyle: styles.header_style,
              headerRight: () => <WatchHeaderRight {...props} />,
            })}
          />
          <Stack.Screen
            title="Search"
            name="search"
            component={Search}
            options={(props) => ({
              title: "",
              headerStyle: styles.header_style,
              headerRight: () => <SearchHeaderRight {...props} />,
            })}
          />
          <Stack.Screen
            title="Recommended"
            name="recommended"
            component={Recommended}
            options={(props) => ({
              title: "",
              headerRight: () => <RecommendedHeaderLeft {...props} />,
            })}
          />
          <Stack.Screen
            title="History"
            name="history"
            component={History}
            options={(props) => ({
              title: "Watch History",
              headerTitleStyle: styles.header_style,
              headerRight: () => <HistoryHeaderRight {...props} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header_style: {
    fontFamily: "mont",
    fontSize: 18,
  },
});
