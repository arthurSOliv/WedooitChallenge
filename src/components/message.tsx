import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Message(props: any) {
  let icon;
  if (props.checked) {
    icon = <View style={styles.check}></View>
  } else {
    icon = ''
  }

  return (
    <View style={styles.box}>
      <Text style={styles.title}>{icon} Há 43 minutos</Text>
      <Text style={styles.message}>Olá sua consulta foi remarcada com sucesso</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 20,
    backgroundColor: "#fff",
    marginBottom: 20
  },
  title: {
    fontSize: 12,
  },
  message: {
    fontSize: 14,
    color: "#7A848D"
  },
  check: {
    backgroundColor: "#A6CE39",
    width: 8,
    height: 8,
    borderRadius: 8 / 2
  }
});
