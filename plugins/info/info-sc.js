let handler = async (m, { conn }) => {
    const text = `
Hamself Repository

Project Script Izumi
Repository: https://github.com/ilhamsqa/hamself
Report Bug: https://github.com/ilhamsqa/hamself/issues
Pull Req: https://github.com/ilhamsqa/hamself/pulls

© 2024 – 2025 Ilhamsqa • All Rights Reserved
    `.trim();
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:;ttname;;;
FN:ttname
item1.TEL;waid=13135550002:+1 (313) 555-0002
item1.X-ABLabel:Ponsel
END:VCARD`;

    const q = {
        key: {
            fromMe: false,
            participant: "13135550002@s.whatsapp.net",
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: "𝗛 𝗔 𝗠 𝗦 𝗘 𝗟 𝗙",
                vcard,
            },
        },
    };
    await conn.sendMessage(
        m.chat,
        {
            product: {
                productImage: {
                    url: "https://qu.ax/WGRQE.jpg",
                },
                productId: "32409523241994909",
                title: "Ilhamsqa",
                description: "",
                currencyCode: "IDR",
                priceAmount1000: String(23 * 2 ** 32 + 1215752192),
                retailerId: "IZUMI",
                url: "https://instagram.com/ham.apakabar",
                productImageCount: 0,
                signedUrl:
                    "https://instagram.com/ham.apakabar",
            },
            businessOwnerJid: "254112025309400@lid",
            footer: text,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: false,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363421962419299@newsletter",
                    newsletterName: "Ilhamsqa",
                },
            },
        },
        { quoted: q }
    );
};

handler.help = ["script"];
handler.tags = ["info"];
handler.command = /^(script|sc)$/i;

export default handler;
