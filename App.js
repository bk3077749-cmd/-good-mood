
import React from 'react';
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

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.logo}>GOOD MOOD 🎧</Text>
        <Text style={styles.tagline}>
          Feel the Music... Feel the Happiness...
        </Text>

        <View style={styles.welcome}>
          <Text style={styles.heading}>Welcome to GOOD MOOD</Text>
          <Text style={styles.subtitle}>
            Your Music. Your Mood. Your World.
          </Text>
          <TouchableOpacity style={styles.playButton}>
            <Text style={styles.buttonText}>▶  Explore Music</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.section}>🎵 Discover Music</Text>

        {songs.map((song, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <View style={styles.musicIcon}>
              <Text style={styles.iconText}>♫</Text>
            </View>
            <Text style={styles.cardText}>{song}</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.section}>🎙️ Podcasts</Text>
        <View style={styles.podcast}>
          <Text style={styles.podcastTitle}>
            Listen to Amazing Podcasts
          </Text>
          <Text style={styles.subtitle}>
            Stories • Comedy • Motivation • More
          </Text>
        </View>

        <Text style={styles.footer}>GOOD MOOD © 2026</Text>
      </ScrollView>

      <View style={styles.nav}>
        {['Music 🎼', 'Search 🔎', 'Your ❤️', 'Them', 'Library 📚', 'Profile 🫵'].map((item, i) => (
          <Text key={i} style={styles.navText}>{item}</Text>
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
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  tagline: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 8,
    fontSize: 12
  },
  welcome: {
    margin: 18,
    marginTop: 30,
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
  musicIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#6221a1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconText: {
    color: 'white',
    fontSize: 27
  },
  cardText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 14,
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
  footer: {
    color: '#777',
    textAlign: 'center',
    marginVertical: 30
  },
  nav: {
    flexDirection: 'row',
    backgroundColor: '#171321',
    paddingVertical: 13,
    justifyContent: 'space-around'
  },
  navText: {
    color: '#fff',
    fontSize: 9
  }
});
