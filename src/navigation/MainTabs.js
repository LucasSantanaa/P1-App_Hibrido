import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import CartStack from './CartStack';
import ProfileScreen from '../screens/ProfileScreen';
import { useCart } from '../context/CartContext';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();

const ICONS = {
  HomeTab: 'home',
  CartTab: 'cart',
  ProfileTab: 'person',
};

export default function MainTabs() {
  const { itemCount } = useCart();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textLight,
        tabBarStyle: { height: 62, paddingBottom: 8, paddingTop: 8 },
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name={focused ? ICONS[route.name] : `${ICONS[route.name]}-outline`}
            size={size}
            color={color}
          />
        ),
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Início' }} />
      <Tab.Screen
        name="CartTab"
        component={CartStack}
        options={{
          title: 'Carrinho',
          tabBarBadge: itemCount > 0 ? itemCount : undefined,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{ title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}
