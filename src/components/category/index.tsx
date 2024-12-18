import { Text, Pressable, PressableProps } from "react-native";
import { styles } from "./styles";
import { categoriesIcons } from "@/utils/categories-icons";
import { colors } from "@/styles/colors";

type Props = PressableProps & {
  name: string
  iconId: string,
  isSelected?: boolean,
}

export function Category({ name, iconId, isSelected = false, ...rest }: Props ) {
  const Icon = categoriesIcons[iconId];
  return (
    //para adicionarmos um estilização de acordo com uma selecão basta colocar a condição e depois dois &&
    <Pressable style={[styles.container, isSelected && styles.containerSelected]} {...rest}>
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[styles.name, isSelected && styles.nameSelected]}> {name} </Text>
    </Pressable>
  );
}