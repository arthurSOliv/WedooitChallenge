import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { abs } from "react-native-reanimated";
// import { Feather as Icon, FontAwesome } from '@expo/vector-icons';

export default function MenuItem(props: any) {

  const navigation = useNavigation();

  function handleNavigateHome() {
    navigation.navigate('Home');
  }
  function handleNavigateConsults() {
    navigation.navigate('Consults');
  }
  function handleNavigateNotes() {
    navigation.navigate('Notes');
  }
  function handleNavigateConfig() {
    navigation.navigate('Config');
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.footer}>
        <RectButton style={styles.footerLink} onPress={handleNavigateHome}>
          <Image source={require("../images/basic_home.png")} />
        </RectButton>
        <RectButton style={styles.footerLink} onPress={handleNavigateConsults}>
          <Image source={require("../images/basic_calendar.png")} />
        </RectButton>
        <RectButton style={styles.footerLink} onPress={handleNavigateNotes}>
          <Image source={require("../images/music_bell.png")} />
        </RectButton>
        <RectButton style={styles.footerLink} onPress={handleNavigateConfig}>
          <Image source={require("../images/up.png")} />
        </RectButton>
      </View >
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginTop: 20,
    height: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  footerLink: {
    height: '100%',
    width: '30%',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center"
  }
});
