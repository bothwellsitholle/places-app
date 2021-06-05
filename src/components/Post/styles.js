import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 15,
    overflow: 'hidden',
  },

  description: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400',
  },

  bedrooms: {
    marginVertical: 10,
    color: '#717171',
    fontSize: 15,
    fontWeight: '500'

  },

  prices: {
    fontSize: 18,
    marginVertical: 10,
  },

  oldPrice: {
    color: '#717171',
    textDecorationLine: 'line-through',
  },

  price: {
    fontWeight: 'bold'
  },

  totalPrice: {
    color: '#717171',
    fontSize: 16,
    textDecorationLine: 'underline',
  }

});

// Dimensions.get('screen').width - 50,
