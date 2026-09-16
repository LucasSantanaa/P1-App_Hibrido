import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import FoodCard from '../components/FoodCard';
import { categories, products } from '../data/mockData';
import colors from '../theme/colors';

export default function HomeScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState('c1');

  const filteredProducts =
    activeCategory === 'c1'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá! 👋</Text>
          <Text style={styles.headerTitle}>O que vamos pedir hoje?</Text>
        </View>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={18} color={colors.textLight} />
        <Text style={styles.searchPlaceholder}>Buscar pratos, restaurantes...</Text>
      </View>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
        renderItem={({ item }) => {
          const active = item.id === activeCategory;
          return (
            <View
              style={[styles.categoryChip, active && styles.categoryChipActive]}
              onTouchEnd={() => setActiveCategory(item.id)}
            >
              <Ionicons
                name={item.icon}
                size={16}
                color={active ? colors.background : colors.text}
              />
              <Text
                style={[
                  styles.categoryText,
                  active && styles.categoryTextActive,
                ]}
              >
                {item.name}
              </Text>
            </View>
          );
        }}
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <FoodCard
            product={item}
            onPress={() => navigation.navigate('Details', { product: item })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  greeting: {
    fontSize: 14,
    color: colors.textLight,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
    marginTop: 2,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.surface,
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 46,
    marginTop: 18,
  },
  searchPlaceholder: {
    color: colors.textLight,
    fontSize: 14,
  },
  categoryList: {
    gap: 10,
    paddingVertical: 18,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    height: 36,
    borderRadius: 20,
    backgroundColor: colors.surface,
  },
  categoryChipActive: {
    backgroundColor: colors.primary,
  },
  categoryText: {
    fontSize: 13,
    color: colors.text,
    fontWeight: '600',
  },
  categoryTextActive: {
    color: colors.background,
  },
  list: {
    paddingBottom: 24,
  },
});
