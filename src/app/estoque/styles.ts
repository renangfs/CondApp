import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#255B4E',
    marginBottom: 20,
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    padding: 10,
    borderRadius: 8,
    gap: 6,
    flex: 1,
    marginRight: 6,
  },
  deleteButtonText: {
    color: 'Black',
    fontWeight: '500',
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    padding: 10,
    borderRadius: 8,
    gap: 6,
    flex: 1,
    marginLeft: 6,
  },
  createButtonText: {
    color: 'Black',
    fontWeight: '500',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d1d1d1',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
    gap: 8,
  },
  editButtonText: {
    color: '#555',
    fontWeight: '500',
  },
  tableHeader: {
    flexDirection: 'row',
    paddingBottom: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    color: '#255B4E',
    textAlign: 'left',
  },
  rowData: {
    flexDirection: 'row',
    backgroundColor: '#0b4e35',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginBottom: 10,
  },
  rowText: {
    flex: 1,
    color: '#fff',
  },
});

export default styles;
