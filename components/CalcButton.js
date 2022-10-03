import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class CalcButton extends React.Component {

  static defaultProps = {
    onPress: function() { },
    title: "",
    color: "white",
    backgroundColor: "black",
    radius: 40,

    style: { },
  }

  render() {
    var r = this.props.radius;
    var w = this.props.radius * 2;
    var h = this.props.radius * 2;
    var bc = this.props.backgroundColor;

    return (
      <TouchableOpacity onPress={this.props.onPress}
        style={[styles.container, { width: w, height: h, borderRadius: r, backgroundColor: bc }, { ...this.props.style }]}>
        <Text style={[styles.text, { color: this.props.color }]}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", margin: 5, },
  text: { fontSize: 30, fontWeight: "bold", },
});

// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React from "react";

// const CalcButton = ({
//   onPress,
//   title,
//   color,
//   backgroundColor,
//   radius,
//   style,
// }) => {
//   var r = radius;
//   var w = radius * 2;
//   var h = radius * 2;
   

//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       style={[backgroundColor,
//         styles.container,
//         { width: w, height: h, borderRadius: r,},
//         { ...style },
//       ]}
//     >
//       <Text style={[styles.text, { color: color }]}>{title}</Text>
//     </TouchableOpacity>
//   );
// };

// export default CalcButton;

// const styles = StyleSheet.create({});
