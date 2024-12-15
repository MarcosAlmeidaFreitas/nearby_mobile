import { Text, View } from 'react-native';
import { colors } from '@/styles/colors';
import { IconProps } from '@tabler/icons-react-native'
import { styles } from './styles';

type Props = {
  title : string,
  description: string,
  icon: React.ComponentType<IconProps>
}

export function Step({ title, description, icon: Icon } : Props){
  return (
    <View style={styles.container}>
      {/* Colocando dentro da chaves e usando o && impede que se ele não achar o ícone de não renderizar a tela */}
      { Icon && <Icon size={32} />} 
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}