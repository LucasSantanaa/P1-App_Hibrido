import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/colors';

export default function FoodCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.iconBox}>
        <Ionicons name={product.icon} size={30} color={colors.primary} />
      </View>

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={styles.restaurant} numberOfLines={1}>
          {product.restaurant}
        </Text>

        <View style={styles.metaRow}>
          <Ionicons name="star" size={14} color={colors.star} />
          <Text style={styles.metaText}>{product.rating}</Text>
          <Ionicons
            name="time-outline"
            size={14}
            color={colors.textLight}
            style={{ marginLeft: 10 }}
          />
          <Text style={styles.metaText}>{product.time}</Text>
        </View>
      </View>

      <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  restaurant: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 2,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  metaText: {
    fontSize: 12,
    color: colors.textLight,
    marginLeft: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.primary,
  },
});
