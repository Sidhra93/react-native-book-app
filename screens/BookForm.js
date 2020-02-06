import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import * as yup from 'yup'

const bookSchema = yup.object({
    title: yup
            .string()
            .required()
            .min(4),
    body: yup
            .string()
            .required()
            .min(8),
    rating: yup
            .string()
            .required()
            .test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
                return parseInt(val) < 6 && parseInt(val) > 0
            })
})

export default function BookForm({ addBook }) {
    return (
        <View style={ globalStyles.container }>
            <Formik
                initialValues={ { title: '', body: '', rating: '' } }
                validationSchema={ bookSchema }
                onSubmit={ (values, actions) =>{
                    addBook(values)
                    // actions.resetForm()
                } }
            >
                { (formikProps) => (
                    <View>
                        <TextInput
                            style={ globalStyles.input }
                            placeholder="Book Title"
                            onChangeText={ formikProps.handleChange('title') }
                            value={ formikProps.values.title }
                            onBlur={ formikProps.handleBlur('title') }
                        />
                        <Text style={ globalStyles.errorText }>{ formikProps.touched.title && formikProps.errors.title }</Text>
                        <TextInput
                            style={ globalStyles.input }
                            placeholder="Book Description"
                            onChangeText={ formikProps.handleChange('body') }
                            value={ formikProps.values.body }
                            onBlur={ formikProps.handleBlur('body') }
                        />
                        <Text style={ globalStyles.errorText }>{ formikProps.touched.body && formikProps.errors.body }</Text>
                        <TextInput
                            style={ globalStyles.input }
                            placeholder="Rating (1 - 5)"
                            onChangeText={ formikProps.handleChange('rating') }
                            value={ formikProps.values.rating }
                            keyboardType="numeric"
                            onBlur={ formikProps.handleBlur('rating') }
                        />
                        <Text style={ globalStyles.errorText }>{ formikProps.touched.rating && formikProps.errors.rating }</Text>
                        <Button title="Submit" color="maroon" onPress={ formikProps.handleSubmit } />
                    </View>
                ) }
            </Formik>
        </View>
    )
}