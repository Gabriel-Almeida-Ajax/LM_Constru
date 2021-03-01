import React from 'react';
import Pages from './src/pages/NavigationStack'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ffd573',
    accent: '#f1c40f',
  },
  icons: {
    home: require('./src/pages/lib/home.png'),
    orcamento: require('./src/pages/lib/orcamento.png'),
    cadastro: require('./src/pages/lib/cadastro.png')
  },
  images: {
    background: require('./src/pages/lib/home-background.jpg'),
    user: require('./src/pages/lib/user.png')
  }
};


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Pages />
    </PaperProvider>
  );
}


