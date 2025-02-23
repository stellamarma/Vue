<template>
  <Form @submit="handleSubmit" :validation-schema="formSchema">
    <div class="mb-3">
        <label for="name">Name</label>
        <Field 
        name="name" 
        placeholder="Enter your name"
        class="form-control"/>
        <ErrorMessage name="name" v-slot="{ message }">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </ErrorMessage>
    </div>

    <div class="mb-3">
        <label for="email">Email</label>
        <Field 
        name="email" 
        placeholder="Enter your email"
        class="form-control"/>
        <ErrorMessage name="email" v-slot="{ message }">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </ErrorMessage>
    </div>

    <button class="btn btn-primary">
      Submit
    </button>
  </Form>
</template>


<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const formSchema = yup.object({
  name: yup.string()
    .required('The name is required')
    .min(5, 'Sorry, a minimum of 5 characters is required'),
  email: yup.string()
    .required('The email is required')
    .email('Please enter a valid email address')
});

function handleSubmit(values, { resetForm }) {
  console.log(values);
  resetForm();
}
</script>
