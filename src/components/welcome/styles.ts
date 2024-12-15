import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";


export const styles = StyleSheet.create({
  logo:{
    width: 48,
    height: 48,
    marginTop: 24,
    marginBottom: 28
  },
  title: {
    fontSize: 24, 
    fontWeight: "700",
    color: colors.gray[600],
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray[500],
    fontWeight: '400',
    marginTop: 12,
  }
});