'use client'
import { useState } from 'react'
import {
  ListItem,
  Button,
  Checkbox
} from '@chakra-ui/react'
import './globals.css'
import { db } from '@/firebase'
import { QueryClient } from 'react-query';
export const ListTasks = ({ item }) => {
  const [done, setDone] = useState(false)
  const queryClient = new QueryClient()
  const deleteTodo = async (id) => {
    try {
      await db.collection('tasks').doc(id).delete()
      console.log('I delete this', id)
      queryClient.invalidateQueries('tasks');
    } catch (error) {
      console.error('Error deleting task: ', error);
    }
  };
  return (
    <>
      <ListItem style={{ listStyle: 'none', marginTop: '10px', display: 'flex', alignItems: 'center' }} key={item.docId}>
        <Checkbox isChecked={done}
          onChange={() => setDone(!done)}
          colorScheme='green'
          className={done ? 'data-checked' : ''}  style={{ cursor: 'pointer', marginRight: '10px' }}>
          {item.task}
        </Checkbox>
        <Button onClick={() => { deleteTodo(item.docId) }}>Delete</Button>
      </ListItem>
    </>
  )
}