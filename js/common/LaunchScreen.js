"use strict";

import React from "react";
import F8Colors from "./F8Colors";
import {Dimensions, StyleSheet, View, Image} from "react-native";

import LoginScreen from "../login/LoginScreen"

const WIN_WIDTH = Dimensions.get("window").width, WIN_HEIGHT = Dimensions.get("window").height;


class LaunchScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: true,
            loggedIn: false
        };
    }

    componentDidMount() {
        this.timer = setTimeout(
            () => {
                this.setState({
                    isLoading: false,
                });
            },
            1000
        );
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={[styles.container, this.props.style]}>
                    <Image
                        source={require("./img/launchscreen.png")}
                        style={styles.image}
                    />
                </View>
            )
        } else {
            return <LoginScreen/>
        }

    }
}


/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: F8Colors.bianca
    },
    image: {
        position: "absolute",
        left: 0,
        top: 0,
        width: WIN_WIDTH,
        height: WIN_HEIGHT,
        resizeMode: "cover"
    }
});

/* playground cards ========================================================= */

const launchScreen = LaunchScreen;
launchScreen.__cards__ = define => {
    define("Default", _ => <LaunchScreen/>)
};

/* exports ================================================================== */
module.exports = launchScreen;