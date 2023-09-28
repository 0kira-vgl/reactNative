import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Participant } from "../components/Participant";
import { styles } from "./styles";

export function Home() {
  const participants = [
    "Rodrigo",
    "Vini",
    "Diego",
    "Biro",
    "Matheus",
    "Ana",
    "Daniel",
    "Rafael",
    "Tatiane",
    "Paçoca",
    "Pudim",
    "Panqueca",
    "Aila",
  ];

  function handleParticipantAdd() {
    if (participants.includes("Rodrigo")) {
      return Alert.alert(
        "Participante existente",
        "Já existe um participante na lista com esse nome"
      );
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Cancelar",
      },
      {
        text: "Remover",
        style: "destructive",
        onPress: () => Alert.alert("Deletado!"),
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
