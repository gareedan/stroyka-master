<script setup>

</script>

<template>
  <div class="main">
    <div class="mainBrand">
      <div class="brandColumnFirst">
        <a>Главная → Возврат</a>
        <h1>Возврат</h1>
        <h2>Ошиблись при выборе товара? Передумали? Ничего страшного! СтройкаСтор в течение 7 дней готова принять обратно или обменять Ваш товар.</h2>
      </div>
      <div class="brandColumn">
        <img src="@/images/Item/box.svg" alt="">
      </div>
    </div>
  </div>
  <div class="MainSection">
  </div>
  <div class="return-policy">
    <div class="policy-item">
      <div class="policy-left">
        <h1>Возврат товара ненадлежащего качества</h1>
      </div>
      <div class="policy-right">
        <p>В случае, если вы обнаружили недостаток у товара, сообщите об этом менеджеру магазина, в котором вы оформляли заказ в срок до 20 дней после дня получения заказа.</p>
        <p>Если вы обнаружили, что с товаром что-то не так:</p>
        <p>Если вы решили отказаться от товара при его получении, сообщите водителю о том, что вы обнаружили проблему у товара. Вам будет предложено заполнить необходимые документы (в т.ч. акт возврата), после чего товар будет возвращен в магазин.</p>
        <p>Пожалуйста, имейте в виду, что при возврате товаров магазину может потребоваться проведение экспертизы.</p>
      </div>
    </div>

    <div class="policy-item">
      <div class="policy-left">
        <h1>Возврат денежных средств</h1>
      </div>
      <div class="policy-right">
        <p>После возврата товара в магазин СтройкаСтор и, при необходимости, проведения экспертизы, вам будут возвращены денежные средства в размере стоимости приобретенного товара. В случае возврата оплаты за товар надлежащего качества стоимость оплаченной доставки или оказанных дополнительных услуг не возвращается. Если проведение экспертизы возвращаемого товара не требуется, операция по возврату денежных средств будет произведена в течение следующего рабочего дня по графику работы магазина. Пожалуйста, имейте в виду, что поступление возвращенных средств на вашу карту зависит от сроков возврата, установленных банком вашей пластиковой карты.</p>
      </div>
    </div>

    <div class="policy-item">
      <div class="policy-left">
        <h1>Обмен</h1>
      </div>
      <div class="policy-right">
        <p>Вы можете обменять товар из своего заказа на другой, более подходящий для вас, как в процессе обработки вашего заказа, так и после получения вами вашего заказа, за исключением товаров, которые не подлежат возврату и обмену по законодательству РФ.</p>
        <p>До сборки (и отправки в службу доставки) вашего заказа обмен товаров возможен путем корректировки заказа менеджером магазина по согласованию с вами. После получения своего заказа вы также можете произвести обмен приобретенного вами товара, за исключением товаров, которые не подлежат возврату и обмену по законодательству РФ. В случае обмена товара надлежащего качества стоимость оплаченной доставки или оказанных дополнительных услуг не возвращается.</p>
        <p>Возврат товара для его обмена производится согласно правилам возврата товара надлежащего или ненадлежащего качества, описанных выше.</p>
        <p>Пожалуйста, имейте в виду, что при обмене/возврате товаров магазину может потребоваться проведение экспертизы.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
*{
  width: 100%;
font-family: 'Manrope', sans-serif;
}
.main{
  padding-top: 40px;
  padding-bottom: 40px;
}
.mainBrand {
  width: 80%;
  margin: 0 auto;
  display: flex;
  background: #F6F6F6;
  border-radius: 10px;
  align-items: center;
}
.brandColumnFirst {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

}
.brandColumnFirst a{
  text-decoration: none;
  font-size: 16px;
  color: #8b8d92;
  padding-left: 100px;
}
.brandColumnFirst h1{
  color: #171B24;
  font-size: 48px;
  padding-left: 100px;
}
.brandColumn{
  max-width: 707px;
}
.brandColumnFirst h2{
  color: #2F323A;
  font-size: 20px;
  padding-left: 100px;
  font-weight: 100;
}
.return-policy {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.policy-item {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 60px;
  padding: 40px 0;
}

.policy-item:last-child {
  border-bottom: none;
}

.policy-left h1 {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
}

.policy-right p {
  font-size: 16px;
  line-height: 1.8;
  color: #2d2d44;
  margin: 0 0 16px 0;
}

.policy-right p:last-child {
  margin-bottom: 0;
}
</style>