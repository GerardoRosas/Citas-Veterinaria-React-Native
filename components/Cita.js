import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const Cita = ({cita, eliminarPaciente}) => {

    const dialogoEliminar = id => {
        console.log('Eliminando...', id);
       
        eliminarPaciente(id);
    }

    return (  

        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <Text style={styles.text}>{cita.paciente}</Text>
            </View>
            <View>
                <Text style={styles.label}>Propietario:</Text>
                <Text style={styles.text}>{cita.propietario}</Text>
            </View>
            <View>
                <Text style={styles.label}>Sintomas:</Text>
                <Text style={styles.text}>{cita.sintomas}</Text>
            </View>

            <View>
                <TouchableHighlight onPress={() => dialogoEliminar(cita.id)} style={styles.botonEliminar}>
                    <Text style={styles.textoEliminar}>Eliminar</Text>
                </TouchableHighlight>
            </View>
        </View>
          
    );
}

const styles = StyleSheet.create({
    cita:{
        backgroundColor: "#FFF",
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    label: {
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 18
    }, 
    text:{
        fontSize: 18
    },
    botonEliminar:{
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10
    },
    textoEliminar: {
        color:'#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
 
export default Cita;