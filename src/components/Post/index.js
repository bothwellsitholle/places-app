import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles'

const Post = () => {
  return (
    <View style={styles.container}>
      {/* Image  */}
      <Image source={{uri: 'https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480'}} style={styles.image} />
      
      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>2 guests · 1 bedroom · 1 bed · 1 bath</Text>

      {/* Type & Description  */}
      <Text style={styles.description} numberOfLines={2}>Your gateway to the great west coast adventure , this charming cottage situated on a 400 hectare farm in Kapteinskloof in the Piketberg district is all you would need. The farm has diverse fauna and flora, horse trails , hiking and mountain biking trails with your choice of exploring or staying on trails. The nights literally come alive because of mostly nocturnal wildlife and a spectacular star show all quietly hidden away between the piket bo berg mountains and the Aurora mountains</Text>

      {/* Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}> R300 </Text>
        <Text style={styles.price}>  R270  </Text>
         /  night
      </Text>

      {/* Total price  */}
      <Text style={styles.totalPrice}> R250</Text>
    </View>
  )
}

export default Post
