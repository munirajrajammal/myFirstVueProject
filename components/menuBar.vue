<template>
  <div>
    <mdb-navbar color="indigo">
    <mdb-form-inline>
      <mdb-btn outline="success" type="button">Search</mdb-btn>
      <mdb-btn outline="secondary" size="sm" type="button">Search</mdb-btn>
    </mdb-form-inline>
  </mdb-navbar>
  </div>
</template>

<script>
import { mdbNavbar, mdbBtn, mdbFormInline } from 'mdbvue'
export default {
  components: {
    mdbNavbar,
    mdbBtn,
    mdbFormInline
  }
}
</script>

<style lang="scss" scoped>

</style>