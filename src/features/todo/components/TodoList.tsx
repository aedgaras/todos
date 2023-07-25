import { Divider, Stack, Typography } from '@mui/joy';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TodoComponent } from '.';
import { LoadingSpinner } from '../../../components';
import { useGetTodos } from '../api/getTodos';

export const TodoList: React.FC = () => {
    const todos = useGetTodos();
    const { t } = useTranslation();

    if (todos.error) {
        return <em>error</em>;
    }

    if (!todos.data || todos.isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <Stack spacing={1} sx={{ alignItems: 'center' }}>
            <TodoComponent />
            <Divider />
            {todos.data.length === 0 ? (
                <Typography level="h4">{t('todos.no-todos')}</Typography>
            ) : (
                todos.data.map((todo) => {
                    return (
                        <TodoComponent
                            key={todo.id}
                            id={todo.id}
                            completed={todo.completed}
                            task={todo.task}
                        />
                    );
                })
            )}
        </Stack>
    );
};
