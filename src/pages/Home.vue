<template>
  <q-page class="q-pa-md flex flex-center">
    <div class="row q-col-gutter-md justify-center full-width" style="max-width: 800px;">
      <div class="col-12 col-sm-6">
        <q-btn flat bordered no-caps class="full-width bg-white rounded-borders shadow-1 hover-shadow q-py-lg" @click="clickCamara()">
          <div class="column items-center q-gutter-y-sm">
            <q-img width="64px" height="64px" fit="contain" src="~assets/icone_camara.png" />
            <div class="text-h6 text-weight-bold text-grey-9">Câmara Federal</div>
          </div>
        </q-btn>
      </div>
      <div class="col-12 col-sm-6">
        <q-btn flat bordered no-caps class="full-width bg-white rounded-borders shadow-1 hover-shadow q-py-lg" @click="clickSenado()">
          <div class="column items-center q-gutter-y-sm">
            <q-img width="64px" height="64px" fit="contain" src="~assets/icone_senado.png" />
            <div class="text-h6 text-weight-bold text-grey-9">Senado Federal</div>
          </div>
        </q-btn>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  methods: {
    clickCamara(){ this.$router.push({name: "HomeCamara", params:{proximaPagina:'HomeCamara'}}); },
    clickSenado(){ this.$router.push({name: "HomeSenado", params:{proximaPagina:'HomeSenado'}}); }
  }
}
</script>
