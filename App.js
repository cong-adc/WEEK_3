import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';

export default function App() {

  const price = 140000
  const [count, setCount] = React.useState(1);
  const [voucher, setVoucher] = React.useState(0);
  const [valueVoucher, setValueVoucher] = React.useState("");

  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    setCount(Math.max(1, count - 1));
  }

  const handleVoucher = () => {
    if(valueVoucher === "gaga") {
      setVoucher(20000)
      alert(" dung")
    } else {
      alert("Khong dung")
    }
  }


  return (
    <SafeAreaView>
      <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.top__content}>
          <Image source={require('./assets/book.png')} style={{ height: 170, width: 110, resizeMode: 'cover' }} />
          <View style={styles.top_right}>
            <Text style={{ marginBottom: 10, fontSize: 16, fontWeight: 'bold' }}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={{ marginBottom: 10, fontSize: 14, fontWeight: 'bold' }}>Cung cấp bởi Tiki Trading</Text>
            <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: 'bold', color: 'red' }}>{price * count} đ</Text>
            <Text style={{ marginBottom: 10, fontSize: 16, fontWeight: 'bold', textDecorationLine: 'line-through' }}>140000 đ</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableHighlight underlayColor="white" onPress={decreaseCount}>
                  <View style={styles.button}>
                    <Text style={{ textAlign: 'center' }}>-</Text>
                  </View>
                </TouchableHighlight>
                <Text style={{ marginLeft: 10 }}>{count}</Text>
                <TouchableHighlight underlayColor="white" onPress={increaseCount}>
                  <View style={[styles.button, { marginLeft: 10 }]}>
                    <Text style={{ textAlign: 'center' }}>+</Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View><Text style={{ color: '#134FEC', fontSize: 17, fontWeight: 'bold', marginRight: 10 }}>Mua sau</Text></View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Mã giảm giá đã lưu</Text>
          <Text style={{ color: '#134FEC', fontSize: 16, fontWeight: 'bold', marginLeft: 10, }}>Xem tại đây</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 40, flex: 1 }}>
          <TextInput style={{ borderWidth: 1, height: 50, flex: 0.6, paddingLeft: 10 }} placeholder="Ma giam gia" 
          
          onChangeText={(t) => setValueVoucher(t)}/>
          <TouchableHighlight underlayColor="white" style={{ flex: 0.4 }} onPress={handleVoucher}>
            <View style={{ backgroundColor: '#0A5EB7', height: 50, marginLeft: 20 }}>
              <Text style={{ textAlign: 'center', lineHeight: 50, color: 'white', fontSize: 20, paddingLeft: 10, paddingRight: 10 }}>Áp dụng</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <View
        style={{
          height: 15,
          width: "100%",
          backgroundColor: '#DDDDDD',
        }}
      />
      <View style={{ justifyContent: "center", flexDirection: 'row', height: 80, alignItems: 'center' }}>
        <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <Text style={{ color: 'blue', fontSize: 14, fontWeight: 'bold', marginLeft: 20 }}>Nhập tại đây?</Text>
      </View>
      <View
        style={{
          height: 15,
          width: "100%",
          backgroundColor: '#DDDDDD',
        }}
      />
      <View style={{ justifyContent: "space-between", flexDirection: 'row', width: '100%', height: 80, alignItems: 'center', paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Tạm tính</Text>
        <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: 'bold', color: 'red' }}>{price * count} đ</Text>
      </View>

      <View
        style={{
          height: 150,
          width: "100%",
          backgroundColor: '#DDDDDD',
        }}
      />
      <View style={{width: '100%', paddingLeft: 20, paddingRight: 20}}>
        <View style={{ justifyContent: "space-between", flexDirection: 'row', width: '100%', height: 100, alignItems: 'center' }}>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Thành tiền</Text>
          <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: 'bold', color: 'red' }}>{price * count} đ</Text>
        </View>
        <TouchableHighlight underlayColor="white" >
          <View style={{ backgroundColor: '#0A5EB7', height: 50}}>
            <Text style={{ textAlign: 'center', lineHeight: 50, color: 'white', fontSize: 20, paddingLeft: 10, paddingRight: 10 }}>Áp dụng</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  top: {
    height: 330,
  },
  top__content: {
    flexDirection: 'row',
  },
  top_right: {
    marginLeft: 20,
  },
  button: {
    width: 20,
    backgroundColor: '#C4C4C4',
  },
  middle: {

  }
});
