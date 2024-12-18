import { FlatList } from "react-native";
import { Category } from "../category";
import { styles } from "./styles";

export type CategoriesProps = {
  id: string,
  name: string, 
}[]

type Props = {
  data: CategoriesProps,
  selected: string,
  onSelect: (id : string) => void //configurando que a seleção tem como um parametro e o não possui retorno (nãko retorna nada) 
}

export function Categories({ data, selected, onSelect } : Props) {
  return (
    //componente para gerar uma lista 
    <FlatList 
      data={ data } // os dados para a lista 
      keyExtractor={(item) => item.id } //setando cada id da lista para saber depois qual foi selecionado
      horizontal //tirando um de baixo do outro e colocando um ao lado do outro
      showsVerticalScrollIndicator = { false } // tirar o scroll da lista
      contentContainerStyle = {styles.content} // passando a estilização do container 
      style={styles.container} //passando a estilização do item
      renderItem={({ item }) => 
        <Category 
          name={item.name} 
          iconId={item.id} 
          onPress={ () => onSelect(item.id)} //Quando for pressionado ele vai colocar na função on select o id do item que foi selecionado
          isSelected={item.id === selected}/>} //Quando o item do id bater com a categoria informada ele vai indicar que foi selecionado 
    />
  );
}