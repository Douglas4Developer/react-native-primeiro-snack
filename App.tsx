import React from 'react';
import {View, Text, Image} from 'react-native';

const App = () =>{
  let name: string = 'Douglas Ferreira';
  let age: number = 21;

//  function turnIntoUpperCase(str: string){
//    return str.toUpperCase();
//  }
  
  // ou 
  const turnIntoUpperCase = (str: string )=> {
    return str.toLocaleUpperCase();

  }

  return(
    <View>   

      <Text> {'\n'} </Text> 
      <Text> {'\n'} </Text> 

      <Text>
      Hello World
      {'\n'}
      Meu Nome é {turnIntoUpperCase(name)} e
      </Text>   
      
      <Text> {`tenho ${age} anos`}  </Text>

      <Image
        source={{ uri: 'https://www.google.com.br/google.jpg' }}
        style={{ width: 300, height: 100 }}      
      />

      <Image
        source={require('./assets/abstract-user-flat-3.png')} 
        style={{width: 100, height:100}}
      />
      
      <Text>~~~~~~~React Native JS~~~~~~~</Text>   

      <Text></Text>


    </View>
  );
}

export default App;


//Anatações React Native
//primeiro arquivo a ser exportado é o App.tsx
//View = div no HTML = Area de Visualização
//expression {} poderemos colocar codigos JS
//Uso de Template String crases ``  //ex.: {`Voce possui x anos`} {`voce possui ${age} anos`}  ou
//{`voce possui '+age+' anos`}
//Children
//Componentes que possui somente um filho por exemplo para 'bular' para por mais filhos, é necessario colocar o componente dentro de outro
//ou colocar um fragment <></>
//podemos retornar funcções antes do return!
//props é propertys ou propriedades no html é atributos
//Quando o React Native vai compilar o aplicativo, ele usa os componentes nativos que tenham a mesma função de cada plataforma. Ex: Botão, aceita um toque, mas tem aparência diferente no Android e iOS.