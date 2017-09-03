import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

export default EStyleSheet.create({
  $buttonBackGroundColorBase: '$white',
  $buttonBackGroundColorModifier: 0.1,
  
  container: {
    backgroundColor: '$white',
    width: '90%',
    height: 48,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
  },
  containerDisabled: {
    backgroundColor: '$lightGray'
  },
  buttonContainer: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',

  },
  buttonText: {
    fontWeight: '500',
    fontSize: 20,
    paddingHorizontal: 10,
    color: '$primaryBlue'
  },
  input: {
    height: 48,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 10,
    color: '$inputText'
  },
  border: {
    height: 48,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border'
  },
});
