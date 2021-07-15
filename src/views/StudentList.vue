<template>
   <h1>Events For Good</h1>
  <div class="student">
    <student v-for="student in students" :key="student.id" :student="student" />
  </div>
</template>

<script>
import student from '@/components/Student.vue'
import StudentService from '@/services/StudentsService.js'

export default {
  name: 'Students',
  components: {
    student //register it as a child component
  },
  data() {
    return {
      students: null
    }
  },
  created() {
    StudentService.getEvents()
    .then((response) => {
      this.students = response.data
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
</script>
<style scoped>
.student {
  display: flex;
  flex-direction: column;
  align-items: center;
 
}
</style>
