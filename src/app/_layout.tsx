//Stack é um gerenciador de rotas do expo pq ela vai carregar antes de qualquer página passando as config de layout
import { Stack } from "expo-router";
import { colors } from "@/styles/colors";
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        //passando as config de layout
        screenOptions={{
          //quando utilizamos o stack ele cria um cabeçalho na tela, então passamos o headerShown como false
          //para retirar
          headerShown: false,
          contentStyle: { backgroundColor: colors.gray[100] }
        }}
      />
    </GestureHandlerRootView>
  )
}