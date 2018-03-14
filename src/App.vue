<template>
  <div id="app">
    <draggable v-model="teams">
      <transition-group>
        <div v-for="team in teams" :key="team.name">
          {{ team.name }}
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: { draggable },

  data () {
    return {
      myteams: []
    }
  },

  computed: {
    teams: {
      get() {
        return this.$store.state.teams
      },
      set(value) {
        this.$store.commit('setTeam', value)
      }
    }
  }
}
</script>
