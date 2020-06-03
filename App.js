import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Cita from './components/Cita';


const App = () => {

  const [citas, setCitas] = useState([
    {id: "1", paciente: "Hook", propietario: "Gerardo", sintomas: "Dolor de panza"},
    {id: "2", paciente: "React", propietario: "Fernanda", sintomas: "Dolor de garganta"},
    {id: "3", paciente: "Script", propietario: "Ricardo", sintomas: "Se la pasa durmiendo"},
    {id: "4", paciente: "iOS", propietario: "Mario", sintomas: "Es muy enojon"},
  ]);

  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.encabezado}>Administrador de Citas</Text>
        <FlatList
          data={citas}
          renderItem={({item}) => <Cita cita={item}/>}
          keyExtractor={cita => cita.id}
        />

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1
  },
  encabezado: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF'
  }
});

export default App;
