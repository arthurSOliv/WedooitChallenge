import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import Footer from "../../components/footer";
import MenuItem from "../../components/menuItem";

export default function Config() {
  return (
    <ScrollView>
      <View style={styles.box}>
        <View style={styles.header}>
          <Image
            source={require("../../images/luiz-paulo-valenca-clovinho-happy-final.png")}
          />
          <Text style={styles.name}>Arthur de Souza</Text>
          <Text style={styles.email}>arthurso93@gmail.com</Text>
        </View>

        <View style={styles.label}>
          <Text style={styles.labelTxt}>Meus Dados</Text>
        </View>

        <View style={styles.menu}>
          <MenuItem title="ALTERAR MEUS DADOS"></MenuItem>
          <MenuItem title="MEUS PLANOS"></MenuItem>
          <MenuItem title="ALTERAR SENHA"></MenuItem>
          <MenuItem title="DEPENDENTES"></MenuItem>
        </View>
      </View>
      <Footer />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    paddingBottom: 40
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 50
  },
  name: {
    fontSize: 24,
    fontWeight: "500"
  },
  email: {
    fontSize: 14,
    color: "#7A848D"
  },
  label: {
    backgroundColor: "#F6F4F8",
    padding: 12,
    paddingLeft: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  labelTxt: {

  },
  menu: {
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20
  }
});
