import { useRef } from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { Place, PlaceProps } from '../place';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { styles } from './styles';

type Props = {
 data: PlaceProps[],
}

export function Places({ data } : Props ){
  // Para usar a dimensão da tela 
  const dimensions = useWindowDimensions();
  // para usar as propriedades do bottomSheet como por exemplo o close
  const BottomSheetRef = useRef<BottomSheet>(null);

  //setando as dimensões máximas e mínimas do componente
  const snapPoints = {
    min: 278,
    max: dimensions.height - 128,
  }

  return(
    <BottomSheet ref={BottomSheetRef} 
      snapPoints={[snapPoints.min, snapPoints.max]} 
      handleIndicatorStyle={styles.indicator}
      backgroundStyle={ styles.container }  
      enableOverDrag={ false } 
    >
      <BottomSheetFlatList
        data={ data }
        keyExtractor={ (item) => item.id }
        renderItem={({ item }) => <Place data={ item } />}
        contentContainerStyle = {styles.content}
        ListHeaderComponent={() => (
          <Text style={styles.title}>Explore locais perto de você</Text>
        )}
        showsVerticalScrollIndicator = { false } 
      />
    </BottomSheet>
  ) 
}