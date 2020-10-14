import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './home';
import MovieDetails from "./movie_details";

const Stack = createStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'home'}>
                <Stack.Screen name={'home'} component={Home} options={{
                    headerShown: false,
                }
                }/>
                <Stack.Screen name={'movie-details'} component={MovieDetails} options={{
                    headerShown: false,
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
