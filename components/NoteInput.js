import { useState } from "react";
import { Modal, View, Image, TextInput, Button, StyleSheet } from "react-native";

function NoteInput(props) {
  const [enteredNoteText, setEnteredNoteText] = useState("");

  function noteInputHandler(enteredText) {
    setEnteredNoteText(enteredText);
  }

  function addNoteHandler() {
    props.onAddNote(enteredNoteText);
    setEnteredNoteText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/notes.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your note!"
          onChangeText={noteInputHandler}
          value={enteredNoteText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#ff0000" />
          </View>
          <View style={styles.button}>
            <Button title="Add Note" disabled={enteredNoteText == ""} onPress={addNoteHandler} color="#a065ec" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default NoteInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#20232a",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 12,
  },
});
