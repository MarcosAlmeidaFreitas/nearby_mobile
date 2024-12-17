import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";


export const styles = StyleSheet.create({
  container:{
    height: 56,
    maxHeight: 56,
    backgroundColor: colors.green.base,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 14,
  },
  title:{
    color: colors.gray[100],
    fontWeight: '600',
    fontSize: 16
  },
});