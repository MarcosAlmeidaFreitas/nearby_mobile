//Invenção minha, kkkkk, foi feito com componente de loading mais o texto carregando.
import { ActivityIndicator, View, Text } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

export function Loading(){
  return(
    <View style={styles.container}>
      <ActivityIndicator color={colors.green.base} size={25} />
      <Text style={styles.title}>Carregando...</Text>
    </View>
  )
}


