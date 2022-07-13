import React from 'react';
import { categories } from '../../utils/categories';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
    Container,
    Header,
    Title,
    DeleteButton,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date,
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

export interface TransactionCardProps {
    name: string;
    amount: string;
    category: string;
    date: string;
    type: 'positive' | 'negative';
    id: string;
}

interface Props {
    data: TransactionCardProps;
    handleDelete: () => void;
}

export function TransactionCard({ data, handleDelete}: Props) {
    const [category] = categories.filter(
        item => item.key === data.category
    );
    const theme = useTheme();

    return (
        <Container>
            <Header>
                <Title>{data.name}</Title>
                <DeleteButton
                    onPress={handleDelete}
                >
                    <Feather 
                        name='trash'
                        size={RFValue(19)}
                        color={theme.colors.text}
                    />
                </DeleteButton>
            </Header>

            <Amount type={data.type}>
                {data.type === 'negative' && '- '}
                {data.amount}</Amount>

            <Footer>
                <Category>
                    <Icon name={category.icon} />
                    <CategoryName>{category.name}</CategoryName>
                </Category>

                <Date>{data.date}</Date>
            </Footer>

        </Container>
    )
}