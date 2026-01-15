import { useColorScheme } from '@/hooks/use-color-scheme';
import { Drawer } from 'expo-router/drawer';
import React from 'react';


export default function NavDrawerLayout() {
  const colorScheme = useColorScheme();

  return (
      <Drawer>
        <Drawer.Screen name='index' options={{
          drawerLabel: 'Home',
          title: 'Home',
          headerShadowVisible: true
        }}/>

        <Drawer.Screen name='settings' options={{
          drawerLabel: 'Settings',
          title: 'Settings',
          headerShadowVisible: true
        }}/>
    </Drawer>
  );
}
