let mevzuat = null;
let yargitay = null;

async function verileriYukle() {
    try {
        const mevzuatResponse = await fetch("data/mevzuat.json");
        mevzuat = await mevzuatResponse.json();

        const yargitayResponse = await fetch("data/yargitay.json");
        yargitay = await yargitayResponse.json();

        console.log("Hukuk verileri yüklendi.");
    } catch (error) {
        console.error("Veriler yüklenemedi:", error);
    }
}

function normalize(text) {
    return text
        .toLowerCase()
        .replace(/İ/g, "i")
        .replace(/I/g, "ı")
        .replace(/Ğ/g, "ğ")
        .replace(/Ü/g, "ü")
        .replace(/Ş/g, "ş")
        .replace(/Ö/g, "ö")
        .replace(/Ç/g, "ç");
}

function kelimeEslesmesi(soru, kelimeler) {
    const soruNormal = normalize(soru);

    return kelimeler.some(kelime =>
        soruNormal.includes(normalize(kelime))
    );
}

function mevzuatBul(soru) {

    if (!mevzuat || !mevzuat["4857"]) {
        return [];
    }

    const bulunanlar = [];

    for (const madde of mevzuat["4857"].maddeler) {

        if (kelimeEslesmesi(soru, madde.konular)) {
            bulunanlar.push(madde);
        }
    }

    return bulunanlar;
}

function yargitayBul(soru) {

    if (!yargitay || !yargitay.kararlar) {
        return [];
    }

    return yargitay.kararlar.filter(karar =>
        kelimeEslesmesi(soru, karar.anahtar_kelimeler)
    );
}

function cevapOlustur(soru) {

    const mevzuatSonuclari = mevzuatBul(soru);
    const yargitaySonuclari = yargitayBul(soru);

    let cevap = `
        <strong>🔎 Sorunuz incelendi</strong><br><br>

        Sorunuz iş hukuku açısından değerlendirildi.
    `;

    if (mevzuatSonuclari.length > 0) {

        cevap += `
            <br><br>
            <strong>📚 İlgili mevzuat</strong>
        `;

        mevzuatSonuclari.forEach(madde => {

            cevap += `
                <div class="source">
                    <strong>4857 sayılı İş Kanunu m.${madde.madde}</strong><br>
                    ${madde.baslik}
                </div>
            `;
        });
    }

    if (yargitaySonuclari.length > 0) {

        cevap += `
            <br>
            <strong>🏛️ İlgili Yargıtay kararları</strong>
        `;

        yargitaySonuclari.forEach(karar => {

            cevap += `
                <div class="source">
                    <strong>${karar.konu}</strong><br><br>

                    ${karar.ozet}

                    <br><br>

                    <strong>Mevzuat:</strong>
                    ${karar.mevzuat.join(", ")}

                    <br><br>

                    <a href="${karar.resmi_kaynak}"
                       target="_blank"
                       rel="noopener noreferrer">
                       Yargıtay resmi karar arama
                    </a>
                </div>
            `;
        });
    }

    if (
        mevzuatSonuclari.length === 0 &&
        yargitaySonuclari.length === 0
    ) {

        cevap += `
            <br><br>

            <strong>⚠️ Doğrudan eşleşen kaynak bulunamadı.</strong>

            <br><br>

            Daha doğru değerlendirme yapabilmem için olayınızı
            biraz daha ayrıntılı anlatabilirsiniz.

            <br><br>

            Örneğin:

            <br>• Ne kadar süredir çalışıyorsunuz?
            <br>• Haftada kaç gün çalışıyorsunuz?
            <br>• Günlük çalışma süreniz kaç saat?
            <br>• İşveren ne yaptı?
            <br>• Yazılı bir sözleşmeniz veya TİS var mı?
        `;
    }

    cevap += `
        <br><br>

        <div class="warning">
            ⚠️ Bu sonuç genel hukuki bilgilendirme amacıyla
            hazırlanmıştır. Somut olayın tüm belgeleri ve koşulları
            incelenmeden kesin hukuki sonuç çıkarılamaz.
        </div>
    `;

    return cevap;
}

function addMessage(text, type) {

    const messages = document.getElementById("messages");

    const message = document.createElement("div");

    message.className = "message " + type;

    message.innerHTML = text;

    messages.appendChild(message);

    messages.scrollTop = messages.scrollHeight;
}

function sendQuestion() {

    const input = document.getElementById("questionInput");

    const soru = input.value.trim();

    if (!soru) {
        return;
    }

    addMessage(soru, "user");

    input.value = "";

    setTimeout(() => {

        const cevap = cevapOlustur(soru);

        addMessage(cevap, "assistant");

    }, 400);
}

function askQuestion(soru) {

    document.getElementById("questionInput").value = soru;

    sendQuestion();
}

function handleEnter(event) {

    if (event.key === "Enter") {
        sendQuestion();
    }
}

verileriYukle();
