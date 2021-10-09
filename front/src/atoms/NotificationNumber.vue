<template>
  <div class="notification-number" :style="`background-color: ${bgColor}; color: ${textColor}`">
      <p>
          {{count}}
      </p>
  </div>
</template>

<script>
export default {
    name: 'NotificationNumber',
    props: {
        count: Number,
        bgColor: String,
        textColor: String
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/main.scss';

    div {
        display: flex;
        height: 30px;
        width: 30px;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: $notification;
        border-radius: $radius;

        p {
            margin-bottom: -3px;
        }
    }
</style>