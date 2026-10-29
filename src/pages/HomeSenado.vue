<template>
    <q-page >
        <div class="row " style="margin-top:20px;margin-bottom:20px">
            <div class="col-12 row justify-center">
                <q-img  width="60px" src="~assets/icone_senado.png" />
            </div>
               <q-expansion-item
                default-opened
                expand-separator
                expand-icon="fas fa-chevron-right"
                expand-icon-class="text-white"
                label=" Votações Senado Federal"
                class="full-width bg-amber text-white text-center text-h6"
            >
            <q-list class="col-12 text-primary bg-white text-subtitle1">
                <q-item clickable v-ripple>
                    <q-item-section avatar>
                       <q-icon color="positive"  name="fas fa-check" />
                    </q-item-section>

                    <q-item-section>
                    <q-item-label>Proposições Aprovadas</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                    <q-icon name="fas fa-chevron-right" color="primary" />
                    </q-item-section>
                </q-item>
                 <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon color="red" name="fas fa-times" />
                    </q-item-section>

                    <q-item-section>
                    <q-item-label>Proposições Rejeitadas</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                    <q-icon name="fas fa-chevron-right" color="primary" />
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section avatar>

                    </q-item-section>

                    <q-item-section>
                    <q-item-label>Ver todas as votações</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                    <q-icon name="fas fa-chevron-right" color="primary" />
                    </q-item-section>
                </q-item>
            </q-list>
            </q-expansion-item>
        </div>

       <div class="row " style="margin-top:20px;margin-bottom:20px">
            <div class="col-12 row justify-center" style="margin-bottom:10px">
                <q-img  width="60px" src="~assets/icone_deputados.png" />
            </div>
            <q-expansion-item
                default-opened
                expand-separator
                expand-icon="fas fa-chevron-right"
                expand-icon-class="text-white"
                label="Senadores"
                class="full-width bg-positive text-white text-center text-h6"
            >
            <q-list class="col-12 text-primary bg-white text-subtitle1">
                <q-item v-for="proposicao in proposicoes" :key="proposicao.sigla" clickable v-ripple>
                    <q-item-section avatar class="text-weight-bold">
                        {{proposicao.sigla}}
                    </q-item-section>

                    <q-item-section>
                    <q-item-label>{{proposicao.nome}}</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                    <q-icon name="fas fa-chevron-right" color="primary" />
                    </q-item-section>
                </q-item>

            </q-list>
            </q-expansion-item>
        </div>
    </q-page>
</template>
<script>
const PROPOSICOES = [
    {sigla:'PL', nome:'Projeto de Lei'},
    {sigla:'PLP', nome:'Projeto de Lei Complementar'},
    {sigla:'PEC', nome:'Proposta de Emenda Constitucional'},
    {sigla:'', nome:'Ver Todas Proposições'},
]
const SENADORES = [
    {icone:'', atributo:'Informações Gerais'},
    {icone:'', atributo:'Redes Sociais / Publicações'},
    {icone:'', atributo:'Profissões / Empregos'},
    {icone:'', atributo:'Despesas'},

]
const STATUS_PROPOSICOES = [
    {icone:'fas fa-check', texto:'Proposições Aprovadas', iconeCor:'positive', status:'1'},
    {icone:'fas fa-times', texto:'Proposições Rejeitadas', iconeCor:'red', status:'0'},
    {icone:'', texto:'Ver todas as votações', iconeCor:'', status:'todas'},
]
export default {
  data () {
    return {
        tab:"1",
        proposicoes:PROPOSICOES,
        senadores:SENADORES,
        statusProposicoes:STATUS_PROPOSICOES,
    }
  },
  methods:{
    clickProposicao(proposicao){
        this.$router.push({name:"ListaCategoria", params:{proximaPagina:'ListaProposicoes', acaoTomada:proposicao.sigla}})
    },
    clickVotacao(votacao){
        this.$router.push({name:"ListaVotacoes", params:{proximaPagina:'ListaVotacoes', aprovacao:votacao.status}})
    },
    clickDeputados(deputado){
        this.$router.push({name:"ListaDeputados", params:{proximaPagina:'ListaDeputados', acaoTomada:deputado.atributo}})
    },
    limparPesquisas(){
        this.$q.localStorage.set('ultimaPesquisaDeputados',false);
        this.$q.localStorage.set('ultimaPesquisaProposicoes',false);
        this.$q.localStorage.set('ultimaPesquisaVotacoes',false);
        this.$q.localStorage.set('ultimosAutoresProposicoes',[])
    }
  },
  watch:{

  },
  mounted(){
      this.limparPesquisas()
      console.log(this.usuarioLogado);
  }

}
</script>
<style >

</style>
