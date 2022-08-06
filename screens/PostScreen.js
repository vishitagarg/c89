import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";


export default class PostScreen extends Component {
    render() {
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <View style={styles.appTitle}>
                        <View style={styles.appIcon}>
                            <Image
                                source={require("../assets/logo.png")}
                                style={styles.iconImage}
                            ></Image>
                        </View>
                        <View style={styles.appTitleTextContainer}>
                            <Text style={styles.appTitleText}>Spectagram</Text>
                        </View>
                    </View>
                    <View style={styles.PostContainer}>
                        <ScrollView style={styles.PostCard}>
                            <Image
                                source={require("../assets/image_1.jpg")}
                                style={styles.image}
                            ></Image>

                            <View style={styles.dataContainer}>
                                <View style={styles.titleTextContainer}>
                                    <Text style={styles.PostTitleText}>
                                        {this.props.route.params.Post.name }
                                    </Text>
                                    <Text style={styles.PostCaptionText}>
                                        {this.props.route.params.Post.caption}
                                    </Text>
                                    <Text style={styles.PostAuthorText}>
                                        {this.props.route.params.Post.created_on}
                                    </Text>
                                </View>
                             </View>
                            <View style={styles.PostCaptionContainer}>
                                <Text style={styles.PostText}>
                                    {this.props.route.params.Post.caption}
                                </Text>
                            </View>
                            <View style={styles.actionContainer}>
                                <View style={styles.likeButton}>
                                    <Ionicons 
                                    name={"heart"} 
                                    size={RFValue(30)} 
                                    color={"white"} />
                                    <Text style={styles.likeText}>12k</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            );
        }
    }
