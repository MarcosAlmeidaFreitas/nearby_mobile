/* Estamos criando um botão com o TouchableOpacity que ele fica mais opaco quando o usuário clica.
Nele vamos criar um container que é o botão e depois vai ser criado uma função de title que retorna 
o componente de texto que depois é atribuído ao botão */

import { TouchableOpacity, TouchableOpacityProps, Text, TextProps, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { colors } from '@/styles/colors';
// a importação foi renomeada para podermos utilizar a palavra reservada. 
import { IconProps as TableIconsProps } from '@tabler/icons-react-native'

//com essa tipagem vamos conseguir trocar o componente para carregando quando precisarmos, 
// pois ela não é definida pelo TouchableOpacityProps mas como precisamos dele tambem ultilazamos e & para
// criar outra propriedade do botão  
type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
}

function Button({ children, style, isLoading = false, ...rest } : ButtonProps){
  return(
    //passando o colchete, e definindo uma variável de estilo podemos passar um estilo por
    // fora do componente alterando o estilo principal    
    <TouchableOpacity style={[ styles.container, style ]} activeOpacity={0.6} disabled={isLoading} {...rest}>
      {/* se caso o isLoading for true ele vai carregar o active indicator se for false ele
       carrega o children */}
      { isLoading ? <ActivityIndicator size={'small'} color={colors.gray[100]}/> : children }
    </TouchableOpacity>
  );
}

//é pego uma propriedade do componente de texto que é o children (filho) aonde podemos inserir o texto. 
function Title({ children } : TextProps){
  //utilizamos o colchete para o componente receber não so a estilização do container, 
  // mas receber uma estilização de fora também
  return <Text style={styles.title}>{ children }</Text>
}


//definindo a característica de icon props que ele vai receber um componente que é do react com o estilo TableIconProps
type IconProps = {
  icon: React.ComponentType<TableIconsProps>
}

function Icon({icon : Icon } : IconProps){
  return <Icon size={24} color={colors.gray[100]} />
}

//atribuindo uma nova função ao botão.
Button.Title = Title;
Button.Icon = Icon

export { Button };