let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    pepe = 'https://telegra.ph/file/ac2355f43e24c39e842f0.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "Reneasy-bot",
        "description": `       
1premium/7hari
Rp 10.000
1premium/30hari
Rp 20.000

1group/30hari
Rp 10.000
1group/60hari
Rp 20.000

Telkomsel [6281283933929]
OVO [081283933929]

tertarik? hubungi:
@628128393929 (Umar)
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "Klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "4487929097985377"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "4487929097985377",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "6281283933929@s.whatsapp.net"
        },
        "footerText": "wa.me/6281283933929"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['listharga']
handler.tags = ['main']
handler.command = /^(listharga|hargalist|sewa|sewabot)$/i

module.exports = handler
