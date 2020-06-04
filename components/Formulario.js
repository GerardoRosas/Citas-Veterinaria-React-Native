import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Formulario = () => {


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    
    const confirmarFecha = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };
    
    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmarHora = (date) => {
        console.warn("A date has been picked: ", date);
        hideTimePicker();
    };

    return (  
        <>
            <View style={styles.formualrio}>
                <View>
                    <Text style={styles.label}>Paciente</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => console.log(texto)}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Dueño</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => console.log(texto)}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Contacto</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => console.log(texto)}
                        keyboardType='numeric'
                    />
                </View>

                <View>
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
                </View>

                <View>
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
                </View>

                <View>
                    <Text style={styles.label}>Síntomas</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => console.log(texto)}
                        multiline
                    />
                </View>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    formualrio:{
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: '2.5%'
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
    }
})
 
export default Formulario;