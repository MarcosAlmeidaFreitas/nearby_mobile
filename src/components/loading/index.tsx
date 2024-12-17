import { ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

export function Loading(){
  return(
    //é um componente usado para demonstrar que carregado.
    <ActivityIndicator color={colors.green.base} style={styles.container} />
  )
}


