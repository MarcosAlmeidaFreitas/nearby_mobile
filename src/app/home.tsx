import { Alert, Text, View } from "react-native";
import { api } from '@/service/api';
import { useEffect, useState } from "react";
import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";

type MarketsProps = PlaceProps & {

}


export default function Home(){
  //para exibir em tela, conteúdo real, atualizado nós devemos utilizar um estado.
  const [ categories, setCategories ] = useState<CategoriesProps>([]);
  const [ category, setCategory ] = useState("");
  //aqui você está usando o estado criando um list de MarketsProps[] e definindo ele como vazio dentro do parentes
  const [ markets, setMarkets ] = useState<MarketsProps[]>([]);
  
  //Função para obter as categorias do banco para colocar na lista para exibir na tela.
  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategory(data[0].id);  
    } catch ( error ) {
      console.log(error);
      Alert.alert("Erro em Categorias", "Não foi possível carregar as categorias.");
    }
  }

  async function fetchMarkets() {
    try {
      //se caso não tiver nenhuma categoria ele não vai retornar nada.
      if(!category){
         return 
      }

      const { data } = await api.get("/markets/category/" + category);
      setMarkets(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Locais", "Não foi possível carregar os locais.")
    }
  }


  //com a função useEffect toda vez que a tela for carregada ele vai disparar a função.
  useEffect(() => {
    fetchCategories();
  }, []);

  //nesse caso o useEffect só deve carregar depois que o outro use Effect carregar
  //por isso passamos dentro do colchetes a categoria
  useEffect(() => {
    fetchMarkets();
  }, [category]) 

  return (
    <View style={{ flex: 1 }}>
      <Categories data={categories} onSelect={setCategory} selected={category}/>

      <Places data={markets} />
    </View>
  );
}