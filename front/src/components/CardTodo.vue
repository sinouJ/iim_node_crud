<template>
    <div>
        <header>
            <h3>
                <span></span>
                {{todotext}}
            </h3>
        </header>
        <main>
            <p>{{description}}</p>
        </main>
        <footer>
            <p>Created by {{username}}</p>
            <p>{{intlDate}}</p>
        </footer>
    </div>
</template>

<script>
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime';


export default {
  name: 'CardTodo',
  props: {
    username: String,
    todotext: String,
    completed: Boolean,
    date: Date,
    description: String
  },
  computed: {
    intlDate: function() {
        dayjs.extend(relativeTime)
        const duration = dayjs(this.date).fromNow()

        return duration
      }
  },
  methods: {
      checkTodo: function() {
          this.$emit("checked")
      } 
  }
};
</script>

<style lang="scss" scoped>
    @import '../scss/main.scss';

    div {
        width: 100%;
        margin-bottom: 35px;
        border-radius: $radius;
        box-shadow: $shadow-primary;
        padding: 15px;
        background-color: white;

        header {
            box-sizing: border-box;

            h3 {
                color: $black;
                text-align: left;
                position: relative;
                padding-left: 15px;
                font-size: $h3;

                span {
                    position: absolute;
                    height: 4px;
                    width: 4px;
                    background-color: $primary;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    margin: auto;
                    border-radius: 50%;
                }
            }
        }

        main {
            p {
                text-align: left;
                color: $gray;
                font-weight: 500;
            }
        }

        footer {
            p {
                text-align: right;
                color: $gray-light;
                font-size: 10px;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>
