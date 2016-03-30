var React = require('react-native');
var Main = require('./App/Components/Main');

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;


class githubNotetaker extends Component {
  render() {
    return (
      <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'Github Notetaker',
        component: Main,
      }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  }
});


AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
