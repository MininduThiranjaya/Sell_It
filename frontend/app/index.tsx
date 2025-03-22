import { View, StyleSheet, Button } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from 'expo-router';
import { Redirect } from 'expo-router';
import { Link } from 'expo-router';
import AllRoutes from './screens/_layout';
import Login from './screens/Login';

export default function HomeScreen() {

  const navigation = useNavigation();

  const Stack = createNativeStackNavigator();

  function onPressHandler() {
    return (
      <Redirect href="/(home)/(tabs)/Home"/>
    )
  }

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Text>Welcome</Text>
        <Button title='Press me' onPress={() => {onPressHandler()}}/>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
