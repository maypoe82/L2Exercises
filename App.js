import React from 'react';
import { Text, View } from 'react-native';

const Welcome = (props) => {
  return <Text>Welcome to {props.code} - {props.name}</Text>;
};

class ModuleInfo extends React.Component {
  render() {
    return (
        <View>
          <Text>These are my modules this semester:</Text>
          <Welcome code="C346" name="Mobile App Development" />
          <Welcome code="C105" name="Introduction to Programming" />
          <Welcome code="C337" name="Immersive Technologies" />
        </View>
    );
  }
}

export default function App() {
  return (
      <View style={{ marginTop: 40 }}>
        <ModuleInfo />
      </View>
  );
}