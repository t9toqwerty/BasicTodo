<template>
  <div class="mt-5">
    <div class="container">
      <div class="offset-md-1 col-md-10">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-header">
                Active Tasks
              </div>
              <div class="card-body">
                <b-input-group @keypress.enter="addNewTask" class="mb-2">
                  <b-form-input></b-form-input>
                </b-input-group>
                <template v-for="task in this.$store.getters.getAllTasks">
                  <b-input-group class="mb-2" v-bind:key="task.text" v-if="!task.completed">
                    <b-input-group-prepend is-text>
                      <b-form-checkbox class="mr-n2" @change="markAsDone(task.id)">
                      </b-form-checkbox>
                    </b-input-group-prepend>
                    <b-form-input :value="task.text" :aria-label="task.text" disabled>
                    </b-form-input>
                  </b-input-group>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <div class="card">
              <div class="card-header bg-success text-white">
                Completed Tasks
              </div>
              <div class="card-body">
                <template v-for="task in this.$store.getters.getAllTasks">
                  <b-input-group class="mb-2" v-bind:key="task.text" v-if="task.completed">
                    <div class="input-group-prepend">
                      <button class="btn btn-outline-danger" type="button" id="button-addon1"
                              @click="deleteTask(task.id)">
                        <b-icon-trash></b-icon-trash>
                      </button>
                    </div>
                    <input type="text" disabled class="form-control" placeholder="" aria-describedby="button-addon1"
                           :value="task.text">
                  </b-input-group>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  data: function () {
    return {
      tasks: []
    }
  },
  methods: {
    addNewTask: function (e) {
      this.$store.commit('addNewTask', {
        id: this.$uuid.v1(),
        text: e.target.value,
        completed: false,
      });
      e.target.value = "";
    },
    markAsDone: function (taskId) {
      this.$store.commit('markAsDone', taskId);
    },
    deleteTask: function (taskId) {
      this.$store.commit('deleteTask', taskId);
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
