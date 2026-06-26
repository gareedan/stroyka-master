<script >
import Map from "@/components/ContactsMap.vue";
import Company from "@/components/Company.vue";
export default {
  components: {
    Map,
    Company,
  }
}
</script>

<template>
  <div>
    <div class="contacts-up">
      <div class="up">
        <h1>Главная → Контакты</h1>
        <a>Контакты </a>
      </div>
    </div>
<Map/>
    <div class="container">
          <div class="ContactInfo">
                        <div class="OOO"> ООО «СтройкаСтор»</div>
                        <div class="Row">
                          <div class="column">
                          <a>115114, г. Москва, Дербеневская набережная, д. 7, стр. 8</a>
                          <a> Павелецкая<br>
                          Автобусы 13, 106, 158, 184, 632<br>
                          Остановка «Дербеневская наб., д. 7»</a></div>

                          <div class="column">
                          <a> ОГРН: 1047796688554<br>
                          ИНН 7703528301<br>
                          КПП 774850001<br>
                          ОКТМО 45380000<br>
                          ОГРН 1047796688554<br>
                          Расчетный рублевый счет: 40702810900001403352<br>
                          Банк: АО «Сбербанк» г. Москва<br>
                          Корреспондентский счет: 30101810200000000700<br>
                          БИК: 044525700
                          </a></div>

                          <div class="column">
                          <a>Поддержка клиентов<br>info@stroykastore.ru</a>
                          </div>
                        </div>
          </div>
    </div>
  <Company/>
</div>

</template>

<style scoped>
.Row{
  display: flex;
  flex-direction: row;
  gap: 50px;
  font-size: 18px;
  font-weight: 500;
  color: #2F323A;

}
.OOO{
  font-size: 34px;
  font-weight: 600;
  color: #2F323A;
  padding-bottom: 20px;
}
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
}
.contacts-up {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 40px;
}

.up {
  width: 80%;
  max-width: 1160px;
}

.up h1 {
  color: #454950;
  font-size: 16px;
  font-weight: 500;
}

.up a {
  padding-top: 20px;
  font-size: 48px;
  color: #171B24;
  padding-bottom: 40px;
}
</style>