import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import Footer from "../../components/footer";
import Consult from "../../components/consult";

export default function Consults() {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.nameTitle}>Consultas</Text>
      </View>

      <View style={styles.Navigation}>
        <RectButton style={[styles.button, styles.active]}>
          <Text style={[styles.txt, styles.activeTxt]}>Novas Consultas</Text>
        </RectButton>
        <RectButton style={styles.button}>
          <Text style={styles.txt}>Consultas Realizadas</Text>
        </RectButton>
      </View>

      <Consult cancel="true"></Consult>

      <Consult></Consult>

      <Consult cancel="true"></Consult>

      <Consult></Consult>

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
  Navigation: {
    backgroundColor: "#F5F6F8",
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: '50%',
    backgroundColor: "#F5F6F8",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: "#ECECEC",
    borderWidth: 1,
    borderStyle: 'solid'
  },
  active: {
    backgroundColor: "#FFFFFF",
  },
  activeTxt: {
    color: "#F98C1E"
  },
  txt: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#90A4AE"
  },
});
