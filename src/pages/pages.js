import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Tab = createBottomTabNavigator();



const HomeScreenTab = ()=>{
    const { colors, icons } = useTheme();
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{showLabel: false, style:{ position: 'absolute', bottom: 0, left: 0, right: 0, elevation: 0, height: 75}}}>
      
      <Tab.Screen name="Cadastro" component={Cadastro} 
        options={{tabBarIcon:({focused})=>(
            <View style={{alignItems: 'center', justifyContent: 'center'}} >
                <Image source={icons.cadastro} style={{ width: 30, height: 30, tintColor: focused ? colors.accent : colors.primary}}/>
                
              </View>
          )
          }}
        />
        <Tab.Screen name="Home" component={Home} 
          options={{tabBarIcon:({focused})=>(
              <View style={{alignItems: 'center', justifyContent: 'center'}} >
                <Image />
                <Image source={icons.home} style={{ width: 30, height: 30, tintColor: focused ? colors.accent : colors.primary}}/>
                
              </View>
          )
          }}
        />
        <Tab.Screen name="Orcamento" component={Orcamento}
            options={{tabBarIcon:({focused})=>(
              <View style={{alignItems: 'center', justifyContent: 'center'}} >
                <Image source={icons.orcamento} style={{ width: 30, height: 30, tintColor: focused ? colors.accent : colors.primary}}/>
                  
              </View>
          )
          }}
        />
    </Tab.Navigator>
  );
}
const Home = ({navigation})=>{
    const { colors, icons, images } = useTheme();
    function navigateToSettings(){
        navigation.navigate("Settings")
    }

    function renderHeader(){
      return(
          <View style={{ width: "100%", height: 240, flexDirection: 'column', backgroundColor: "#fff"}}>
              <ImageBackground source={images.background} resizeMode="cover" imageStyle={{ ...styles.bottomRadius, ...styles.shadow, height: 200,  }} style={{flex: 1, alignItems: 'center', }}>

              <View style={{marginTop:16, alignItems: 'center', paddingHorizontal:8}}>
              
                <TouchableOpacity onPress={navigateToSettings}>
              
                  <Image resizeMode="contain" source={images.user}  style={{ height: 290 ,width:150}}/>
                  
                </TouchableOpacity>
              </View>
              </ImageBackground>
          </View>
      )
    }
    return(
        <ScrollView>
            
                {renderHeader()}
            <View style={{height: 1000, ...styles.container}}>
                

                <Text style={{paddingTop: 50 ,flex:1 ,alignItems: 'center', justifyContent: 'center', color: '#000'}}>Home</Text>
                
                
                
                <StatusBar style="auto" />
            </View>
        </ScrollView>

    )
}

const Cadastro = ()=>{
    return(
        
        <View style={styles.container}>
            <Text>Cadastro</Text>
            <StatusBar style="auto" />
        </View>
    
        )
}

const Orcamento = ()=>{
    return(
        
        <View style={styles.container}>
            <Text>Orcamento</Text>
            <StatusBar style="auto" />
        </View>
    
        )
}

const Settings = ()=>{
    return(
        
        <View style={styles.container}>
            <Text>Settings</Text>
            <StatusBar style="auto" />
        </View>
    
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    shadow: {
      shadowColor: "red",
      shadowOpacity: 1,
      shadowRadius: 12
    },
    shadowOffset: {
      width: 0,
      height: 12,
    },
    
    bottomRadius: {
      borderBottomLeftRadius: 25, 
      borderBottomRightRadius: 25,
      
    },
    elevation: 2

  });

export { HomeScreenTab, Home, Cadastro, Orcamento, Settings }