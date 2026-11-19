
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const songs = [
  'Trending Songs',
  'Latest Hits',
  'Romantic Vibes',
  'Top Tamil Songs'
];

const tabs = ['Music 🎵', 'Search 🔎', 'Favorites ❤️', 'Library 📚', 'Profile 👤'];

export default function App() {
  const [activeTab, setActiveTab] = useState('Music 🎵');

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.logo}>GOOD MOOD 🎧</Text>
      <Text style={styles.tagline}>Feel the Music • Feel Happiness</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {activeTab === 'Music 🎵' && (
          <>
            <View style={styles.welcome}>
              <Text style={styles.heading}>Welcome to GOOD MOOD</Text>
              <Text style={styles.subtitle}>Your Music. Your Mood. Your World.</Text>
              <TouchableOpacity style={styles.playButton}>
                <Text style={styles.buttonText}>▶ Explore Music</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.section}>🎵 Discover Music</Text>

            {songs.map((song, index) => (
              <TouchableOpacity key={index} style={styles.card}>
                <Text style={styles.iconText}>♫</Text>
                <Text style={styles.cardText}>{song}</Text>
                <Text style={styles.arrow}>›</Text>
              </TouchableOpacity>
            ))}

            <Text style={styles.section}>🎙️ Podcasts</Text>
            <View style={styles.podcast}>
              <Text style={styles.podcastTitle}>Listen to Amazing Podcasts</Text>
              <Text style={styles.subtitle}>Stories • Comedy • Motivation</Text>
            </View>
          </>
        )}

        {activeTab === 'Search 🔎' && (
          <View style={styles.page}>
            <Text style={styles.heading}>🔎 Search Music</Text>
            <Text style={styles.subtitle}>Search your favorite songs soon!</Text>
          </View>
        )}

        {activeTab === 'Favorites ❤️' && (
          <View style={styles.page}>
            <Text style={styles.heading}>❤️ Your Favorites</Text>
            <Text style={styles.subtitle}>Your favorite music will appear here.</Text>
          </View>
        )}

        {activeTab === 'Library 📚' && (
          <View style={styles.page}>
            <Text style={styles.heading}>📚 Your Library</Text>
            <Text style={styles.subtitle}>Your music collection.</Text>
          </View>
        )}

        {activeTab === 'Profile 👤' && (
          <View style={styles.page}>
            <Text style={styles.heading}>👤 Your Profile</Text>
            <Text style={styles.subtitle}>Welcome to GOOD MOOD!</Text>
          </View>
        )}

        <Text style={styles.footer}>GOOD MOOD © 2026</Text>
      </ScrollView>

      <View style={styles.nav}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={styles.navItem}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[
              styles.navText,
              activeTab === tab && styles.activeTab
            ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080810',
    paddingTop: 45
  },
  logo: {
    color: '#ff36cf',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  tagline: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 10,
    fontSize: 12
  },
  welcome: {
    margin: 18,
    padding: 24,
    borderRadius: 20,
    backgroundColor: '#21102c',
    borderWidth: 1,
    borderColor: '#a52cff'
  },
  heading: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#c9b5d9',
    marginTop: 10
  },
  playButton: {
    backgroundColor: '#ff29c8',
    padding: 14,
    borderRadius: 25,
    marginTop: 22,
    alignSelf: 'flex-start'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  section: {
    color: '#ff43d1',
    fontSize: 21,
    fontWeight: 'bold',
    marginHorizontal: 18,
    marginTop: 25,
    marginBottom: 12
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#171522',
    marginHorizontal: 18,
    marginVertical: 6,
    padding: 14,
    borderRadius: 14
  },
  iconText: {
    color: '#ff36cf',
    fontSize: 28,
    width: 45
  },
  cardText: {
    color: 'white',
    fontSize: 16,
    flex: 1
  },
  arrow: {
    color: '#ff36cf',
    fontSize: 28
  },
  podcast: {
    marginHorizontal: 18,
    padding: 20,
    backgroundColor: '#20142e',
    borderRadius: 16
  },
  podcastTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  page: {
    margin: 18,
    padding: 24,
    borderRadius: 18,
    backgroundColor: '#20142e',
    minHeight: 180
  },
  footer: {
    color: '#777',
    textAlign: 'center',
    marginVertical: 30
  },
  nav: {
    flexDirection: 'row',
    backgroundColor: '#171321',
    paddingVertical: 12,
    justifyContent: 'space-around'
  },
  navItem: {
    alignItems: 'center'
  },
  navText: {
    color: '#999',
    fontSize: 10
  },
  activeTab: {
    color: '#ff36cf',
    fontWeight: 'bold'
  }
});
