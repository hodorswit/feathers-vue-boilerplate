<template>
  <div>
    <h3>{{header}}</h3>
    <form @submit.prevent>
      <v-text-field name="newMessage" label="Add Message" v-model="newMessage" v-on:keyup.enter.prevent="onNewMessage(newMessage)"></v-text-field>
    </form>
    <v-card v-for="message in messages" v-bind:key="message._id">
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">_id: {{message._id}}</h3>
          <div>{{message.text}}</div>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import api from '../api';

const messagesService = api.service('messages');


export default {
  name: 'hello',
  data() {
    return {
      header: 'List of messages from /api/messages',
      messages: [],
      newMessage: '',
      load() {
        messagesService.find().then((response) => {
          this.messages = response.data;
        });
      },
      onNewMessage(message) {
        this.newMessage = '';
        messagesService.create({ text: message }).then(() => this.load());
      },
    };
  },
  created() {
    this.load();
  },
};
</script>