import { StyleSheet, View, Text, Pressable } from "react-native";

function NoteItem(props) {
  return (
    <View style={styles.NoteItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.NoteText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default NoteItem;

const styles = StyleSheet.create({
  NoteItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#454545",
  },
  pressedItem: {
    opacity: 0.5,
  },
  NoteText: {
    color: "white",
    padding: 8,
  },
});
