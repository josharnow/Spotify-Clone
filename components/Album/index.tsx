import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { Album } from '../../types';


export type AlbumProps = {
  album: Album,
}

export default function AlbumComponent(props: AlbumProps) {
  return (
    <View style={styles.container}>
      {/* Image of the album */}
      <Image source={{ uri: props.album.imageUri }} style={styles.image} />
      {/* Artist name */}
      <Text style={styles.text} >{props.album.artistsHeadline}</Text>
    </View>
  );
}
