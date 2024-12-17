//cada componente da lista da primeira interface, com icone, texto e do texto da descrição.
import { Text, View } from 'react-native';
import { colors } from '@/styles/colors';
import { IconProps } from '@tabler/icons-react-native';
import { styles } from './styles';

//criando a tipagem do componente, dizendo que ele vai receber um titulo uma descrição e um ícone
type Props = {
  title : string,
  description: string,
  //aqui como vai receber um componente que é um icone ele tem que receber um componente do react 
  // com a propriedade IconeProps que é uma propriedade dos icones da biblioteca.
  icon: React.ComponentType<IconProps>
}

export function Step({ title, description, icon: Icon } : Props){
  return (
    <View style={styles.container}>
      {/* Colocando dentro da chaves e usando o && impede que se ele não achar o ícone de não renderizar a tela */}
      { Icon && <Icon size={32} color={colors.red.base}/>} 
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}