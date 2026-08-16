/* =========================================================
   İŞÇİ HAKLARI ASİSTANI
   VERİ DOSYASI
   Dosya: isci-haklari-data.js
   ========================================================= */

"use strict";

window.ISCI_HAKLARI_DATA = {

    bilgi: {
        uygulama: "İşçi Hakları Asistanı",
        veriSurumu: "2026.1",
        guncelleme: "16.08.2026",
        anaKaynak:
            "T.C. Çalışma ve Sosyal Güvenlik Bakanlığı",
        resmiMevzuat:
            "https://www.csgb.gov.tr/cgm/mevzuat/"
    },


    /* =====================================================
       KANUNLAR
       ===================================================== */

    kanunlar: {

        "4857": {
            ad: "4857 Sayılı İş Kanunu",
            kaynak:
                "T.C. Çalışma ve Sosyal Güvenlik Bakanlığı",

            maddeler: {

                1: {
                    baslik: "Amaç ve kapsam",
                    metin: `Bu Kanunun amacı işverenler ile bir iş sözleşmesine dayanarak çalıştırılan işçilerin çalışma şartları ve çalışma ortamına ilişkin hak ve sorumluluklarını düzenlemektir.`
                },

                2: {
                    baslik: "Tanımlar",
                    metin: `Bir iş sözleşmesine dayanarak çalışan gerçek kişiye işçi, işçi çalıştıran gerçek veya tüzel kişiye yahut tüzel kişiliği olmayan kurum ve kuruluşlara işveren, işçi ile işveren arasında kurulan ilişkiye iş ilişkisi denir.`
                },

                3: {
                    baslik: "İşyerini bildirme",
                    metin: `İşyerini bildirme yükümlülüğüne ilişkin hükümler bu maddede düzenlenmiştir.`
                },

                4: {
                    baslik: "İstisnalar",
                    metin: `İş Kanununun uygulanmayacağı iş ve iş ilişkileri bu maddede düzenlenmiştir.`
                },

                5: {
                    baslik: "Eşit davranma ilkesi",
                    metin: `İş ilişkisinde dil, ırk, cinsiyet, siyasal düşünce, felsefî inanç, din ve mezhep ve benzeri sebeplere dayalı ayırım yapılamaz.

İşveren, esaslı sebepler olmadıkça tam süreli çalışan işçi karşısında kısmî süreli çalışan işçiye, belirsiz süreli çalışan işçi karşısında belirli süreli çalışan işçiye farklı işlem yapamaz.

İşveren, biyolojik veya işin niteliğine ilişkin sebepler zorunlu kılmadıkça, bir işçiye, iş sözleşmesinin yapılmasında, şartlarının oluşturulmasında, uygulanmasında ve sona ermesinde, cinsiyet veya gebelik nedeniyle doğrudan veya dolaylı farklı işlem yapamaz.`
                },

                17: {
                    baslik: "Süreli fesih",
                    metin: `Belirsiz süreli iş sözleşmelerinin feshinden önce durumun diğer tarafa bildirilmesi gerekir.

İş sözleşmeleri;
a) İşi altı aydan az sürmüş olan işçi için, bildirimin diğer tarafa yapılmasından başlayarak iki hafta sonra,
b) İşi altı aydan birbuçuk yıla kadar sürmüş olan işçi için, bildirimin diğer tarafa yapılmasından başlayarak dört hafta sonra,
c) İşi birbuçuk yıldan üç yıla kadar sürmüş olan işçi için, bildirimin diğer tarafa yapılmasından başlayarak altı hafta sonra,
d) İşi üç yıldan fazla sürmüş işçi için, bildirim yapılmasından başlayarak sekiz hafta sonra feshedilmiş sayılır.

Bu süreler asgari olup sözleşmeler ile artırılabilir.`
                },

                18: {
                    baslik: "Feshin geçerli sebebe dayandırılması",
                    metin: `Otuz veya daha fazla işçi çalıştırılan işyerlerinde en az altı aylık kıdemi bulunan işçinin belirsiz süreli iş sözleşmesini fesheden işveren, işçinin yeterliliğinden veya davranışlarından ya da işletmenin, işyerinin veya işin gereklerinden kaynaklanan geçerli bir sebebe dayanmak zorundadır.`
                },

                19: {
                    baslik: "Fesih bildirimine itiraz ve usulü",
                    metin: `İşveren fesih bildirimini yazılı yapmak ve fesih sebebini açık ve kesin bir şekilde belirtmek zorundadır.`
                },

                20: {
                    baslik: "Fesih bildirimine itiraz",
                    metin: `İş sözleşmesi feshedilen işçi, fesih bildiriminde sebep gösterilmediği veya gösterilen sebebin geçerli bir sebep olmadığı iddiası ile İş Mahkemesinde dava açabilir.`
                },

                21: {
                    baslik: "Geçersiz sebeple yapılan feshin sonuçları",
                    metin: `İşverence geçerli sebep gösterilmediği veya gösterilen sebebin geçerli olmadığı mahkemece veya özel hakem tarafından tespit edilerek feshin geçersizliğine karar verildiğinde, işveren işçiyi bir ay içinde işe başlatmak zorundadır.`
                },

                24: {
                    baslik: "İşçinin haklı nedenle derhal fesih hakkı",
                    metin: `Süresi belirli olsun veya olmasın işçi, Kanunda belirtilen sağlık sebepleri, ahlak ve iyi niyet kurallarına uymayan haller ve benzeri sebeplerle iş sözleşmesini sürenin bitiminden önce veya bildirim süresini beklemeksizin feshedebilir.`
                },

                25: {
                    baslik: "İşverenin haklı nedenle derhal fesih hakkı",
                    metin: `Süresi belirli olsun veya olmasın işveren, Kanunda belirtilen sağlık sebepleri, ahlak ve iyi niyet kurallarına uymayan haller ve benzeri sebeplerle iş sözleşmesini sürenin bitiminden önce veya bildirim süresini beklemeksizin feshedebilir.`
                },

                27: {
                    baslik: "Yeni iş arama izni",
                    metin: `Bildirim süreleri içinde işveren, işçiye yeni bir iş bulması için gerekli olan iş arama iznini iş saatleri içinde ve ücret kesintisi yapmadan vermek zorundadır.`
                },

                32: {
                    baslik: "Ücret ve ücretin ödenmesi",
                    metin: `Genel anlamda ücret bir kimseye bir iş karşılığında işveren veya üçüncü kişiler tarafından sağlanan ve para ile ödenen tutardır.`
                },

                34: {
                    baslik: "Ücretin gününde ödenmemesi",
                    metin: `Ücreti ödeme gününden itibaren yirmi gün içinde mücbir bir neden dışında ödenmeyen işçi, iş görme borcunu yerine getirmekten kaçınabilir.`
                },

                37: {
                    baslik: "Ücret hesap pusulası",
                    metin: `İşveren işçiye ücret hesabını gösteren imzalı veya işyerinin özel işaretini taşıyan bir pusula vermek zorundadır.`
                },

                38: {
                    baslik: "Ücret kesme cezası",
                    metin: `İşveren toplu iş sözleşmesi veya iş sözleşmelerinde gösterilmiş bulunan sebepler dışında işçiye ücret kesme cezası veremez.`
                },

                41: {
                    baslik: "Fazla çalışma ücreti",
                    metin: `Ülkenin genel yararları yahut işin niteliği veya üretimin artırılması gibi nedenlerle fazla çalışma yapılabilir.

Fazla çalışma, Kanunda yazılı koşullar çerçevesinde, haftalık kırkbeş saati aşan çalışmalardır.

Her bir saat fazla çalışma için verilecek ücret normal çalışma ücretinin saat başına düşen miktarının yüzde elli yükseltilmesi suretiyle ödenir.`
                },

                44: {
                    baslik: "Ulusal bayram ve genel tatil günleri",
                    metin: `Ulusal bayram ve genel tatil günlerinde işyerlerinde çalışılıp çalışılmayacağı toplu iş sözleşmesi veya iş sözleşmeleri ile kararlaştırılır.`
                },

                46: {
                    baslik: "Hafta tatili ücreti",
                    metin: `Bu Kanun kapsamına giren işyerlerinde, işçilere tatil gününden önce 63 üncü maddeye göre belirlenen iş günlerinde çalışmış olmaları koşuluyla yedi günlük bir zaman dilimi içinde kesintisiz en az yirmidört saat dinlenme verilir.`
                },

                47: {
                    baslik: "Ulusal bayram ve genel tatil günü ücreti",
                    metin: `Bu Kanun kapsamına giren işyerlerinde çalışan işçilere, kanunlarda ulusal bayram ve genel tatil günü olarak kabul edilen günlerde çalışmazlarsa bir iş karşılığı olmaksızın o günün ücretleri tam olarak, tatil yapmayarak çalışırlarsa ayrıca çalışılan her gün için bir günlük ücret ödenir.`
                },

                53: {
                    baslik: "Yıllık ücretli izin hakkı",
                    metin: `İşyerinde işe başladığı günden itibaren, deneme süresi de içinde olmak üzere, en az bir yıl çalışmış olan işçilere yıllık ücretli izin verilir.`
                },

                56: {
                    baslik: "Yıllık ücretli iznin uygulanması",
                    metin: `Yıllık ücretli izin işveren tarafından bölünemez. Ancak izin süreleri tarafların anlaşması ile bir bölümü on günden aşağı olmamak üzere bölümler halinde kullanılabilir.`
                },

                57: {
                    baslik: "Yıllık izin ücreti",
                    metin: `İşveren, yıllık ücretli iznini kullanan her işçiye, izin dönemine ilişkin ücretini izin başlamadan önce peşin olarak ödemek veya avans olarak vermek zorundadır.`
                },

                59: {
                    baslik: "İş sözleşmesinin sona ermesinde izin ücreti",
                    metin: `İş sözleşmesinin herhangi bir nedenle sona ermesi halinde işçinin hak kazanıp da kullanmadığı yıllık izin sürelerine ait ücreti sözleşmenin sona erdiği tarihteki ücreti üzerinden kendisine veya hak sahiplerine ödenir.`
                },

                63: {
                    baslik: "Çalışma süresi",
                    metin: `Genel bakımdan çalışma süresi haftada en çok kırkbeş saattir. Aksi kararlaştırılmamışsa bu süre, haftanın çalışılan günlerine eşit ölçüde bölünerek uygulanır.`
                },

                64: {
                    baslik: "Telafi çalışması",
                    metin: `Zorunlu nedenlerle işin durması, ulusal bayram ve genel tatillerden önce veya sonra işyerinin tatil edilmesi veya benzer nedenlerle normal çalışma sürelerinin önemli ölçüde altında çalışılması veya tamamen tatil edilmesi hallerinde telafi çalışması yaptırılabilir.`
                },

                68: {
                    baslik: "Ara dinlenmesi",
                    metin: `Günlük çalışma süresinin ortalama bir zamanında o yerin gelenekleri ve işin gereğine göre ayarlanmak suretiyle işçilere ara dinlenmesi verilir.`
                },

                69: {
                    baslik: "Gece süresi ve gece çalışmaları",
                    metin: `Çalışma hayatında gece en geç saat 20.00'de başlayarak en erken saat 06.00'ya kadar geçen ve her halde en fazla onbir saat süren dönemdir.`
                },

                74: {
                    baslik: "Analık halinde çalışma ve süt izni",
                    metin: `Kadın işçilerin doğumdan önce ve sonra çalıştırılmaları, doğum halinde ücretsiz izin ve süt iznine ilişkin hükümler bu maddede düzenlenmiştir.`
                },

                75: {
                    baslik: "İşçi özlük dosyası",
                    metin: `İşveren çalıştırdığı her işçi için özlük dosyası düzenlemek zorundadır.`
                },

                108: {
                    baslik: "İdari para cezalarının uygulanmasına ilişkin hususlar",
                    metin: `Bu Kanunda öngörülen idari para cezalarının uygulanmasına ilişkin hükümler bu maddede düzenlenmiştir.`
                }

            }
        },


        "1475": {

            ad: "1475 Sayılı İş Kanunu",
            maddeler: {

                14: {
                    baslik: "Kıdem tazminatı",
                    metin: `1475 sayılı İş Kanununun yürürlükte kalan 14 üncü maddesi kıdem tazminatına ilişkin düzenlemeleri içermektedir.

İşçinin kıdem tazminatına hak kazanabilmesi bakımından iş sözleşmesinin sona erme şekli, kıdem süresi ve Kanunda belirtilen diğer şartlar birlikte değerlendirilmelidir.`
                }

            }
        }

    },


    /* =====================================================
       SORU → MADDE EŞLEŞTİRME
       ===================================================== */

    eslestirmeler: {

        "fazla mesai": {
            maddeler: ["4857/41", "4857/63"],
            cevap:
                "Fazla çalışma bakımından haftalık 45 saatlik çalışma süresi ve fazla çalışmanın ücretlendirilmesi birlikte değerlendirilmelidir."
        },

        "fazla çalışma": {
            maddeler: ["4857/41", "4857/63"],
            cevap:
                "Haftalık 45 saati aşan çalışmalar kural olarak fazla çalışma kapsamında değerlendirilir. Her fazla çalışma saati için normal saat ücretinin yüzde 50 artırılmış tutarı uygulanır."
        },

        "pazar": {
            maddeler: ["4857/46", "4857/47"],
            cevap:
                "Pazar çalışması değerlendirilirken öncelikle işçinin hafta tatili hakkı belirlenmelidir. Hafta tatilinde çalışma yapılması ayrıca ücret sonucunu doğurabilir."
        },

        "hafta tatili": {
            maddeler: ["4857/46"],
            cevap:
                "İşçiye yedi günlük zaman dilimi içinde kesintisiz en az 24 saat hafta tatili verilmesi gerekir."
        },

        "yıllık izin": {
            maddeler: ["4857/53", "4857/56", "4857/57", "4857/59"],
            cevap:
                "En az bir yıllık çalışma süresi tamamlandığında yıllık ücretli izin hakkı doğar. Kullanılmayan izinler iş sözleşmesinin sona ermesi halinde ücrete dönüşür."
        },

        "ücret": {
            maddeler: ["4857/32", "4857/34", "4857/37"],
            cevap:
                "Ücretin zamanında ve eksiksiz ödenmesi gerekir. Ücretin ödenmemesi halinde Kanunun 34. maddesindeki özel sonuçlar gündeme gelebilir."
        },

        "maaş": {
            maddeler: ["4857/32", "4857/34", "4857/37"],
            cevap:
                "Maaşın zamanında ödenmemesi halinde işçinin Kanundan doğan hakları ayrıca değerlendirilmelidir."
        },

        "işten çıkarma": {
            maddeler: ["4857/17", "4857/18", "4857/19", "4857/20", "4857/21"],
            cevap:
                "Fesihte işçinin kıdemi, sözleşmenin türü, işyerindeki işçi sayısı, fesih sebebi ve fesih usulü birlikte incelenmelidir."
        },

        "işe iade": {
            maddeler: ["4857/18", "4857/19", "4857/20", "4857/21"],
            cevap:
                "İşe iade bakımından işçinin kıdemi, işyerindeki işçi sayısı ve feshin geçerli bir sebebe dayanıp dayanmadığı önemlidir."
        },

        "kıdem": {
            maddeler: ["1475/14", "4857/24", "4857/25"],
            cevap:
                "Kıdem tazminatında öncelikle iş sözleşmesinin nasıl sona erdiği ve işçinin kıdem süresi incelenmelidir."
        },

        "gece": {
            maddeler: ["4857/69"],
            cevap:
                "Gece çalışması bakımından 4857 sayılı Kanunun 69. maddesi ve ilgili yönetmelik hükümleri birlikte değerlendirilmelidir."
        },

        "vardiya": {
            maddeler: ["4857/63", "4857/69"],
            cevap:
                "Vardiyalı çalışmada haftalık çalışma süresi, gece çalışması ve postaların düzenlenmesine ilişkin hükümler birlikte incelenmelidir."
        },

        "mola": {
            maddeler: ["4857/68"],
            cevap:
                "Ara dinlenmesinin süresi günlük çalışma süresine göre belirlenir ve çalışma süresinden farklı değerlendirilir."
        },

        "telafi": {
            maddeler: ["4857/64"],
            cevap:
                "Telafi çalışmasının hangi durumlarda yaptırılabileceği ve süresi 4857 sayılı Kanunun 64. maddesinde düzenlenmiştir."
        },

        "bayram": {
            maddeler: ["4857/44", "4857/47"],
            cevap:
                "Ulusal bayram ve genel tatil günlerinde çalışma halinde normal ücrete ek olarak ayrıca bir günlük ücret gündeme gelir."
        },

        "doğum": {
            maddeler: ["4857/74"],
            cevap:
                "Doğum öncesi ve sonrası çalışma, ücretsiz izin ve süt izni bakımından 74. madde uygulanır."
        },

        "süt izni": {
            maddeler: ["4857/74"],
            cevap:
                "Süt iznine ilişkin haklar 4857 sayılı İş Kanununun 74. maddesinde düzenlenmiştir."
        },

        "iş arama": {
            maddeler: ["4857/27"],
            cevap:
                "Bildirim süresi içinde işçiye yeni iş araması için iş saatleri içinde ve ücret kesintisi yapılmadan iş arama izni verilmesi gerekir."
        },

        "eşit davranma": {
            maddeler: ["4857/5"],
            cevap:
                "İşverenin işçilere eşit davranma borcu 4857 sayılı Kanunun 5. maddesinde düzenlenmiştir."
        }

    },


    /* =====================================================
       2026 İDARİ PARA CEZALARI
       ÇSGB RESMİ TABLOSUNDAN
       ===================================================== */

    cezalar2026: [

        {
            madde: "3",
            cezaMaddesi: "98",
            ihlal: "İşyerini muvazaalı olarak bildirmek",
            tutar: 302484
        },

        {
            madde: "5",
            cezaMaddesi: "99/1-a",
            ihlal: "İşçilere eşit davranma ilkesine aykırı davranmak",
            tutar: 2531
        },

        {
            madde: "7",
            cezaMaddesi: "99/1-b",
            ihlal: "Geçici işçi hükümlerine aykırı davranmak",
            tutar: 4235
        },

        {
            madde: "7/2-f",
            cezaMaddesi: "99/2",
            ihlal: "7. maddenin 2. fıkrasının f bendine aykırı davranmak",
            tutar: 16940
        },

        {
            madde: "8",
            cezaMaddesi: "99/1-c",
            ihlal: "İş sözleşmesinin içeriğini belirten yazılı belgeyi vermemek",
            tutar: 2531
        },

        {
            madde: "14",
            cezaMaddesi: "99/1-c",
            ihlal: "Çağrı üzerine ve uzaktan çalışma hükümlerine aykırı davranmak",
            tutar: 2531
        },

        {
            madde: "28",
            cezaMaddesi: "99/1-d",
            ihlal: "Çalışma belgesi vermemek veya gerçeğe aykırı bilgi yazmak",
            tutar: 2531
        },

        {
            madde: "29",
            cezaMaddesi: "100",
            ihlal: "Toplu işçi çıkarma hükümlerine aykırı davranmak",
            tutar: 9943
        },

        {
            madde: "30",
            cezaMaddesi: "101",
            ihlal: "Engelli ve eski hükümlü çalıştırmamak",
            tutar: 37748
        },

        {
            madde: "32",
            cezaMaddesi: "102/a",
            ihlal: "Ücreti kasten ödememek veya eksik ödemek",
            tutar: 2734
        },

        {
            madde: "37",
            cezaMaddesi: "102/b",
            ihlal: "Ücret hesap pusulası düzenlememek",
            tutar: 9943
        },

        {
            madde: "38",
            cezaMaddesi: "102/b",
            ihlal: "Yasaya aykırı ücret kesme cezası vermek",
            tutar: 9943
        },

        {
            madde: "39",
            cezaMaddesi: "102/a",
            ihlal: "Asgari ücreti ödememek veya eksik ödemek",
            tutar: 2734
        },

        {
            madde: "41",
            cezaMaddesi: "102/c",
            ihlal: "Fazla çalışma ücretini ödememek veya serbest zamanı kullandırmamak",
            tutar: 4815
        },

        {
            madde: "52",
            cezaMaddesi: "102/b",
            ihlal: "Yüzde ile ilgili belgeyi temsilciye vermemek",
            tutar: 9943
        },

        {
            madde: "56",
            cezaMaddesi: "103",
            ihlal: "Yıllık ücretli izni yasaya aykırı şekilde bölmek",
            tutar: 4815
        },

        {
            madde: "57",
            cezaMaddesi: "103",
            ihlal: "İzin ücretini yasaya aykırı ödemek veya eksik ödemek",
            tutar: 4815
        },

        {
            madde: "59",
            cezaMaddesi: "103",
            ihlal: "Sözleşmesi feshedilen işçiye yıllık izin ücreti ödememek",
            tutar: 4815
        },

    
