//lista dos componente da primeira tela.
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Step } from "../step";
//foi usado a biblioteca tablerIcons, porem ela quebrou o expo com o npm, então tive que instalar com pnpm
import { IconMapPin, IconQrcode, IconTicket } from '@tabler/icons-react-native';

export function Steps(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona:</Text>
      
      <Step
        icon={IconMapPin}
        title="Encontre estabelecimentos" 
        description="Veja locais perto de você que são parceiros Nearby">
      </Step>
      
      <Step
        icon={IconQrcode}
        title="Ative o seu cupom com o QR Code" 
        description="Escanei o código no estabelecimento para usar o beneficio">
      </Step>

      <Step
        icon={IconTicket}
        title="Garanta as vantagens perto de você" 
        description="Ative os cupons aonde estiver, em diferentes tipos de estabelecimento">
      </Step>

    </View>
  );
}