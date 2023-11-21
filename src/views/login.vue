<template>
  <div class="login-wrap" >
    <div class="ms-login">
      <van-form>
        <van-cell-group inset>
          <van-field
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary">
            登 录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.login-wrap {
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .ms-login {
        width: 350px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.3);
    }
}
</style>