import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Alert, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';

const Formulario = ({citas, setCitas, guardarMostrarForm}) => {

    
    const [paciente , guardarPaciente] = useState('');
    const [propietario , guardarPropietario] = useState('');
    const [telefono , guardarTelefono] = useState('');
    const [sintomas , guardarSintomas] = useState('');
    const [hora, guardarHora] = useState('');
    const [fecha, guardarFecha] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    
    const confirmarFecha = (date) => {
        const opciones = {year: 'numeric', month: 'long', day: '2-digit'};
        guardarFecha(date.toLocaleDateString('es-ES', opciones)); 
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };
    
    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmarHora = (hora) => {
        const opciones = { hour: 'numeric', minute: '2-digit'};
        guardarHora(hora.toLocaleString('en-US', opciones))
        
        hideTimePicker();
    };

    //Boton para crear nueva cita
    const crearNuevaCita = () => {
        //Validar
        if(paciente.trim() === '' || 
        propietario.trim() === '' || 
        telefono.trim() === '' || 
        sintomas.trim() === '' || 
        fecha.trim() === '' || 
        hora.trim() === ''){
            mostrarAlerta();
            
            return;
        }

        //Crear una nueva cita
        const cita = { paciente, propietario, telefono, fecha, hora, sintomas };
        cita.id = shortid.generate();
        
        //Agregar al state
        const citasNuevo = [...citas, cita];
        setCitas(citasNuevo);

        //Ocultar el formulario
        guardarMostrarForm(false);
    }

    //Muestra la alerta al validar validacion
    const mostrarAlerta = () => {
        Alert.alert(
            'Error', //Titulo
            'Todos los campos son obligatorios', //mensaje
            [{
                text: 'OK',
                 //Arreglo de botones
            }]

        )
    }

    return (  
        <>
            <ScrollView style={styles.formualrio}>
                <View>
                    <Text style={styles.label}>Paciente</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => guardarPaciente(texto)}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Dueño</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => guardarPropietario(texto)}
                        keyboardType='default'
                    />
                </View>

                <View>
                    <Text style={styles.label}>Tel. Contacto</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => guardarTelefono(texto)}
                        keyboardType='numeric'
                    />
                </View>

                <View>
                    <Text style={styles.label}>Fecha:</Text>
                    <Button title="Selecciona la fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                        headerTextIOS='Elige una Fecha'
                        cancelTextIOS='Cancelar'
                        confirmTextIOS='Confirmar'
                    />
                    <Text>{fecha}</Text>
                </View>

                <View>
                    <Text style={styles.label}>Hora:</Text>
                    <Button title="Define la hora" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmarHora}
                        onCancel={hideTimePicker}
                        locale='es_ES'
                        headerTextIOS='Elige una Hora'
                        cancelTextIOS='Cancelar'
                        confirmTextIOS='Confirmar'
                    />
                    <Text>{hora}</Text>
                </View>

                <View>
                    <Text style={styles.label}>Síntomas</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => guardarSintomas(texto)}
                        keyboardType='default'
                        multiline
                    />
                </View>

                <View>
                    <TouchableHighlight onPress={() => crearNuevaCita()} style={styles.botonSubmit}>
                        <Text style={styles.textoNuevaCita}>Crear Nueva Cita</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>

        </>
    );
}

const styles = StyleSheet.create({
    formualrio:{
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10
    },  
    label:{
        fontWeight:'bold',
        fontSize: 18,
        marginTop: 20
    },
    input:{
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    botonSubmit:{
        padding: 10,
        backgroundColor: '#622569', //36486b
        marginVertical: 10
    },
    textoNuevaCita: {
        color:'#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
 
export default Formulario;