import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  Pressable,
} from "react-native";
import NoteItem from "./components/NoteItem";
import NoteInput from "./components/NoteInput";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [notesList, setNotesList] = useState([]);

  function startAddNoteHandler() {
    setIsModalVisible(true);
  }

  function endAddNoteHandler() {
    setIsModalVisible(false);
  }

  function addNoteHandler(enteredNoteText) {
    setNotesList((currentNotesList) => [
      ...currentNotesList,
      { text: enteredNoteText, id: Math.random().toString() },
    ]);
    endAddNoteHandler();
  }

  function deleteNoteHandler(id) {
    setNotesList((currentNotesList) => {
      return currentNotesList.filter((note) => note.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Note List</Text>
        </View>
        <Pressable
          android_ripple={{ color: "#210644"}}
          onPress={startAddNoteHandler}
        >
          <View style={styles.addNote}>
            <Text style={styles.addNoteText}>Add New Note</Text>
          </View>
        </Pressable>
        <NoteInput
          visible={isModalVisible}
          onAddNote={addNoteHandler}
          onCancel={endAddNoteHandler}
        />
        <View style={styles.notesContainer}>
          <FlatList
            data={notesList}
            renderItem={(itemData) => {
              return (
                <NoteItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteNoteHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#20232a",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    color: "white",
    fontSize: 32,
  },
  addNote: {
    alignItems: "center",
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#a065ec",
  },
  addNoteText: {
    color: "white",
    fontSize: 18,
  },
  notesContainer: {
    flex: 5,
  },
});
