import React, {useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ListFilm from "./view/ListFilm";
import AddFilm from "./view/addFilm";



const Tab = createBottomTabNavigator();

const Main = () => {
  const [data, setData] = useState([]);
  
  const addfilm=()=>(<><AddFilm data={data} setData={setData}/></>);
  const listFilm =()=>(<><ListFilm data={data} /></>);
  console.log(data)
  return (
   <Tab.Navigator>
      <Tab.Screen
        name="ListFilm"
        options={{
          tabBarLabel: "ListFilm",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        component={listFilm}
      />
      <Tab.Screen name="addFilm" 
      options={{
        tabBarLabel: "addFilm",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
      }}component={addfilm} />
    </Tab.Navigator>
  );
};

export default Main;