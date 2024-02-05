import { theme } from '@src/theme';
import { StyleSheet } from 'react-native';

StyleSheet.create({
  mapView: {
    width: '100%',
    height: '100%',
  },
});

const styles = StyleSheet.create({
  messagesInput: {
    flex: 1,
    marginLeft: -16,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.blue400,
  },
  messagesInputForAndroid: {
    padding: 0,
  },
  messagesInputForIOS: {
    marginTop: -4,
    marginBottom: 4,
  },
  sendButton: {
    transform: [{ translateY: -15 }],
    marginLeft: -15,
    marginRight: 8,
  },
  attachButton: {
    transform: [{ translateY: -15 }],
    marginRight: -10,
    marginLeft: 8,
  },
});

export default styles;
