<template>
  <div class="catagories">
    <p>{{ event.category }}</p>
    <p>{{ event.organizer }}</p>
  </div>
</template>

<script>
export default {
  name: 'event',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
 .catagories {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39459c;
  margin-bottom: 18px; 
   text-align: right;
 } 

.catagories:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);
}
</style>
