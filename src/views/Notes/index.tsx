import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Footer from "../../components/footer";
import Message from "../../components/message";

export default function Notes() {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.nameTitle}>Notificações</Text>
      </View>

      <Message checked="true" />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#ffffff"
  },
  nameTitle: {
    textAlign: "right",
    fontSize: 24,
    fontWeight: "500",
    color: "#37474F",
    marginTop: 20
  },
});
