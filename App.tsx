/**
 * Raspberry PiのRGB LEDを制御するためのReact Nativeアプリ
 * https://github.com/facebook/react-native
 *
 * このアプリケーションは、ユーザーがRaspberry Piに接続されたRGB LEDの状態を
 * シンプルなReact Nativeインターフェースを通じて制御できるようにします。
 */

import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';

const App: React.FC = () => {
  /**
   * Raspberry Pi上のLEDの状態を切り替える関数。
   *
   * @param state - LEDの希望する状態（'on' または 'off'）。
   */
  const [backgroundColor, setBackgroundColor] = useState<string>('#C0C0C0');
  const toggleLED = async (state: 'white'| 'red'| 'green'| 'blue'| 'yellow'| 'purple'| 'cyan'| 'black') => {
    try {
      // LEDの状態を変更するためにRaspberry PiサーバーにPOSTリクエストを送信する。
      const response = await axios.post('http://raspberrypi.local:5000/led', { state });
      console.log(response.data);
      //Alert.alert(`LEDが${state}になりました`);
      switch(state){
        case 'white'  : setBackgroundColor('#C0C0C0'); break;
        case 'red'    : setBackgroundColor('#C00000'); break;
        case 'green'  : setBackgroundColor('#00C000'); break;
        case 'blue'   : setBackgroundColor('#0000C0'); break;
        case 'yellow' : setBackgroundColor('#C0C000'); break;
        case 'purple' : setBackgroundColor('#C000C0'); break;
        case 'cyan'   : setBackgroundColor('#00C0C0'); break;
        case 'black'  : setBackgroundColor('#303030'); break;
      }
      //setBackgroundColor(state); // 成功したらバックグラウンドカラーを変更
    } catch (error) {
      console.error(error);
      Alert.alert('エラー', 'リクエストの送信に失敗しました');
    }
  };
  const renderButton = (title: string, state: string, color: string, textColor: string, style = {}) => (
    <TouchableOpacity style={[styles.button, style, {backgroundColor: color}]} onPress={() => toggleLED(state as any)}>
      <Text style={[styles.buttonText, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View style={styles.row}>
        {renderButton('白', 'white', '#FFFFFF', '#000000', styles.doubleWidthButton)}
      </View>
      <View style={styles.row}>
        {renderButton('赤', 'red'   , '#FF0000', '#FFFFFF')}
        {renderButton('緑', 'green' , '#00FF00', '#000000')}
      </View>
      <View style={styles.row}>
      {renderButton('青', 'blue'  , '#0000FF', '#FFFFFF')}
      {renderButton('黄', 'yellow', '#FFFF00', '#000000')}
      </View>
      <View style={styles.row}>
      {renderButton('紫', 'purple', '#FF00FF', '#FFFFFF')}
      {renderButton('水', 'cyan'  , '#00FFFF', '#000000')}
      </View>
      <View style={styles.row}>
      {renderButton('黒', 'black', '#000000', '#FFFFFF', styles.doubleWidthButton)}
      </View>
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
  row: {
    flexDirection: 'row', // 子要素を横に並べる
    justifyContent: 'center', // 子要素を中央に配置する
    marginBottom: 0, // 各行の下にスペースを追加
  },
  button: {
    alignItems: 'center', // アイコンとテキストを中央に揃える
    padding: 40, // パディングを追加
    margin: 5, // マージンを追加
    borderRadius: 5, // 角を丸くする
    width: 160, // ボタンの幅を設定
  },
  doubleWidthButton: {
    width: 330, // ボタンの幅を2倍に設定
  },
  buttonText: {
    fontSize: 40, // フォントサイズを設定
    textAlign: 'center', // テキストを中央揃えにする
  },
});

export default App;