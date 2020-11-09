import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export default function MenuItem(props: any) {
  return (
    <RectButton>
      <View style={styles.menuItem}>
        <Text style={styles.txt}>{props.title}</Text>
        <Image source={require("../images/ico-arrow-down.png")} />
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: "#F3F3F3",
    borderTopColor: "#F3F3F3",
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  txt: {
    fontSize: 12,
    fontWeight: "600",
  },
});
