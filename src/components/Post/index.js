import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles'

const Post = (props) => {

  const {
    id,
    image,
    type,
    title,
    bed,
    bedroom,
    oldPrice,
    newPrice,
    totalPrice 
   } = props.post;

  return (
    <View style={styles.container}>
      {/* Image  */}
      <Image source={{uri: image}} style={styles.image} />
      
      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>{bedroom} bedroom · {bed} bed · 1 bath</Text>

      {/* Type & Description  */}
      <Text style={styles.description} numberOfLines={2}>{type}. {title}</Text>

      {/* Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}> R{oldPrice} </Text>
        <Text style={styles.price}>  R{newPrice} </Text>
         /  night
      </Text>

      {/* Total price  */}
      <Text style={styles.totalPrice}> R{totalPrice}</Text>
    </View>
  )
}

export default Post
