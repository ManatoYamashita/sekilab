<template>
    <div v-if="isVisible" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">&times;</span>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  const props = defineProps({
    isVisible: Boolean
  })
  
  const emit = defineEmits(['update:isVisible'])
  
  const closeModal = () => {
    emit('update:isVisible', false)
  }
  </script>
  
  <style scoped>
    .modal {
      display: flex; /* Hidden by default */
      justify-content: center;
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }
    
    .modal-content {
      background-color: #fefefe;
      margin: auto; /* 15% from the top and centered */
      padding: 20px;
      border: 1px solid #888;
      border-radius: 8px;
      width: 40%;
      height: auto;
      transition: all .3s;

    }
    
    .close {
      color: #aaa;
      float: right;
      font-size: 2rem;
      font-weight: bold;
    }
    
    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      .modal-content {
        width: 80%;
        margin: auto;
      }
    }
  </style>