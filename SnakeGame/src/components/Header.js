import React from "react";
import ( StyleSheet, Text, TouchableOpacity, View ) from "react-native";
import (f colors ) from "../styles/theme";
import ( HEADER HEIGHT ) from "../consts";
import Ionicons from "Qexpo/vector-icons/Ionicons";
6

7 const Header = (ftop, score, paused, pause, reload)) => (
8

9 const styleHeader = (f

10 height: HEADER HEIGHT + top,

11 backgroundColor: colors.p4,

12 paddingTop: top,

E) paddingHorizontal: 20,

14 b"

15

16 return (

17 <View style=([styleHeader, styles .header])>
18 <TouchableOpacity onPress=freload)>

19 <Ionicons name="reload" size=(26) color=fcolors.p6) />
20 </TouchableOpacity>

21 <TouchableOpacity onPress=fípause)>

22 <Ionicons

23 name=fpaused ? "play" : "pause")

24 size=(26)

25 color=fcolors.p6)

26 >

27 </TouchableOpacity>

28 <Text style=(styles.score)>(score)</Text>
29 </View>

30 )

31 |)

EV

33 const styles = StyleSheet.create(f

E header: f

EL) flexDirection: "row",

Elo) alignItems: "center",

37 justifyContent: "space-between",

38 ”

E) score: f

40 color: colors.p6,

41 fontSize: 20,

42 fontWeight: "bold",

43 ”

44 XY);

45

46 export default Header