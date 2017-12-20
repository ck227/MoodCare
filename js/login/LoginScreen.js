"use strict";

import React from "react";
import {connect} from "react-redux";
import {skipLogin} from "../actions";
import F8Colors from "../common/F8Colors";
import F8Fonts from "../common/F8Fonts";
import {Text, Heading1} from "../common/F8Text";
import {
    Animated,
    Dimensions,
    Image,
    StatusBar,
    View,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from "react-native";
import LoginButton from "../common/LoginButton";


class LoginScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 60, marginTop: 32, marginLeft: 16, marginRight: 16}}
                    placeholder='请输入账号'
                    label="account"
                    onChangeText={(text) => this.setState({account: text})}
                    value={this.state.account}
                    underlineColorAndroid="transparent"
                    multiline={true}
                    defaultValue='SEC-admin2'
                />

                <TextInput
                    style={{height: 60, marginTop: 8, marginLeft: 16, marginRight: 16}}
                    placeholder='请输入密码'
                    label="password"
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                    underlineColorAndroid="transparent"
                    defaultValue='1234556'
                />

                <LoginButton source="First screen" />
            </View>
        );
    }

}

/* StyleSheet
============================================================================= */

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: F8Colors.bianca
    },

    //header styles
    header: {
        height: HEADER_HEIGHT,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    headerPattern: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        height: HEADER_HEIGHT - 30
    },
    headerIllustration: {
        position: "absolute",
        left: 0,
        width: WINDOW_WIDTH,
        bottom: 80
    },

    content: {
        flex: 1,
        justifyContent: "space-around",
        paddingHorizontal: CONTENT_PADDING_H
    },

    h1: {
        marginTop: 16,
        textAlign: "center"
    },
    whenWhereText: {
        marginTop: WHENWHERE_PADDING_TOP,
        textAlign: "center",
        color: F8Colors.tangaroa,
        fontFamily: F8Fonts.helvetica
    },

    arrowSection: {
        alignItems: "center",
        justifyContent: "center"
    },

    loginSection: {
        paddingBottom: LOGIN_PADDING_BOTTOM,
        alignItems: "center",
        paddingHorizontal: 20
    },
    loginComment: {
        textAlign: "center",
        fontSize: 15,
        color: F8Colors.pink,
        fontFamily: F8Fonts.fontWithWeight("helvetica", "semibold"),
        marginBottom: 23
    },
    skipButton: {
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center"
    },
    skipText: {
        color: F8Colors.colorWithAlpha("tangaroa", 0.5),
        fontFamily: F8Fonts.helvetica
    }
});

/* Export
============================================================================= */
module.exports = connect()(LoginScreen);
