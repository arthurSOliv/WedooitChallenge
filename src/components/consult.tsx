import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export default function Consult(props: any) {
  let button;
  if (props.cancel) {
    button = <Text style={styles.txtCancel}>Cancelada</Text>
  } else {
    button = <RectButton style={styles.button}><Text style={styles.txt}>CANCELAR</Text></RectButton>
  }
  return (
    <View>
      <View style={styles.consult}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderLft}>
              <Image
                style={styles.cardHeaderLftImg}
                source={require("../images/basic_calendar.png")}
              />
              <Text style={styles.cardHeaderLftTxt}>14/02/2015 | 10:20</Text>
            </View>
            <View style={styles.cardHeaderRgt}>
              <Image
                style={styles.cardBodyRgtImg}
                source={require("../images/noun_Pin_1200000.png")}
              />
              <Text style={styles.cardBodyRgtTxt}>Afogados Recife/Pe</Text>
            </View>
          </View>
          <View style={styles.cardBody}>
            <View style={styles.cardHeaderLft}>
              <Image
                style={styles.cardBodyLftImg}
                source={require("../images/Mask.png")}
              />
              <Text style={styles.cardBodyLftTxt}>Dr. Victor Melo de sá</Text>
            </View>
            <View style={styles.cardBodyRgt}>
              {button}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  consult: {
    padding: 20,
    borderColor: "#F3F3F3",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    marginBottom: 20
  },
  card: {
    marginTop: 15,
    borderColor: "#ECECEC",
    borderWidth: 1,
    marginBottom: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  cardHeaderLft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardHeaderLftImg: {
    marginRight: 10,
  },
  cardHeaderLftTxt: {
    color: "#90A4AE",
    fontSize: 13,
    fontWeight: "400",
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F2F2F5",
  },
  cardBodyLft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardBodyRgt: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
  },
  cardHeaderRgt: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderColor: "#ECECEC",
    borderWidth: 1,
  },
  cardBodyLftImg: {
    marginRight: 10,
  },
  cardBodyLftTxt: {
    color: "#90A4AE",
    fontSize: 13,
    fontWeight: "400",
  },
  cardBodyRgtImg: {
    marginRight: 10,
  },
  cardBodyRgtTxt: {
    color: "#90A4AE",
    fontSize: 13,
    fontWeight: "400",
  },
  button: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: "#ECECEC",
    borderWidth: 1,
    borderStyle: 'solid'
  },
  txt: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#FF6F00"
  },
  txtCancel: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#FF6565"
  }
});
