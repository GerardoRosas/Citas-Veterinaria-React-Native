import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';


const App = () => {

  const [citas, setCitas] = useState([
    {id: "1", paciente: "Hook", propietario: "Gerardo", sintomas: "Dolor de estómago"},
    {id: "2", paciente: "React", propietario: "Fernanda", sintomas: "Dolor de garganta"},
    {id: "3", paciente: "Script", propietario: "Ricardo", sintomas: "Se la pasa durmiendo"},
    {id: "4", paciente: "iOS", propietario: "Mario", sintomas: "Es muy enojon"},
  ]);

  //funcion que elimina los pacientes del state
  const eliminarPaciente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter(cita => cita.id !== id)
    })
  }

  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.encabezado}>Administrador de Citas</Text>

        <Formulario />

        <Text style={styles.encabezado}>{citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'}</Text>

        <FlatList
          data={citas}
          renderItem={({item}) => <Cita eliminarPaciente={eliminarPaciente} cita={item}/>}
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
    color: '#FFF',
    marginBottom: 20
  }
});

export default App;
