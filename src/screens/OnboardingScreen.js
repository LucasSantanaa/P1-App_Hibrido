import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/colors';

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoCircle}>
        <Ionicons name="fast-food" size={64} color={colors.background} />
      </View>

      <Text style={styles.title}>SaborExpress</Text>
      <Text style={styles.subtitle}>
        Peça a comida que você ama, direto no seu celular. Rápido, fácil e
        sempre no ponto certo.
      </Text>

      <View style={styles.features}>
        <Feature icon="bicycle-outline" text="Entrega rápida" />
        <Feature icon="restaurant-outline" text="Restaurantes parceiros" />
        <Feature icon="pricetag-outline" text="Ofertas exclusivas" />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.buttonText}>Começar</Text>
        <Ionicons name="arrow-forward" size={20} color={colors.background} />
      </TouchableOpacity>
    </View>
  );
}

function Feature({ icon, text }) {
  return (
    <View style={styles.featureRow}>
      <Ionicons name={icon} size={20} color={colors.primary} />
      <Text style={styles.featureText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.background,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#C7C7D1',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  features: {
    alignSelf: 'stretch',
    marginBottom: 40,
    gap: 14,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  featureText: {
    color: colors.background,
    fontSize: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '700',
  },
});
