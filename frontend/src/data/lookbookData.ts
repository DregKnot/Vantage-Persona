export interface LookbookPopup {
  label: string;
  description: string;
  priceUSD: string;
  priceNGN: string;
  priceSuffix: string;
}

export interface LookbookCategory {
  type: 'grid' | 'track' | 'cinematic';
  paragraph?: string;
  h2?: string;
  h3?: string;
  h4?: string;
  video?: string;
  popup: LookbookPopup | null;
  images: string[];
}

export const lookbookData: Record<string, LookbookCategory> = {
        'Abstract': {
            type: 'grid',
            paragraph: 'Limits?',
            h3: 'We are Metaphysical',
            h2: '#Be <br> Impressi- <br> onistic',
            popup: {
                label: 'Event Night',
                description: 'An abstract evening curated by Vantage Persona. Immersive lights, textures, and silhouettes collide in a sensory experience.',
                priceUSD: '$320',
                priceNGN: '₦480,000',
                priceSuffix: ' / night'
            },
            images: [
                '1621784b-7cbe-4cfd-8c92-82fac9435582.webp',
                '2233760b-7758-46ea-a657-c35b8eb75b2d (3).webp',
                '25c64b0b-1200-47f7-b0ee-aaa01b3267c4.webp',
                '2ba7c649-78c7-40e6-892a-a2a3d5486134.webp',
                '2f1185a5-1d43-48b7-bafe-824325176b97.webp',
                '38471d32-ff62-4202-94af-f8d8a8eeef54.webp',
                '3aea89cb-c495-4abd-888b-886828d672b5.webp',
                '406bbe2a-a9e9-4ca5-bf34-220d5a6e4923.webp',
                '4b36c159-db4a-4d9e-a920-c6d1bf401305.webp',
                '6303f95a-344a-46f5-be1a-fb348373d678.webp',
                '6bf23ac1-af96-4d38-9b46-edab805c9821.webp',
                '73d38c25-16a3-43f0-b1e8-7e5092f81511.webp',
                '7bc0acb4-d3fe-4bfa-9738-cea629090b3f.webp',
                '8cd336bf-6525-4d54-8367-8047b140a5a6.webp',
                '91221da5-b806-4bde-8960-a97832a424d7 (4).webp',
                '91221da5-b806-4bde-8960-a97832a424d7.webp',
                '9ca6fd95-ef4d-4cf4-89ea-ea7b90f40c31.webp',
                '9cbed864-3ac2-4e64-a04c-2fdec41da56e.webp',
                'dcc35b2b-e66b-48a9-8bd1-2c2a8dc3f06d.webp',
                'e334a6ef-841c-42d2-8955-7b11aa238414.webp',
                'e59ecc4d-1e54-4926-a41c-3b756e8095e9.webp',
                'ef5ae194-14fa-47e2-b456-5e07e4464623.webp',
                'f1619cf3-4768-40f8-9814-e8daef3feef9.webp'
            ]
        },
        'Astral': {
            type: 'grid',
            paragraph: 'Magic with cameras and editing tools..',
            h2: 'The sparkles will be Etherial',
            h3: '#The Astral Effect',
            popup: {
                label: 'Photoshoot Package',
                description: 'Ethereal photography sessions with expert editing. Every frame is sculpted to feel otherworldly.',
                priceUSD: '$230',
                priceNGN: '₦345,000',
                priceSuffix: ''
            },
            images: [
                '02c8f69f-09ff-4cfd-9d25-c98afd07384e.webp',
                '12171e2e-3c17-4ea1-813c-2e77171a0252.webp',
                '121c70a4-6c71-4188-8d54-89d3bdadcb46.webp',
                '3b216f7f-9653-499a-ade4-62e5510f1736.webp',
                '45582118-d619-46f5-b52f-9e5e0bbd2237.webp',
                '4fcddd5b-54d4-4fb9-971a-b749ebc1379e.webp',
                '5840b519-c043-4604-aabe-159b13a2998d.webp',
                '6cb59410-6259-44d6-a98b-580f2a282385.webp',
                '747fe063-3cd7-4e3a-b5fd-670ae9a042fa.webp',
                '84740da6-2e26-463b-b315-c03e8e9dfb40.webp',
                '8c90cebd-237c-4616-8e18-6bc4b68334ee.webp',
                'a92f1ed2-0227-425c-a829-a8bb38366cc9.webp',
                'bad3270b-6c33-4518-94a3-c496c27d7821.webp',
                'bb831dc6-8414-4cee-8a4a-1ea9eef665a4 (1).webp',
                'c903ca27-3282-4c7f-90e2-acded157b763.webp',
                'debe8dbf-3cc0-4607-afcb-0992d0e6021e.webp',
                'e16f0f34-31b7-443a-a63f-17cf90de026f.webp',
                'e1fe747b-740d-4c2f-a6b8-0d376e8fc55f.webp',
                'f801733e-cb31-43ba-b7de-b88384a9e08f.webp'
            ]
        },
        'Flower-present': {
            type: 'cinematic',
            paragraph: 'The Bloom of the Present etched my past',
            h3: 'I Bloom From mine own wither',
            h2: '#Desperate shine of a dying light',
            popup: {
                label: 'Event Photoshoot',
                description: 'Floral-themed editorial sessions blending nature with high fashion. Each petal tells a story.',
                priceUSD: '$290',
                priceNGN: '₦435,000',
                priceSuffix: ''
            },
            video: '5e35f214-0917-4c2d-8ebd-6808cba22a8b.webp',
            images: [
                '09a57ca1-5fd7-471d-9f08-333f051b8c36.webp',
                '0bc2174e-76a5-49f6-8b28-5b55b1c07679 (1).webp',
                '112d980d-c4f9-4a95-82f5-604aa7282e3b.webp',
                '1d2efbce-5314-4098-85bc-06d4aa7e312a.webp',
                '2e7f8cb7-c99a-4ef9-9f25-d1f3383272a7.webp',
                '3f6ed0cc-ea51-4add-a556-99ef74a0161f.webp',
                '475a914c-dc5e-4d9b-84a6-48cc1915130f.webp',
                '519934fa-fba4-4117-b674-516b53d0f7fe (1).webp',
                '519934fa-fba4-4117-b674-516b53d0f7fe.webp',
                '6b938518-0efe-4416-8128-eb498e7f584e.webp',
                '876012d6-685d-42b9-9ed4-ccb19925e34d.webp',
                '92e64bc3-10ea-4f9f-90c3-2ea2b378e185.webp',
                'aec3892d-a1e9-416e-8d47-09b097560407.webp',
                'bb423019-1e55-43bb-a63c-8134c1f79fb5.webp',
                'cdf62252-0f1c-45c8-bb07-f2be0cac0c26.webp',
                'dc4f80be-6736-4314-95b4-0220d4f0e7b6.webp'
            ]
        },
        'One_Nature': {
            type: 'grid',
            paragraph: 'You are as beautiful as the earth around you',
            h3: 'Oneness with Slowly Throbbing life',
            h2: '#I am as the Green Backyards',
            popup: {
                label: 'Styled Session',
                description: 'Nature-inspired styling sessions where your wardrobe merges with the organic beauty around you.',
                priceUSD: '$240',
                priceNGN: '₦360,000',
                priceSuffix: ''
            },
            images: [
                '0507323c-3444-4f63-91e0-8092d25d3ee5.webp',
                '0f7fab47-8c31-4da0-a4ca-b214c25ddd18.webp',
                '145884b1-22e5-4fca-80ce-024d6b782549.webp',
                '2a885903-24c6-445d-8a95-64f2a07326c2.webp',
                '381525d8-5be9-4fc5-83ed-3d0ff6538dd1.webp',
                '47f22e74-1d35-4237-9b42-f9dce8387cbd.webp',
                '6a559f25-ef9b-4f68-be19-cb0638508bca.webp',
                '813fc035-ee36-4ec3-8297-b6fb53abd090.webp',
                '8c9c763b-3eca-45da-b0c5-5cefd4aa4327.webp',
                '9a99e3ff-f5c3-4908-9df5-c115edf0c08e.webp',
                'a19b281f-b87b-467f-aa7d-ffed6e31411f.webp',
                'b865ce71-501a-4eac-ba1f-8a0a651fe1cb.webp',
                'b8cd868f-13f4-4c55-be5e-bf47a9cbed52.webp',
                'ce5a0f0e-7ace-4347-8431-e4c68e943e5e.webp',
                'd1cda23b-11d0-4c62-80cd-db89e6a87045.webp'
            ]
        },
        'Our Fits': {
            type: 'grid',
            h2: 'Fits and Combos from Vantage',
            paragraph: 'We care too much about fashion to gatekeep this masterpiece',
            popup: {
                label: 'Dress Combo',
                description: 'Complete outfit combinations styled by Vantage Persona. Head-to-toe coordination that speaks volumes.',
                priceUSD: '$480',
                priceNGN: '₦720,000',
                priceSuffix: ''
            },
            images: [
                '0221fb8f-28e8-4cda-b2e6-8892659af828.webp',
                '03dc1e97-4892-4e36-ae96-8a6493f0835d.webp',
                '0759601d-27ca-411a-b4de-d70c054352eb.webp',
                '0b15dee0-c72a-4c70-b076-5ed6a483850b.webp',
                '0c2d93d7-1a54-41bb-a495-8ff0afdb77cd.webp',
                '0eefe786-6789-4c85-9c3d-ef48894c6ebb.webp',
                '1ec7ed67-4599-410a-a8e5-4506c12c6595.webp',
                '1f06c032-052e-4535-8cba-27d437473f25.webp',
                '2f958a50-1564-4b2f-8dea-cc591ddbcd3d.webp',
                '493acded-7cac-4774-b73b-0b980708b281.webp',
                '4bb894f9-02ac-4cbd-9af1-f83dbd1617d6.webp',
                '67ee2075-73b0-4649-8e0f-62277f4a478e.webp',
                '6e46ba21-7b00-4176-b505-ee3f131e9f93.webp',
                '6ed5083b-657f-4e27-8bbd-380e1d52d135.webp',
                '8210f944-b783-4b77-81fc-55fb4b10bd19.webp',
                '85b72190-42ce-45a8-9288-de6dd87c7f79.webp',
                '8e26c377-6913-4872-b823-8ffa90afff43.webp',
                '941743c5-1b3a-4fe9-a019-8daed2840284.webp',
                '9a6d07cc-4e63-4190-8246-d856ce1efa71.webp',
                'a8525fed-7f66-43dc-8e89-27f2e2043ec7.webp',
                'ad4d7fd5-f3f2-4319-a4d9-8fdaaccc65d3.webp',
                'c9658e4a-7ad9-459c-9b91-d4cce8ae8bc5.webp',
                'd63fe87b-36c5-4b38-8da3-e5ebd0adfe00.webp',
                'df1b2612-e343-4da0-b30b-3b03f1c52d3d.webp',
                'e74515ae-38ec-460d-a8e1-aa03233a752e.webp',
                'f169a251-4c11-4869-a526-6bd444144737.webp',
                'f302ae17-e580-4ab8-b442-299c1c35f2df.webp',
                'f609b01f-1866-48b1-9735-ff68aa7945d8.webp',
                'f7245ab3-e05b-491f-b87a-0d9cb1360c60.webp'
            ]
        },
        'RedArt': {
            type: 'grid',
            paragraph: 'Client Loved our last work and brought some friends over',
            h3: 'Red is Incroyable',
            h2: '#Rust is every shade of red',
            popup: {
                label: 'Dress Combo',
                description: 'Bold crimson ensembles crafted for maximum visual impact. Every shade of red, redefined.',
                priceUSD: '$640',
                priceNGN: '₦960,000',
                priceSuffix: ''
            },
            images: [
                '1a35d8fd-4621-4374-b291-9dd845f585fe.webp',
                '1e787d04-f1c8-494a-8e53-76b57bdae274.webp',
                '3e74af18-5a65-4b09-947c-2360a6c56244.webp',
                '5781f0f8-0870-4318-bd56-8868cb43d5e9 (3).webp',
                '6e8a37ee-e6aa-465c-a347-b878c03ba193.webp',
                '74d34449-4ff5-43cd-aada-c2edbaf0aac3.webp',
                '781f9f2f-2d33-4cbd-b75a-c2ba8a6be9be.webp',
                '976d358b-30d1-4701-a087-9529286760da.webp',
                '991a4a5d-aff4-4a0f-938d-85e87c9c01a2.webp',
                'a139145e-37d8-4f76-91ca-6ac092f00544.webp',
                'a9acb128-33f0-40b9-ac03-f0a10e6f5bad.webp',
                'bef1adaf-119d-4276-9ca9-18c2f8051296.webp',
                'c6749950-60ce-436a-9458-ec7bc5290754.webp',
                'c92140ad-cd21-4a15-a43b-0c21b6cfcac2.webp',
                'ccb3dd62-1b30-4386-a6c0-782c97439ac1.webp',
                'd6d95761-0e7e-4aea-9319-39415e422329.webp',
                'dc74cd00-bcd7-4e39-a0b4-9adf0e4817f4.webp',
                'e52c70db-283e-4887-b5ff-6ff77f00750a.webp',
                'f3d1a9ce-1d06-4387-a59a-e9ae6e01db3e.webp',
                'f86f1e19-976e-41fb-bfb4-8fb8b56ca234.webp'
            ]
        },
        'Shoes': {
            type: 'grid',
            paragraph: 'We offer shoes like this and more, trust us, just mention it, we know it',
            popup: {
                label: 'Pairs From',
                description: 'Premium footwear curated and sourced by Vantage Persona. Name it, we know it.',
                priceUSD: '$160',
                priceNGN: '₦240,000',
                priceSuffix: ''
            },
            images: [
                '074f1cba-ae9e-4fcd-985c-0ee9c4e57bd3.mp4',
                '0799ece6-683e-4d7a-9dac-e45516b729ee.webp',
                '0f7005f9-441f-4851-8928-9f7277529da7.webp',
                '33eef747-1aba-4848-9135-8c4a4d56470a.webp',
                '4325e44f-315a-417e-b6f3-1f5b4447c22b.webp',
                '437e8aaf-865c-497b-a813-392c7abc2942.webp',
                '56d97bcc-8132-4991-85c9-0cc0df09ddb1.webp',
                '689e380b-c48f-4800-b68c-c5beb9e7c8d3.webp',
                '8da92261-3309-482a-82b2-89cfa9d34795.webp',
                '8e3c6f3b-326f-4480-a96f-035e93576e75.webp',
                '8f3396c3-c748-4812-b1cb-02507e3fec5f.webp',
                '98a1d42f-86c9-40bf-85b6-c2dccf9b5880.webp',
                'a4824d73-712f-4073-8fbb-22ba90dad451.webp',
                'cb85748d-6b71-4bcd-8ce0-4ced1f2ad8af.webp',
                'd025678d-76bb-4a85-b26d-0ffe7968ca8d.webp'
            ]
        },
        'TechFits': {
            type: 'grid',
            paragraph: 'The Future rests in the hands of the Cyberpunks',
            h3: 'Our Casual is Cyberpunk',
            h4: '#2040 fits',
            popup: {
                label: 'Tech Fit Set',
                description: 'Functional, breathable, and unapologetically futuristic. Engineered for the cyberpunk generation.',
                priceUSD: '$420',
                priceNGN: '₦630,000',
                priceSuffix: ''
            },
            images: [
                '19cb92cb-6bf8-4f82-9170-0550d8d8db39.webp',
                '36ade9fa-9c47-43c8-8fe6-782910578083.webp',
                '3adb0d0d-d13f-414c-92b9-767d66ecb8de.webp',
                '3e86e010-dcfd-484d-a9e7-febeeed556d0.webp',
                '5f43e2b6-85b3-4b7b-9ada-ea2288f42053 (1).webp',
                '6218668a-5edb-41d9-9d79-7c94ddb5dfdd.webp',
                '664b76ce-21ea-450f-9ec5-ebb111007f89.webp',
                '68719aef-4b63-40a4-91e8-fb52f8852ffe.webp',
                '68dbcb28-d435-4faf-9fb9-9a8fa4cbde01.webp',
                '6912f787-6407-45ed-9ecb-4663ec00b804.webp',
                '6bf406f5-0fa1-4dc7-a863-517afd37142b (1).webp',
                '792ea2b8-f4f5-4d83-a33b-36991756aef8.webp',
                '9012a60a-cd81-4821-9212-88b813d2eb77.webp',
                '91b6833a-1eb3-4f68-837e-1bc6dd15acdd.webp',
                '971950ae-85ef-46e6-85d0-540dee472fa4.webp',
                '9b145df4-16a8-4de3-9591-2e4050caec71.webp',
                '9dc4c7bf-5a24-4692-81b2-5948e9dbc8e9.webp',
                'a1ddd3ed-23c0-4a53-bc9a-0faf81f16094.webp',
                'a2db3aed-3010-4ee4-be2e-d4ab97321561.webp',
                'c063332c-b223-4cd8-b401-e738104e0a7a.webp',
                'c78f109c-37fc-44c2-b02c-dd3444468996.webp',
                'd8c822a1-2f50-4018-902c-ab76a5237e1e.webp',
                'd8c822a1-2f50-4018-902c-ab76a5237e1e.webp',
                'e680ec62-1a9f-478c-b1d9-18be0a2e0bcb.webp',
                'e7a654b0-dbdc-4ac5-ae0a-62b4dae853c1.webp',
                'eb547de6-6bdd-4f8d-9227-d12dcd2fb895.webp',
                'mikhail-odintsov-GHeU0qSKcsI-unsplash.webp'
            ]
        },
        'TellingEyes': {
            type: 'grid',
            paragraph: 'We make your eyes speak the words...',
            h3: 'Look Therein and tell me what you see',
            h2: '#I Harbor',
            popup: {
                label: 'Styled Photoshoot',
                description: 'Editorial eye-focused photography that captures raw emotion through expert styling and lighting.',
                priceUSD: '$250',
                priceNGN: '₦375,000',
                priceSuffix: ''
            },
            images: [
                '3f802280-5495-41a7-9b7c-8e0f5658d982.webp',
                '55ea36cf-9711-41ee-9aa2-b16c3874df3c.webp',
                '56b80a4c-6804-48a1-9dad-8150be036ba2.webp',
                '68c24c53-5e5d-4cc5-be25-456156994dc1.webp',
                '7c4f906d-0622-45b9-a508-b04b8be16cbe.webp',
                '7dccf135-5ca0-49ad-a1dc-215802165859.webp',
                '864e05be-e895-48e1-94d8-3d51a02a6907.webp',
                '8f2960a6-3e39-4392-a842-f7947a4d8f05.webp',
                '9257a5ac-2343-461d-9b41-412eb1624131.webp',
                'a7f9c1b3-b4da-4bb1-9a67-c9665a66d325.webp',
                'b5185288-52e1-46c2-b76c-cca8d7fe9d3e.webp',
                'b6d033c7-5a4a-40c5-bec5-853315774d2e.webp',
                'bd89e4a1-2122-4017-980d-1d57ae745c60.webp',
                'c28f9f12-4f33-45a9-81c5-084e4c55e346.webp',
                'c42b8d71-30d6-40e9-bef3-181aba1e42f1.webp',
                'cefe96c2-58dd-45a1-989f-ce710de7132b.webp',
                'dc9c7036-7b5b-4305-b992-bf473e8cb2b2.webp',
                'e0f5b34c-f53f-44aa-9c4f-be274504a95d.webp',
                'ef13efd1-ca56-41a8-92c7-dc61ba658c3b.webp'
            ]
        },
        'The Fitted': {
            type: 'grid',
            paragraph: 'Bespoke tailoring at its finest. Every stitch, every seam — engineered for you.',
            h3: 'Precision in Every Thread',
            h2: '#The Fitted Collection',
            popup: null, // Showcase only — no pricing
            images: [
                '1db24eec-462f-41f6-a449-87a2dfb53d02.webp',
                '3cf651a8-8a1b-49f5-99a9-22ad8ff69bd5.webp',
                '4ad3dc85-f534-4685-a1f4-4a4b0c720cb7.webp',
                '6743a26a-cdb8-482c-932b-a3026221e75c.webp',
                '73d43d1c-bc99-438b-8de6-db54893a6c5a.webp',
                '77edf140-688b-42eb-aeca-00789d32adef.webp',
                '8f98bf72-3492-4f47-b261-891d8e4a7715.webp',
                '9802421e-9a4e-4d95-9d9a-6fac3dad266f.webp',
                '9ccaa662-a5fa-468c-8714-5ed1b20ee96a.webp',
                'b56994eb-0df6-4444-992e-8d8bfa3110d7.webp',
                'caa9856b-b2f1-4d5d-a944-71bf4c48ad66.webp',
                'cc994ccf-81e1-4b92-9769-358955d4c3dd.webp',
                'db2f945e-b002-4317-91ac-3dfd0be4c005.webp',
                'ef7876c7-85bd-4896-9378-f177f8b22b78.webp'
            ]
        },
        'Work of art': {
            type: 'track',
            paragraph: 'Fashion is a work of art and we are intricate about making you look the part.',
            h3: 'Photoshoot in Illinois',
            h2: '#We are Art, we are Abstract',
            popup: {
                label: 'Dress Combo',
                description: 'Wearable art designed to transform you into a living masterpiece. Intricate, bold, unforgettable.',
                priceUSD: '$750',
                priceNGN: '₦1,125,000',
                priceSuffix: ''
            },
            images: [
                '2c41aea6-6ada-403f-a99a-d66f633afde0.webp',
                '61b4e087-d26f-4eae-b43a-a6fdbdf279cb.webp',
                '6bb8d359-85ad-436e-947e-f57e8f201dcc.webp',
                '7cbdcb08-bf7c-4d39-bb6f-80be0e798602.webp',
                '7f99db53-c109-4bf1-b4c3-2699213b0e62.webp',
                '9df4e056-1b21-42da-aae4-7f0b5260452d.webp',
                'b537bbf6-ffbf-4768-b0e1-2a3c74e861c9.webp',
                'bb9cbe3d-e55d-4f91-83e2-2af611fb3f9f.webp',
                'dbc2071c-82a1-4d6e-b4b3-a67d119a148a.webp'
            ]
        }
    };
