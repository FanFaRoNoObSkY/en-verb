import { StatusBar } from 'expo-status-bar'
import {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from './utils/Colors'
import Navbar from './components/Navbar'
import Body from './components/Body'

export default function App() {
  const [page, setPage] = useState(0)

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <View style={styles.container}>
      <Navbar page={page} callback={changePage}/>
      <Body page={page}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth:40,
    borderTopColor: Colors.dracula.comment,
    backgroundColor: Colors.dracula.background,
  },
});
