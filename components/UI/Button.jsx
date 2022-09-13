import React from "react";
import { Pressable, Text, StyleSheet, Platform } from "react-native";
import { Colors } from "../../constants/colors";

const Button = ({ onPress, children }) => {
    return (
        <Pressable
            onPress={onPress}
            android_ripple={{ color: "#ccc" }}
            style={({ pressed }) => [
                styles.button,
                Platform.OS === "ios" && pressed && styles.pressed,
            ]}
        >
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary800,
        borderRadius: 2,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.15,
        shadowRadius: 2,
    },
    text: {
        color: Colors.primary50,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    pressed: {
        opacity: 0.7,
    },
});