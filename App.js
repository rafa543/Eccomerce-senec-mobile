import * as React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'FS - Nike Air Max 270 React',
    image: 'https://fieroshop.vteximg.com.br/arquivos/ids/172882-500-500/tenis-knit-masculino-cinza-maleavel-.jpg?v=637835541402230000',
    preco: '$299,70',
    oldPreco: '$534,33',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Quilted Maxi Cros',
    image: 'https://d87n9o45kphpy.cloudfront.net/Custom/Content/Products/25/85/2585197_tenis-moleca-flatform-detalhe-trama-branco-5170963_s4_637825251979298126.jpg',
    preco: '$299,70',
    oldPreco: '$534,33',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'NIke Air Force 1',
    image: 'https://static.zattini.com.br/produtos/tenis-nike-air-max-intrlk-lite-feminino/72/2IC-6028-172/2IC-6028-172_zoom1.jpg?ts=1646398003',
    preco: '$299,70',
    oldPreco: '$534,33',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Chuteira Futsal Nike Beco 2 - Adulto',
    image: 'https://imgcentauro-a.akamaihd.net/230x230/9714725G.jpg',
    preco: '$299,70',
    oldPreco: '$534,33',
  },
  {
    id: '586d94a0f-3da1-471f-bd96-145571e29d72',
    title: 'Tênis Nike Downshifter 11',
    image: 'https://d87n9o45kphpy.cloudfront.net/Custom/Content/Products/25/98/2598258_tenis-nike-revolution-6-esportivo-feminino-tecido-branco-5172073_s1_637824327286110514.jpg',
    preco: '$299,70',
    oldPreco: '$534,33',
  },
  {
    id: '586d94a0f-3da1-471f-bd96-145571e29d72',
    title: 'Tênis Nike ZoomX Invincible Run Flyknit 2',
    image: 'https://imgcentauro-a.akamaihd.net/230x230/97306631.jpg',
    preco: '$299,70',
    oldPreco: '$534,33',
  },
];

const categorias = [
  {
    nome: 'Man Shirt',
    preco: '12',
  },
];
const Separator = () => <View style={styles.separator} />;

const Item = ({ data }) => (
  <TouchableOpacity style={styles.item} onPress={() => Alert.alert("Sem produto no estoque😢!")}>
    <Image
      style={styles.logo}
      source={{
        uri: data.image,
      }}
    />
    <Text style={styles.title}>{data.title}</Text>
    <Text style={styles.valor}>{data.preco}</Text>
    <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '100%', paddingHorizontal: 20 }}>
      <Text style={styles.oldPreco}>{data.oldPreco}</Text>
      <Text style={styles.desconto}>24% Off</Text>
    </View>
  </TouchableOpacity>
);

const Category = ({ data }) => (
  <>
    <TouchableOpacity style={styles.categoryStyle}>
      <View style={styles.categoryButton}>
        <Ionicons name="shirt-outline" size={24} color="#40BFFF" />
      </View>
      <Text style={styles.textCategory}>Man Shirt</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.categoryStyle}>
      <View style={styles.categoryButton}>
        <MaterialCommunityIcons name="shoe-ballet" size={24} color="#40BFFF" />
      </View>
      <Text style={styles.textCategory}>Dress</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.categoryStyle}>
      <View style={styles.categoryButton}>
        <MaterialCommunityIcons
          name="bag-suitcase-outline"
          size={24}
          color="#40BFFF"
        />
      </View>
      <Text style={styles.textCategory}>Man Work</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.categoryStyle}>
      <View style={styles.categoryButton}>
        <SimpleLineIcons name="handbag" size={24} color="#40BFFF" />
      </View>
      <Text style={styles.textCategory}>Woman Bag</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.categoryStyle}>
      <View style={styles.categoryButton}>
        <MaterialCommunityIcons name="shoe-cleat" size={24} color="#40BFFF" />
      </View>
      <Text style={styles.textCategory}>Man Shoes</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.categoryStyle}>
      <View style={styles.categoryButton}>
        <MaterialCommunityIcons name="shoe-heel" size={24} color="#40BFFF" />
      </View>
      <Text style={styles.textCategory}>High Hells</Text>
    </TouchableOpacity>
  </>
);

export default function App() {
  const renderItem = ({ item }) => <Item data={item} />;
  const categoryItem = ({ item }) => <Category data={item} />;
  const Separator = () => <View style={styles.separator} />;

  return (
    <>
      <StatusBar backgroundColor="#7dccf8"
        barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.statusBar}>
          <Text style={styles.statusBarText}>Eccomerce</Text>
        </View>

        <View style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center', 
          marginHorizontal: 20,
          marginVertical: 15
        }}>
          <TextInput style={styles.input} inlineImageLeft="search_icon" placeholder={'Buscar produtos…'} />
          <AntDesign name="hearto" size={24} color="#9098B1" />
          <Feather name="shopping-cart" size={24} color="#9098B1" />
        </View>

        <Text style={styles.header}>Categorias</Text>
        <View style={styles.fixToText}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categorias}
            renderItem={categoryItem}
            keyExtractor={(item) => item.nome}
          />
        </View>

        <Text style={styles.header}>Promoções</Text>
        <View
          style={{ flex: 1, paddingHorizontal: 10, justifyContent: 'center' }}>
          <FlatList
            numColumns={2}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '75%',
    borderRadius: 5,
    borderWidth: 2,
    padding: 10,
    borderColor: '#EBF0FF',
  },
  valor: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#40bfff',
    marginRight: 55
  },
  statusBar: {
    backgroundColor: '#7dccf8',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginBottom: 5,
  },
  statusBarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#223263',
  },
  categoryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    width: 70,
    height: 70,
    borderRadius: 66,
    borderColor: '#EBF0FF',
    borderWidth: 1,
    backgroundColor: 'trasnparent',
  },
  categoryStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30,
  },
  textCategory: {
    color: '#9098b1'
  },
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    maxWidth: '45%',
    borderRadius: 15,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 10,
    borderColor: '#EBF0FF',
    borderWidth: 2,
  },
  title: {
    fontSize: 15,
    color: '#223263',
    fontWeight: 'bold',
    marginHorizontal: 5,
    marginBottom: 10,
    width: '75%',
    height: 60
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 5,
  },
  fixToText: {
    marginHorizontal: '5%',
    marginVertical: 20,
    minWidth: '10%',
    textAlign: 'center',
  },
  separator: {
    marginBottom: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  oldPreco: {
    textDecorationLine: 'line-through',
    color: '#9098B1',
  },
  desconto: {
    color: '#fb7181',
    fontWeight: 'bold'
  }
});
