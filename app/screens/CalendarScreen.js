import { StyleSheet, Text, View} from "react-native";
import {colors} from '../components/colors';
import { ButtonOptions } from "../components/ButtonOptions";


export default function CalendarScreen({navigation, route}) {
    return(
        <View style = {styles.background}>
            <Text>{route.params.id}'s Calendar</Text>
            <ButtonOptions ID = {route.params.id}/>
        </View>
    );
};


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors['color-tan'],
    justifyContent: "center",
  },
});