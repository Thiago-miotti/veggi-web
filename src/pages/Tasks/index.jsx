import React, { useEffect, useState } from 'react';
import './style.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DefaultButton from '../../components/DefaultButton';
import Modal from '../../components/Modal';
import CreateTaskForm from './components/CreateTaskForm';

import axios from 'axios';

const Tasks = () => {
    const [openModal, setOpenModal] = useState(false);
    const [tasks, setTasks] = useState([])

    const toggleModal = () => {
        setOpenModal(true);
    }

    const getTasksByUser = async () => {
        const tasks = await axios.get('http://localhost:4000/api/v1/task');
        setTasks(tasks.data);
    }

    useEffect(() => {
        getTasksByUser();

    }, [tasks])

    return (
        <div className="tasks-container">
            {openModal ? <Modal
                title="Create task"
                modalState={openModal}
                handleClose={() => setOpenModal(false)} 
                content={<CreateTaskForm />} />
                : null}
            <div className="tasks-header">
                <DefaultButton text="Create task" action={toggleModal} width="220px"/>
            </div>
            <div className="tasks-table">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Status</TableCell>
                                <TableCell align="right">Descrição</TableCell>
                                <TableCell align="right">Associado a</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* TODO --> Make the inner join include the user_name and the task_status_description instead of the ids*/}
                            {tasks.map((task) => (
                                <TableRow
                                    key={task.description}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {task.task_status_id}
                                    </TableCell>
                                    <TableCell align="right">{task.task_description}</TableCell>
                                    <TableCell align="right">{task.user_id}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Tasks;