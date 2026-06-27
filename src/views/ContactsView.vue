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
            <a class="address">115114, г. Москва, Дербеневская набережная, д. 7, стр. 8</a>
            <a class="metro">Павелецкая</a>
            <a class="buses">Автобусы 13, 106, 158, 184, 632</a>
            <a class="stop">Остановка «Дербеневская наб., д. 7»</a>
          </div>

          <div class="column">
            <a class="support">Поддержка клиентов</a>
            <a class="email">info@stroykastore.ru</a>
          </div>

          <div class="column">
            <a> ОГРН: 1047796688554</a>
            <a> ИНН 7703528301</a>
            <a> КПП 774850001</a>
            <a> ОКТМО 45380000</a>
            <a> ОГРН 1047796688554</a>
            <a> Расчетный рублевый счет:</a>
            <a> 40702810900001403352</a>
            <a> Банк: АО «Сбербанк» г. Москва</a>
            <a> Корреспондентский счет:</a>
            <a> 30101810200000000700</a>
            <a> БИК: 044525700</a>
          </div>
        </div>
      </div>
    </div>
    <Company/>
  </div>

</template>

<style scoped>
.Row{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  font-size: 18px;
  font-weight: 500;
  color: #2F323A;
}
.column {
  display: flex;
  flex-direction: column;
  gap: 8px;
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
.ContactInfo {
  width: 80%;
  max-width: 1160px;
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


@media (max-width: 375px) {
  .up a {
    font-size: 32px;
  }

  .ContactInfo {
    width: 90%;
  }

  .OOO {
    font-size: 24px;
  }

  .Row {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .column {
    gap: 4px;
  }

  .column a {
    font-size: 14px;
    line-height: 1.5;
  }

  .address {
    font-weight: 500;
  }

  .metro {
    font-weight: 500;
    font-size: 16px;
    margin-top: 4px;
  }

  .buses {
    font-weight: 400;
  }

  .stop {
    font-weight: 400;
  }

  .support {
    font-weight: 500;
  }

  .email {
    font-weight: 400;
    color: #2F323A;
  }

  .container {
    padding: 20px 0;
  }
}
</style>