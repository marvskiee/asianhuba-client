import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import config from "../../config/axios_config";
import colors from "../../config/colors";
import { externalStyle } from "../../style/externalStyle";
import CardLayout from "../Home/components/CardLayout";
import Loading from "../Loading";

export default function Recommended(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const navprops = props.route.params.navigationData;
  const title = props.route.params.title;

  const mounted = useRef();
  const pageLoad = async (page, isCancelled) => {
    setLoading(true);
    await config.get(`/recommended/${navprops}/${page}`).then((res) => {
      if (!isCancelled) {
        setData(res.data);
        setLoading(false);
        setPage(page);
      }
    });
  };
  useEffect(() => {
    let isCancelled = false;
    const load = async () => {
      if (!mounted.current) {
        pageLoad(1, isCancelled);
        mounted.current = true;
      }
    };
    load();
    return () => {
      isCancelled = true;
    };
  });

  const paginationHandler = async (page) => {
    pageLoad(page);
  };
  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.card_header}>
          <Text style={styles.card_header_category}>{title}</Text>
        </View>

        {data && (
          <View style={[styles.card_layout]}>
            <CardLayout data={{ links: data["links"] }} parent_props={props} />
          </View>
        )}
        <View style={styles.pagination_layout}>
          <Text style={{ fontFamily: "mont" }}>Page: </Text>
          <View style={{ flexDirection: "row" }}>
            {data &&
              data["page"].map((item, index) => (
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
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create(externalStyle);
