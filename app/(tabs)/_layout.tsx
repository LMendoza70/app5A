import { Tabs } from "expo-router";

export default function layoutTabs(){
    return(
        <Tabs>
            <Tabs.Screen name="home" options={{title:'Principal',headerShown:false}}/>
            <Tabs.Screen name="index" options={{title:'Home',headerShown:false}}/>
        </Tabs>
    )
}