import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  title: {
    fontSize: 80,
    color: 'white',
    fontWeight: 'bold',
    width: '60%',
    marginLeft: 25,
  },

  button: {
    backgroundColor: 'white',
    width: 200, //'40%'
    marginLeft: 25,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    elevation: 3
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  searchButton: {
    backgroundColor: 'white',
    height: 50,
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    zIndex: 10
  },

  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
