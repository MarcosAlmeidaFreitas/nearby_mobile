import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'row', 
    gap: 16,
  },
  details: {
    flex: 1, 
  }, 
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray[600],
  }, 
  description:{
    fontSize: 14,
    fontWeight: 400,
    color: colors.gray[500],
    marginTop: 14,
  }
})