<template>
   <h1>Events For Good</h1>  <!-- new element -->
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <!-- <Categories v-for="catagories in events" :key="catagories.id" :event="catagories" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
// import Categories from '@/components/Categories.vue'

export default {
  name: 'EventList',
  components: {
    EventCard ,//register it as a child component
    // Categories
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    // axios
    // .get('http://localhost:3004/events')
    EventService.getEvents()
    .then((response) => {
      this.events = response.data
    })
    .catch((error) => {
      console.log(error)
    })

  }
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
 
}
</style>
