import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    padding: 24,
  },
  eventName: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
  },
  eventDate: {
    color: "#b8b7b7",
    fontSize: 20,
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 8,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },

  listEmptyText: {
    color: "#FFF",
    fontSize: 24,
    textAlign: "center",
  },
});
