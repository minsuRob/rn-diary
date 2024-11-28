import React from 'react';
import {Text, View} from 'react-native';

export default function Posts() {
  const [liked, setLiked] = React.useState(false);
  const onLikePressed = () => {
    setLiked(!liked);
  };
  return (
    <View>
      <View style={{padding: 10, backgroundColor: '#AA1515'}}>
        <Text>Post</Text>
      </View>
    </View>
  );
}
