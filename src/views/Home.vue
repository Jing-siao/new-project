<template>
  <div class="home">
    <Form @submit="onSubmit" v-slot="{ errors }">
      {{ errors }}
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <Field
          id="email"
          name="email"
          type="email"
          class="form-control"
          rules="email|required"
          v-model="user.email"
          placeholder="請輸入 Email"
          :class="{ 'is-invalid': errors['email'] }"
        ></Field>
        <error-message class="invalid-feedback" name="email"></error-message>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">姓名</label>
        <input id="name" name="姓名" type="text" class="form-control" placeholder="請輸入姓名" />
        <span class="invalid-feedback"></span>
      </div>

      <div class="mb-3">
        <label for="phone" class="form-label">電話</label>
        <Field
          id="phone"
          name="電話"
          type="text"
          class="form-control"
          :rules="isPhone"
          placeholder="請輸入電話"
        ></Field>
        <span class="invalid-feedback"></span>
      </div>

      <div class="mb-3">
        <label for="region" class="form-label">地區</label>
        <select id="region" name="地區" class="form-control">
          <option value="">請選擇地區</option>
          <option value="台北市">台北市</option>
          <option value="高雄市">高雄市</option>
        </select>
        <span class="invalid-feedback"></span>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">地址</label>
        <input id="address" name="地址" type="text" class="form-control" placeholder="請輸入地址" />
        <span class="invalid-feedback"></span>
      </div>

      <button class="btn btn-primary" type="submit">Submit</button>
    </Form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      user: {},
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
  },
  created() {
    console.log(this);
  },
};
</script>
