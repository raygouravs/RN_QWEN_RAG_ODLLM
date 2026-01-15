import { useColorScheme } from '@/hooks/use-color-scheme';
import { Drawer } from 'expo-router/drawer';
import React from 'react';


export default function NavDrawerLayout() {
  const colorScheme = useColorScheme();

  return (
      <Drawer>
        <Drawer.Screen name='index' options={{
          drawerLabel: 'Qwen-0.5-instruct-4_bit-ODLLM',
          title: 'Qwen-0.5-instruct-ODLLM',
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
