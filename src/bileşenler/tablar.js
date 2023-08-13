import axios from "axios";



const Tablar = (konular) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

  const topicsStructure = document.createElement("div"); // burada class ı topic olan bir div oluşturduk ve ismini topicsStructure yaptık
  topicsStructure.classList.add("topics");  // burada topics ismini class a verdik 
  konular.forEach((konu) =>{                // burada tek tek hepsini yazmak yerine bir döngü oluşturduk.
    let divTab = document.createElement("div"); // burada tekrar bir div yapımızı oluşturduk
    divTab.classList.add("tab"); // tab isimli class ını oluşturduk
    divTab.textContent = konu; // içeriği verilene göre değişeceği için forEach deki değişken yapısını buraya yazdık yani bootstrap ve teknoloji
    topicsStructure.appendChild(divTab); // en sonda ana topic isimli div yapımıza eklemek için appenChild ı kullandık.
  });
  return topicsStructure; // Son olarak bu kodun çalışması içinde return ile kodumuzu çalıştırdık.
}

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const node = document.querySelector(secici);
  const url = `http://localhost:5001/api/konular`;
  axios.get(url)
  .then(response => {
    //console.log(response);
    const konular = Tablar(response.data.konular);
    node.appendChild(konular);
  }).catch(error => {
    console.log(error);
  })

}

export { Tablar, tabEkleyici }
