import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#D44242',
    padding: 8,
    borderRadius: 8,
    marginVertical: 4,
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 8,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: '#fff',
    paddingVertical: 8,
  },
  descriptionContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  textHeader: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 18,
  },
  todoDescription: {
    fontSize: 15,
  },
  icon: {
    fontSize: 28,
    alignSelf: 'center',
    color: '#fff',
    marginRight: 4,
  },
});

export default styles;
