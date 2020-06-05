import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';


const App = () => {

  const [ mostarForm, guardarMostrarForm ] = useState(true);

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

        <View>
            <TouchableHighlight onPress={() => crearNuevaCita()} style={styles.btnMostrarForm}>
                <Text style={styles.textoMostarForm}>Mostrar Formulario</Text>
            </TouchableHighlight>
        </View>

        <View style={styles.contenido}>
          {mostarForm ? (
              <Formulario />
          ) : (
            <>
              <Text style={styles.encabezado}>{citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'}</Text>

              <FlatList
                style={styles.listado}
                data={citas}
                renderItem={({item}) => <Cita eliminarPaciente={eliminarPaciente} cita={item}/>}
                keyExtractor={cita => cita.id}
              />
            </>
          )}
          
          
        </View>

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
  },
  contenido:{
    flex: 1,
    marginHorizontal: '2.5%'
  },
  listado:{
    flex: 1
  },
  btnMostrarForm:{
      padding: 10,
      backgroundColor: '#36486b',
      marginVertical: 10
  },
  textoMostarForm: {
      color:'#FFF',
      fontWeight: 'bold',
      textAlign: 'center'
  }
});

export default App;
