//Stack é um gerenciador de rotas do expo pq ela vai carregar antes de qualquer página passando as config de layout
import { Stack } from "expo-router";
import { colors } from "@/styles/colors";


export default function Index(){
  return(
    <Stack
      //passando as config de layout
      screenOptions={{
        //quando utilizamos o stack ele cria um cabeçalho na tela, então passamos o headerShown como false
        //para retirar
        headerShown: false,
        contentStyle: { backgroundColor: colors.gray[100] }
      }} 
    />   
  )
}