import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';


const App = () => {

  const [ mostarForm, guardarMostrarForm ] = useState(true);

  const [citas, setCitas] = useState([]);

  //funcion que elimina los pacientes del state
  const eliminarPaciente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter(cita => cita.id !== id)
    })
  }

  //Muestra u oculta el formualrio
  const mostrarFormulario = () => {
    guardarMostrarForm(!mostarForm);
  }

  //Ocultar el teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  }


  
  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
        <View style={styles.contenedor}>
          <Text style={styles.encabezado}>Administrador de Citas</Text>

          <View>
              <TouchableHighlight onPress={() => mostrarFormulario()} style={styles.btnMostrarForm}>
                  <Text style={styles.textoMostarForm}>{mostarForm ? 'Cancelar' : 'Crear Nueva Cita'}</Text>
              </TouchableHighlight>
          </View>

          <View style={styles.contenido}>
            {mostarForm ? (
                <>
                  <Text style={styles.encabezado}>Nueva Cita</Text>
                  <Formulario 
                    citas={citas}
                    setCitas={setCitas}
                    guardarMostrarForm={guardarMostrarForm}
                  />
                </>
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
      </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1
  },
  encabezado: {
    textAlign: 'center',
    marginTop: Platform.OS === 'ios' ? 50 : 20,
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
      backgroundColor: '#622569',
      marginVertical: 10,
      marginHorizontal: 10
  },
  textoMostarForm: {
      color:'#FFF',
      fontWeight: 'bold',
      textAlign: 'center'
  }
});

export default App;
