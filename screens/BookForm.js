import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'

export default function BookForm({ addBook }) {
    return (
        <View style={ globalStyles.container }>
            <Formik
                initialValues={ { title: '', body: '', rating: '' } }
                onSubmit={ (values, actions) =>{
                    addBook(values)
                    actions.resetForm()
                } }
            >
                { (formikProps) => (
                    <View>
                        <TextInput
                            style={ globalStyles.input }
                            placeholder="Book Title"
                            onChangeText={ formikProps.handleChange('title') }
                            value={ formikProps.values.title }
                        />
                        <TextInput
                            style={ globalStyles.input }
                            placeholder="Book Description"
                            onChangeText={ formikProps.handleChange('body') }
                            value={ formikProps.values.body }
                        />
                        <TextInput
                            style={ globalStyles.input }
                            placeholder="Rating (1 - 5)"
                            onChangeText={ formikProps.handleChange('rating') }
                            value={ formikProps.values.rating }
                            keyboardType="numeric"
                        />
                        <Button title="Submit" color="maroon" onPress={ formikProps.handleSubmit } />
                    </View>
                ) }
            </Formik>
        </View>
    )
}