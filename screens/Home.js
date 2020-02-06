import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles } from '../styles/global'
import { MaterialIcons } from '@expo/vector-icons'
import Card from '../shared/Card'
import BookForm from './BookForm'

export default function Home({ navigation }) {
    const [ books, setBooks ] = useState([
        { title: 'It Ends With Us', rating: 5, body: 'written by Colleen Hoover', key: '1' },
        { title: '180 Seconds', rating: 2, body: 'written by Jessica Park', key: '2' },
        { title: 'Without Merit', rating: 3, body: 'written by Colleen Hoover', key: '3' }
    ])

    const [ modalOpen, setModalOpen ] = useState(false)

    const addBook = (book) => {
        book.key = Math.random().toString()
        setBooks((currentBooks) => {
            return [book, ...currentBooks]
        })
        // setModalOpen(false)
    }

    return(
        <View style={ globalStyles.container }>
            <Modal visible={ modalOpen } animationType="slide">
                <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
                    <View style={ styles.modalContent}>
                        <MaterialIcons name="close" size={ 24 } style={ {...styles.modalToggle, ...styles.modalClose} } onPress={ () => setModalOpen(false) } />
                        <BookForm addBook={ addBook } />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons name="add" size={ 24 } style={ styles.modalToggle } onPress={ () => setModalOpen(true) } />

            <FlatList
                data={ books }
                renderItem={ ({ item }) => (
                    <TouchableOpacity
                        onPress={ () => navigation.navigate('BookDetails', item) }
                    >
                        <Card>
                            <Text style={ globalStyles.titleText }>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                ) }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1
    }
})