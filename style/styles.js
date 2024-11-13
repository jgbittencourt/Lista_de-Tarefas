import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#00BFFF', 
  },
  input: {
    borderWidth: 1,
    borderColor: '#A9A9A9', 
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff', 
    color: '##00BFFF',
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#fff', 
    backgroundColor: '	#000', 
  },
  listItemText: {
    color: '#0000FF', 
  },
  selectedItem: {
    backgroundColor: '#fff', 
  },
  buttonsContainer: {
    marginTop: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff', 
  },
  text: {
    color: '#000', 
  },
  boatsaw: {
    backgroundColor: '#fff',
    color: '#fff'
  }
});

export default styles;
