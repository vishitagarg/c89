import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import AppLoading from "expo-app-loading";
import { RFValue } from "react-native-responsive-fontsize";

export default class PostCard extends Component {
  render() {
      return (
        <TouchableOpacity style={styles.container}
        onPress={()=>this.props.navigation.navigate("PostScreen",{Post:this.props.Post})}>
            <View style={styles.cardContainer}>
                <View style={styles.authorContainer}>
                    <View style={styles.authorImageContainer}>
                         <Image
                           source={require("../assets/profile_img.png")}        
                           style={styles.profileImage}
                         ></Image>
                    </View>
                    <View style={styles.authorNameContainer}>
                         <Text style={styles.AuthorNameText}>
                           {this.props.Post.author}
                         </Text>
                    </View>
                </View>
                <Image
                   source={require("../assets/post.jpeg")}
                   style={styles.postImage}
                ></Image>
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>
                    {this.props.Post.caption}
                    </Text>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionions name={"heart"} size={RFValue(30)} color={"white"}/>
                        <Text style={styles.likeText}>
                            12k
                        </Text>
                    </View>
                </View>
            </View>
      </TouchableOpacity>
      );
    }
  }

