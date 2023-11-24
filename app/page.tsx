'use client'
import { Loading } from './components/Loading'
import { db } from '@/firebase'
import { QueryClient, useQuery } from 'react-query'
import 'firebase/firestore'
import firebase from 'firebase/compat/app'
import { ListTasks } from './ListTasks'
import { useEffect, useState } from 'react'
import { Button, Input, Flex, UnorderedList } from '@chakra-ui/react'
import { TasksService } from '../services/DatabaseServices'


export default function Home() {
  const queryClient = new QueryClient()
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])
  const { data, status } = useQuery("tasks", TasksService.getAll);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (status === 'success') {
      db
        .collection('tasks')
        .orderBy('date', 'desc')
        .onSnapshot(snapshot => {
          setTodos(snapshot.docs.map(doc => ({ docId: doc.id, ...doc.data() })))
          setLoading(false);
        });
    }
  }, [data]);
  const sendData = async (task: string) => {
    try {
      // Добавление задачи в коллекцию "tasks"
      await db.collection('tasks').add({
        date: firebase.firestore.FieldValue.serverTimestamp(),
        task: task,
      });

      queryClient.invalidateQueries('tasks');
    } catch (error) {
      console.error('Error adding task: ', error);
    }
  };
  return (
    <>
      <Flex justifyContent='center' align='center'>
        <Input w='100' onChange={(e) => { setTask(e.target.value) }}></Input>
        <Button onClick={() => { sendData(task) }}>Add task</Button>
      </Flex>
      <Flex justifyContent='center' align='center'>
        {loading ?
          <Loading />
          :
          <UnorderedList>
            {todos.map(item => {

              return (
                <ListTasks item={item} />
              )
            })}
          </UnorderedList>}
      </Flex>

    </>
  )

}

