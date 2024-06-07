/**
 * Raspberry PiのRGB LEDを制御するためのReact Nativeアプリ
 * https://github.com/facebook/react-native
 *
 * このアプリケーションは、ユーザーがRaspberry Piに接続されたRGB LEDの状態を
 * シンプルなReact Nativeインターフェースを通じて制御できるようにします。
 */

import React from 'react';
import { Button, View, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const App: React.FC = () => {
  /**
   * Raspberry Pi上のLEDの状態を切り替える関数。
   *
   * @param state - LEDの希望する状態（'on' または 'off'）。
   */
  const toggleLED = async (state: 'on' | 'off') => {
    try {
      // LEDの状態を変更するためにRaspberry PiサーバーにPOSTリクエストを送信する。
      const response = await axios.post('http://raspberrypi.local:5000/led', { state });
      console.log(response.data);
      Alert.alert(`LEDが${state}になりました`);
    } catch (error) {
      console.error(error);
      Alert.alert('エラー', 'リクエストの送信に失敗しました');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="LEDをオンにする" onPress={() => toggleLED('on')} />
      <Button title="LEDをオフにする" onPress={() => toggleLED('off')} />
    </View>
  );
};

// アプリのコンポーネントのスタイルを定義する。
const styles = StyleSheet.create({
  container: {
    flex: 1, // 画面の全高さを占める
    justifyContent: 'center', // コンテンツを垂直方向に中央に配置する
    alignItems: 'center', // コンテンツを水平方向に中央に配置する
  },
});

export default App;