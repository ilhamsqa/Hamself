let handler = async (m, { conn }) => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Ilhamsqa
ORG:Ilhamsqa
TITLE:Epictetus, Enchiridion — Chapter 1 (verse 1)
EMAIL;type=INTERNET:hstoreisback@gmail.com
TEL;type=CELL;waid=6285850961679:+6285850961679
ADR;type=WORK:;;2-chōme-7-5 Fuchūchō;Izumi;Osaka;594-0071;Japan
URL;type=WORK:https://www.instagram.com/ham.apakabar
X-WA-BIZ-NAME:Ilhamsqa
X-WA-BIZ-DESCRIPTION:𝙊𝙬𝙣𝙚𝙧 𝙤𝙛 𝙃𝘼𝙈𝙎𝙀𝙇𝙁
X-WA-BIZ-HOURS:Mo-Su 00:00-23:59
END:VCARD`;

    const q = {
        key: {
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: "Ilhamsqa",
                vcard,
            },
        },
    };

    await conn.sendMessage(
        m.chat,
        {
            contacts: {
                displayName: "Ilhamsqa",
                contacts: [{ vcard }],
            },
            contextInfo: {
                externalAdReply: {
                    title: "© 2024–2025 Hamself Project",
                    body: "Contact the Owner via WhatsApp",
                    thumbnailUrl: "https://qu.ax/RFEvm.jpg",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                },
            },
        },
        { quoted: q }
    );
};

handler.help = ["owner"];
handler.tags = ["info"];
handler.command = /^(owner|creator)$/i;

export default handler;
