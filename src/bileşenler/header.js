

const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const divHeader = document.createElement("div");
  divHeader.classList.add("header"); // burada bir header adlı bir class oluşturduk.
  const span1 = document.createElement("span"); // burada span1 adlı bir yapı oluşturuyoruz.
  span1.classList.add("date"); // daha sonra span1 adlı yapıya bir class atıyoruz.
  span1.textContent = tarih;   // span1 adlı yapının içerik ismini (tarih) yazıyoruz.
  divHeader.appendChild(span1); // daha sonra biz bunu divHeader adlı div yapısının içine atıyoruz. Bundan sonrakiler aynı şekilde ilerliyor.
  const h1Structure =  document.createElement("h1");
  h1Structure.textContent = baslik;
  divHeader.appendChild(h1Structure);
  const span2 = document.createElement("span");
  span2.classList.add("temp");
  span2.textContent = yazi;
  divHeader.appendChild(span2);

  return divHeader; // tüm bunları çalıştırmak için div içine almıştık divHeader adlı div yapımızı return ederek kodumuzu çalıştırıyoruz.

}

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  const node = document.querySelector(secici); // bu kısımda node adlı yapımızı oluşturduk ve secici değişkenini querySelector ile tuttuk
  const header = Header("Workintech -FSWeb- P0523' den Haberler","29.07.2023", "Dünyanın En İyi Teknoloji Haberleri Sitesine Hoşgeldiniz")
  // Yukarıdaki kodda Header adlı yapımızın içini doldurduk.
  node.appendChild(header); // Bu kısımda da header adlı yapımızı node yapısına ekledik.
}

export { Header, headerEkleyici }// aslında burada Header ı yazmamıza da gerek yok çünkü headerEkleyici nin içinde bunu kullandık.
// aslında 43 ile 46 satır arasını şu şekilde de yazabiliriz.
// const node = document.querySelector(secici).appendChild(Header("Workintech -FSWeb- P0523' den Haberler","29.07.2023", "Dünyanın En İyi Teknoloji Haberleri Sitesine Hoşgeldiniz"))
// yukarıdaki kod gibi de bitirebilirdik.
// bu kod da ki oluşumu içten dışa doğru olur yani ilk önce Header çalıştırıp sonra node u çalıştırır.