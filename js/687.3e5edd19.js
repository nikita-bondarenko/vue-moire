"use strict";(self["webpackChunkmoire_build"]=self["webpackChunkmoire_build"]||[]).push([[687],{387:function(e){function r(e){var r=[].slice.call(arguments,1),t=0;return e.replace(/%d/g,(function(){return r[t++]}))}function t(e){return e%10===1&&e%100!==11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2}e.exports=function(e,a,l,n,i){if(!e)return r(a,e);switch(t(e)){case 0:return r(l,e);case 1:return r(n,e);default:return r(i,e)}}},4908:function(e,r,t){function a(){const e=t(387),r=r=>e(r,"Товаров нет","%d товар","%d товара","%d товаров"),a=e=>new Intl.NumberFormat("ru-RU").format(e),l=e=>{const r={red:"Красный",blue:"Синий",green:"Зеленый",yellow:"Желтый",purple:"Фиолетовый",pink:"Розовый",black:"Черный",white:"Белый"};return r[e.toLowerCase().trim()]},n=e=>!!e.gallery&&e.gallery[0].file.url;return{findImage:n,translateColorName:l,editNumberFormat:a,pluralizeProductAmount:r}}t.d(r,{Z:function(){return a}})},4929:function(e,r,t){t.d(r,{Z:function(){return m}});var a=t(3396),l=t(7139);const n=["src"];function i(e,r,t,i,s,u){return e.loading?((0,a.wg)(),(0,a.iD)("div",(0,l.vs)((0,a.dG)({key:0},e.$attrs)),[(0,a._)("img",{src:e.PRELOADER_BIG_URL,alt:"Прелоадер"},null,8,n)],16)):e.failed?(0,a.WI)(e.$slots,"default",(0,l.vs)((0,a.dG)({key:1},e.$attrs))):(0,a.kq)("",!0)}var s=t(86),u=t(678),o=t(4870),d=(0,a.aZ)({props:["loading","failed"],setup(e){const r=(0,o.Vh)(e,"failed"),t=(0,u.yj)().name,l=(0,u.tv)();return(0,a.YP)((()=>r.value),(e=>{e&&"product"===t&&l.push({name:"notFound"})})),{PRELOADER_BIG_URL:s.wo}}}),c=t(89);const _=(0,c.Z)(d,[["render",i]]);var m=_},4087:function(e,r,t){t.d(r,{Z:function(){return h}});var a=t(3396),l=t(7139);const n={class:"cart__block"},i={class:"cart__orders"},s={class:"cart__total"},u=(0,a.Uk)(" Доставка: "),o=(0,a.Uk)(" Итого: "),d=["disabled"],c={class:"cart__error form__error-block"},_=(0,a._)("h4",null,"Заявка не отправлена!",-1),m=(0,a._)("p",null,"Похоже произошла ошибка. Попробуйте отправить снова или перезагрузите страницу.",-1),p=(0,a.Uk)(" Оформить заказ ");function v(e,r,t,v,f,y){const b=(0,a.up)("BaseSmallLoader");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("ul",i,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.list,(r=>((0,a.wg)(),(0,a.iD)("li",{key:r.id,class:"cart__order"},[(0,a._)("h3",null,(0,l.zw)(r.product.title),1),(0,a._)("b",null,(0,l.zw)(e.editNumberFormat(r.price))+" ₽",1),(0,a._)("span",null,"Размер: "+(0,l.zw)(r.size.title),1),(0,a._)("span",null,"Колличество: "+(0,l.zw)(r.quantity),1),(0,a._)("span",null,"Цвет: "+(0,l.zw)(e.translateColorName(r.color.color.title)),1),(0,a._)("span",null,"Артикул: "+(0,l.zw)(r.id),1)])))),128))]),(0,a._)("div",s,[(0,a._)("p",null,[u,(0,a._)("b",null,(0,l.zw)(e.deliveryPrice.string),1)]),(0,a._)("p",null,[o,(0,a._)("b",null,(0,l.zw)(e.totalQuantity),1),(0,a.Uk)(" "+(0,l.zw)(e.pluralizeProductAmount(e.totalQuantity).split(" ").slice(-1).toString())+" на сумму ",1),(0,a._)("b",null,(0,l.zw)(e.totalPrice)+" ₽",1)])]),"orderInfo"!==e.route.name?((0,a.wg)(),(0,a.iD)("button",{key:0,disabled:e.sending,class:"cart__button button button--primery",type:"submit"},[(0,a.Wm)(b,{class:"button__loader",sending:e.sending,failed:e.error},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)(a.lR,{to:"#teleport"},[(0,a._)("div",c,[_,m,(0,a.Uk)(" "+(0,l.zw)(e.errorMessage),1)])]))])),_:1},8,["sending","failed"]),p],8,d)):(0,a.kq)("",!0)])}var f=t(4870),y=t(7084),b=t(4908),g=t(678),k=(0,a.aZ)({props:["error","errorMessage","sending","list","delivery"],components:{BaseSmallLoader:y.Z},setup(e){const r=(0,g.yj)(),{editNumberFormat:t,pluralizeProductAmount:l,translateColorName:n}=(0,b.Z)(),{list:i,delivery:s}=(0,f.BK)(e),u=(0,a.Fl)((()=>i.value.reduce(((e,r)=>r.quantity+e),0))),o=(0,a.Fl)((()=>{if(s.value.deliveryTypeId>0){const e=Number(s.value.deliveryVariety.find((e=>e.id===s.value.deliveryTypeId)).price),r=0===e?"бесплатно":`${e} ₽`;return{string:r,price:e}}return{string:"не выбрано",price:0}})),d=(0,a.Fl)((()=>t(i.value.reduce(((e,r)=>r.quantity*r.price+e),0)+o.value.price)));return{translateColorName:n,route:r,deliveryPrice:o,totalPrice:d,totalQuantity:u,editNumberFormat:t,pluralizeProductAmount:l}}}),w=t(89);const D=(0,w.Z)(k,[["render",v]]);var h=D},4342:function(e,r,t){t.d(r,{Z:function(){return f}});var a=t(3396);const l={class:"breadcrumbs"},n={class:"breadcrumbs__item"},i={class:"breadcrumbs__link",href:"index.html"},s=(0,a.Uk)(" Каталог "),u={class:"breadcrumbs__item"},o={class:"breadcrumbs__link",href:"cart.html"},d=(0,a.Uk)(" Корзина "),c=(0,a._)("li",{class:"breadcrumbs__item"},[(0,a._)("a",{class:"breadcrumbs__link"}," Оформление заказа ")],-1);function _(e,r,t,_,m,p){const v=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("ul",l,[(0,a._)("li",n,[(0,a._)("a",i,[(0,a.Wm)(v,{to:{name:"main"},class:"breadcrumbs__link"},{default:(0,a.w5)((()=>[s])),_:1})])]),(0,a._)("li",u,[(0,a._)("a",o,[(0,a.Wm)(v,{to:{name:"basket"},class:"breadcrumbs__link"},{default:(0,a.w5)((()=>[d])),_:1})])]),c])}var m={},p=t(89);const v=(0,p.Z)(m,[["render",_]]);var f=v},5687:function(e,r,t){t.r(r),t.d(r,{default:function(){return P}});var a=t(3396);const l={class:"content container"},n={class:"content__top"},i=(0,a._)("h1",{class:"content__title"},[(0,a.Uk)("Заказ оформлен "),(0,a._)("span",null,"№ 23621")],-1),s={class:"cart"},u={class:"cart__form form",action:"#",method:"POST"},o={class:"cart__field"},d=(0,a._)("p",{class:"cart__message"}," Благодарим за выбор нашего магазина. На Вашу почту придет письмо с деталями заказа. Наши менеджеры свяжутся с Вами в течение часа для уточнения деталей доставки. ",-1),c=(0,a.Uk)("Не удалось получить информацию о заказе. Попробуйте перезагрузить страницу."),_={key:1,class:"dictionary"};function m(e,r,t,m,p,v){const f=(0,a.up)("OrderBreadcrumbs"),y=(0,a.up)("BaseBigLoader"),b=(0,a.up)("OrderDictionaryItem"),g=(0,a.up)("OrderBasketItemsList");return(0,a.wg)(),(0,a.iD)("main",l,[(0,a._)("div",n,[(0,a.Wm)(f),i]),(0,a._)("section",s,[(0,a._)("form",u,[(0,a._)("div",o,[d,e.isOrderLoading||e.isOrderLoadingFailed?((0,a.wg)(),(0,a.j4)(y,{key:0,class:"dictionary",loading:e.isOrderLoading,failed:e.isOrderLoadingFailed},{default:(0,a.w5)((()=>[c])),_:1},8,["loading","failed"])):((0,a.wg)(),(0,a.iD)("ul",_,[(0,a.Wm)(b,{title:"Получатель",value:e.orderData.name},null,8,["value"]),(0,a.Wm)(b,{title:" Адрес доставки",value:e.orderData.address},null,8,["value"]),(0,a.Wm)(b,{title:"Телефон",value:e.orderData.phone},null,8,["value"]),(0,a.Wm)(b,{title:"Email",value:e.orderData.email},null,8,["value"]),(0,a.Wm)(b,{title:"Способ оплаты",value:e.orderData.paymentType},null,8,["value"])]))]),(0,a.Wm)(g,{list:e.orderData.name?e.orderData.basket.items:[],delivery:e.orderData.name?{deliveryTypeId:e.orderData.deliveryType.id,deliveryVariety:[e.orderData.deliveryType]}:{}},null,8,["list","delivery"])])])])}var p=t(4870),v=t(678),f=t(4929),y=t(7139);const b={class:"dictionary__item"},g={class:"dictionary__key"},k={class:"dictionary__value"};function w(e,r,t,l,n,i){return(0,a.wg)(),(0,a.iD)("li",b,[(0,a._)("span",g,(0,y.zw)(t.title),1),(0,a._)("span",k,(0,y.zw)(t.value),1)])}var D={props:["title","value"]},h=t(89);const z=(0,h.Z)(D,[["render",w]]);var Z=z,L=t(4342),O=t(4087),B=t(4078),I=(0,a.aZ)({components:{BaseBigLoader:f.Z,OrderDictionaryItem:Z,OrderBreadcrumbs:L.Z,OrderBasketItemsList:O.Z},setup(){const{fetchOrderData:e}=(0,B.Z)(),r=(0,p.iH)(!0),t=(0,p.iH)(!1),a=(0,p.iH)({});return e((0,v.yj)().params.id).then((e=>{a.value=e.data})).catch((()=>{t.value=!0})).then((()=>{r.value=!1})),{isOrderLoading:r,isOrderLoadingFailed:t,orderData:a}}});const F=(0,h.Z)(I,[["render",m]]);var P=F}}]);
//# sourceMappingURL=687.3e5edd19.js.map