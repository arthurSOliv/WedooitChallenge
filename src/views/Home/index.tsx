import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Footer from "../../components/footer";
import MenuItem from "../../components/menuItem";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Image source={require("../../images/Combined-Shape.png")} />
        <View>
          <Text style={styles.bomdia}>Bom dia</Text>
          <Text style={styles.nameTitle}>Arthur Oliveira</Text>
        </View>
      </View>

      <View style={styles.enquete}>
        <View style={styles.enqueteLft}>
          <Image
            style={styles.enqueteImg}
            source={require("../../images/prancheta.png")}
          />
          <Text style={styles.enqueteTxt}>
            Responda a enquete de pos atendimento
          </Text>
        </View>
        <RectButton style={styles.enqueteBtn}>
          <Text style={styles.enqueteBtnTxt}>RESPONDER</Text>
        </RectButton>
      </View>
      <View style={styles.shadow}></View>

      <View style={styles.consultsBox}>
        <View style={styles.consultsHeader}>
          <Text style={styles.chTxt}>Próximas Consultas</Text>
          <RectButton>
            <Text style={styles.enqueteBtnTxt}>Ver todos {">"}</Text>
          </RectButton>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderLft}>
              <Image
                style={styles.cardHeaderLftImg}
                source={require("../../images/basic_calendar.png")}
              />
              <Text style={styles.cardHeaderLftTxt}>14/02/2015</Text>
            </View>
            <Text style={styles.cardHeaderLftTxt}>10:00</Text>
          </View>
          <View style={styles.cardBody}>
            <View style={styles.cardBodyLft}>
              <Image
                style={styles.cardBodyLftImg}
                source={require("../../images/Mask.png")}
              />
              <Text style={styles.cardBodyLftTxt}>Dr. Victor Melo de sá</Text>
            </View>
            <View style={styles.cardBodyRgt}>
              <Image
                style={styles.cardBodyRgtImg}
                source={require("../../images/noun_Pin_1200000.png")}
              />
              <Text style={styles.cardBodyRgtTxt}>Afogados Recife/Pe</Text>
            </View>
          </View>
        </View>
        <MenuItem title="IMUNOTERAPIA"></MenuItem>
        <MenuItem title="DOCUMENTOS"></MenuItem>
      </View>

      <View style={styles.blog}>
        <View style={styles.blogHeader}>
          <Text>Blog</Text>
          <RectButton>
            <Text style={styles.enqueteBtnTxt}>VISITAR BLOG {">"}</Text>
          </RectButton>
        </View>
        <View style={styles.blogBody}>
          <Image source={require("../../images/alimentos.png")} />
          <View style={styles.blogBodyTxtBox}>
            <Text style={styles.blogBodyTxtBoxTxt}>O que é reação adversa a alimentos?</Text>
            <Image source={require("../../images/ico-arrow-down.png")} />
          </View>
        </View>
      </View>

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
  bomdia: {
    textAlign: "right",
    fontSize: 18,
    fontWeight: "300",
    color: "#90A4AE",
  },
  nameTitle: {
    textAlign: "right",
    fontSize: 24,
    fontWeight: "500",
    color: "#37474F",
  },
  enquete: {
    backgroundColor: "#F98C1E",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  enqueteLft: {
    backgroundColor: "#F98C1E",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  enqueteImg: {
    width: 43,
    height: 43,
  },
  enqueteTxt: {
    maxWidth: 140,
    fontSize: 13,
    color: "#FFFFFF",
    fontWeight: "500",
    marginLeft: 10,
  },
  enqueteBtn: {
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  enqueteBtnTxt: {
    color: "#F98C1E",
  },

  shadow: {
    backgroundColor: "#F5F6F8",
    height: 12,
  },

  consultsBox: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#ffffff"
  },
  consultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20
  },
  chTxt: {
    fontSize: 16,
    fontWeight: "600",
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
    padding: 10,
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
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
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

  blog: {
    backgroundColor: "#F5F6F8",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  blogHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  blogBody: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  blogBodyTxtBox: {
    backgroundColor: "#ffffff",
    width: '70%',
    height: '100%',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  blogBodyTxtBoxTxt: {
    width: 160,
    color: "#7A848D"
  }
});
