import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const DATA = [
  {
    id: '1',
    image: require('./assets/ca_nau_lau.png'), // replace with your image URL
    name: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Shop Devang',
  },
  {
    id: '2',
    image: require('./assets/ga_bo_toi.png'),
    name: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
  },
  {
    id: '3',
    image: require('./assets/xa_can_cau.png'),
    name: 'Xe cần cẩu đa năng',
    shop: 'Thế giới đồ chơi',
  },
  {
    id: '4',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
    name: 'Đồ chơi dạng mô hình',
    shop: 'Thế giới đồ chơi',
  },
  {
    id: '5',
    image: require('./assets/lanh_dao_gian_don.png'),
    name: 'Lãnh đạo giản đơn',
    shop: 'Minh Long Book',
  },
  {
    id: '6',
    image: require('./assets/hieu_long_con_tre.png'),
    name: 'Hiểu lòng con trẻ',
    shop: 'Minh Long Book',
  },
  {
    id: '7',
    image: require('./assets/trump 1.png'),
    name: 'Donald Trump',
    shop: 'Minh Long Book',
  },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        source={
          typeof item.image === 'string'
            ? { uri: item.image }
            : item.image
        }
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.shopName}>{item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shopName: {
    fontSize: 14,
    color: '#666',
  },
  chatButton: {
    backgroundColor: '#ff0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  chatText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;