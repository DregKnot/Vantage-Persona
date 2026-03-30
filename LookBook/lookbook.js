document.addEventListener('DOMContentLoaded', () => {
    const displayContainer = document.getElementById('display-container');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const zoomOverlay = document.getElementById('zoom-overlay');
    const zoomedImage = document.getElementById('zoomed-image');
    const zoomInfoPanel = document.getElementById('zoom-info-panel');
    const closeZoom = document.querySelector('.close-zoom');

    // Track currently active category for popup context
    let activeCategory = 'Work of art';

    // Folder Data Mapping
    const lookbookData = {
        'Abstract': {
            type: 'grid',
            paragraph: 'Limits?',
            h3: 'We are Mataphysical',
            h2: '#Be Impressionistic',
            popup: {
                label: 'Event Night',
                description: 'An abstract evening curated by Vantage Persona. Immersive lights, textures, and silhouettes collide in a sensory experience.',
                priceUSD: '$320',
                priceNGN: '₦480,000',
                priceSuffix: ' / night'
            },
            images: [
                '1621784b-7cbe-4cfd-8c92-82fac9435582.jpg',
                '2233760b-7758-46ea-a657-c35b8eb75b2d (3).jpg',
                '25c64b0b-1200-47f7-b0ee-aaa01b3267c4.jpg',
                '2ba7c649-78c7-40e6-892a-a2a3d5486134.jpg',
                '2f1185a5-1d43-48b7-bafe-824325176b97.jpg',
                '38471d32-ff62-4202-94af-f8d8a8eeef54.jpg',
                '3aea89cb-c495-4abd-888b-886828d672b5.jpg',
                '406bbe2a-a9e9-4ca5-bf34-220d5a6e4923.jpg',
                '4b36c159-db4a-4d9e-a920-c6d1bf401305.jpg',
                '6303f95a-344a-46f5-be1a-fb348373d678.jpg',
                '6bf23ac1-af96-4d38-9b46-edab805c9821.jpg',
                '73d38c25-16a3-43f0-b1e8-7e5092f81511.jpg',
                '7bc0acb4-d3fe-4bfa-9738-cea629090b3f.jpg',
                '8cd336bf-6525-4d54-8367-8047b140a5a6.jpg',
                '91221da5-b806-4bde-8960-a97832a424d7 (4).jpg',
                '91221da5-b806-4bde-8960-a97832a424d7.jpg',
                '9ca6fd95-ef4d-4cf4-89ea-ea7b90f40c31.jpg',
                '9cbed864-3ac2-4e64-a04c-2fdec41da56e.jpg',
                'dcc35b2b-e66b-48a9-8bd1-2c2a8dc3f06d.jpg',
                'e334a6ef-841c-42d2-8955-7b11aa238414.jpg',
                'e59ecc4d-1e54-4926-a41c-3b756e8095e9.jpg',
                'ef5ae194-14fa-47e2-b456-5e07e4464623.jpg',
                'f1619cf3-4768-40f8-9814-e8daef3feef9.jpg'
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
                '02c8f69f-09ff-4cfd-9d25-c98afd07384e.jpg',
                '12171e2e-3c17-4ea1-813c-2e77171a0252.jpg',
                '121c70a4-6c71-4188-8d54-89d3bdadcb46.jpg',
                '3b216f7f-9653-499a-ade4-62e5510f1736.jpg',
                '45582118-d619-46f5-b52f-9e5e0bbd2237.jpg',
                '4fcddd5b-54d4-4fb9-971a-b749ebc1379e.jpg',
                '5840b519-c043-4604-aabe-159b13a2998d.jpg',
                '6cb59410-6259-44d6-a98b-580f2a282385.jpg',
                '747fe063-3cd7-4e3a-b5fd-670ae9a042fa.jpg',
                '84740da6-2e26-463b-b315-c03e8e9dfb40.jpg',
                '8c90cebd-237c-4616-8e18-6bc4b68334ee.jpg',
                'a92f1ed2-0227-425c-a829-a8bb38366cc9.jpg',
                'bad3270b-6c33-4518-94a3-c496c27d7821.jpg',
                'bb831dc6-8414-4cee-8a4a-1ea9eef665a4 (1).jpg',
                'c903ca27-3282-4c7f-90e2-acded157b763.jpg',
                'debe8dbf-3cc0-4607-afcb-0992d0e6021e.jpg',
                'e16f0f34-31b7-443a-a63f-17cf90de026f.jpg',
                'e1fe747b-740d-4c2f-a6b8-0d376e8fc55f.jpg',
                'f801733e-cb31-43ba-b7de-b88384a9e08f.jpg'
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
            video: '5e35f214-0917-4c2d-8ebd-6808cba22a8b.gif',
            images: [
                '09a57ca1-5fd7-471d-9f08-333f051b8c36.jpg',
                '0bc2174e-76a5-49f6-8b28-5b55b1c07679 (1).jpg',
                '112d980d-c4f9-4a95-82f5-604aa7282e3b.jpg',
                '1d2efbce-5314-4098-85bc-06d4aa7e312a.jpg',
                '2e7f8cb7-c99a-4ef9-9f25-d1f3383272a7.jpg',
                '3f6ed0cc-ea51-4add-a556-99ef74a0161f.jpg',
                '475a914c-dc5e-4d9b-84a6-48cc1915130f.jpg',
                '519934fa-fba4-4117-b674-516b53d0f7fe (1).jpg',
                '519934fa-fba4-4117-b674-516b53d0f7fe.jpg',
                '6b938518-0efe-4416-8128-eb498e7f584e.jpg',
                '876012d6-685d-42b9-9ed4-ccb19925e34d.jpg',
                '92e64bc3-10ea-4f9f-90c3-2ea2b378e185.jpg',
                'aec3892d-a1e9-416e-8d47-09b097560407.jpg',
                'bb423019-1e55-43bb-a63c-8134c1f79fb5.jpg',
                'cdf62252-0f1c-45c8-bb07-f2be0cac0c26.jpg',
                'dc4f80be-6736-4314-95b4-0220d4f0e7b6.jpg'
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
                '0507323c-3444-4f63-91e0-8092d25d3ee5.jpg',
                '0f7fab47-8c31-4da0-a4ca-b214c25ddd18.jpg',
                '145884b1-22e5-4fca-80ce-024d6b782549.jpg',
                '2a885903-24c6-445d-8a95-64f2a07326c2.jpg',
                '381525d8-5be9-4fc5-83ed-3d0ff6538dd1.jpg',
                '47f22e74-1d35-4237-9b42-f9dce8387cbd.jpg',
                '6a559f25-ef9b-4f68-be19-cb0638508bca.jpg',
                '813fc035-ee36-4ec3-8297-b6fb53abd090.jpg',
                '8c9c763b-3eca-45da-b0c5-5cefd4aa4327.jpg',
                '9a99e3ff-f5c3-4908-9df5-c115edf0c08e.jpg',
                'a19b281f-b87b-467f-aa7d-ffed6e31411f.jpg',
                'b865ce71-501a-4eac-ba1f-8a0a651fe1cb.jpg',
                'b8cd868f-13f4-4c55-be5e-bf47a9cbed52.jpg',
                'ce5a0f0e-7ace-4347-8431-e4c68e943e5e.jpg',
                'd1cda23b-11d0-4c62-80cd-db89e6a87045.jpg'
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
                '0221fb8f-28e8-4cda-b2e6-8892659af828.jpg',
                '03dc1e97-4892-4e36-ae96-8a6493f0835d.jpg',
                '0759601d-27ca-411a-b4de-d70c054352eb.jpg',
                '0b15dee0-c72a-4c70-b076-5ed6a483850b.jpg',
                '0c2d93d7-1a54-41bb-a495-8ff0afdb77cd.jpg',
                '0eefe786-6789-4c85-9c3d-ef48894c6ebb.jpg',
                '1ec7ed67-4599-410a-a8e5-4506c12c6595.jpg',
                '1f06c032-052e-4535-8cba-27d437473f25.jpg',
                '2f958a50-1564-4b2f-8dea-cc591ddbcd3d.jpg',
                '493acded-7cac-4774-b73b-0b980708b281.jpg',
                '4bb894f9-02ac-4cbd-9af1-f83dbd1617d6.jpg',
                '67ee2075-73b0-4649-8e0f-62277f4a478e.jpg',
                '6e46ba21-7b00-4176-b505-ee3f131e9f93.jpg',
                '6ed5083b-657f-4e27-8bbd-380e1d52d135.jpg',
                '8210f944-b783-4b77-81fc-55fb4b10bd19.jpg',
                '85b72190-42ce-45a8-9288-de6dd87c7f79.jpg',
                '8e26c377-6913-4872-b823-8ffa90afff43.jpg',
                '941743c5-1b3a-4fe9-a019-8daed2840284.jpg',
                '9a6d07cc-4e63-4190-8246-d856ce1efa71.jpg',
                'a8525fed-7f66-43dc-8e89-27f2e2043ec7.jpg',
                'ad4d7fd5-f3f2-4319-a4d9-8fdaaccc65d3.jpg',
                'c9658e4a-7ad9-459c-9b91-d4cce8ae8bc5.jpg',
                'd63fe87b-36c5-4b38-8da3-e5ebd0adfe00.jpg',
                'df1b2612-e343-4da0-b30b-3b03f1c52d3d.jpg',
                'e74515ae-38ec-460d-a8e1-aa03233a752e.jpg',
                'f169a251-4c11-4869-a526-6bd444144737.jpg',
                'f302ae17-e580-4ab8-b442-299c1c35f2df.jpg',
                'f609b01f-1866-48b1-9735-ff68aa7945d8.jpg',
                'f7245ab3-e05b-491f-b87a-0d9cb1360c60.jpg'
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
                '1a35d8fd-4621-4374-b291-9dd845f585fe.jpg',
                '1e787d04-f1c8-494a-8e53-76b57bdae274.jpg',
                '3e74af18-5a65-4b09-947c-2360a6c56244.jpg',
                '5781f0f8-0870-4318-bd56-8868cb43d5e9 (3).jpg',
                '6e8a37ee-e6aa-465c-a347-b878c03ba193.jpg',
                '74d34449-4ff5-43cd-aada-c2edbaf0aac3.jpg',
                '781f9f2f-2d33-4cbd-b75a-c2ba8a6be9be.jpg',
                '976d358b-30d1-4701-a087-9529286760da.jpg',
                '991a4a5d-aff4-4a0f-938d-85e87c9c01a2.jpg',
                'a139145e-37d8-4f76-91ca-6ac092f00544.jpg',
                'a9acb128-33f0-40b9-ac03-f0a10e6f5bad.jpg',
                'bef1adaf-119d-4276-9ca9-18c2f8051296.jpg',
                'c6749950-60ce-436a-9458-ec7bc5290754.jpg',
                'c92140ad-cd21-4a15-a43b-0c21b6cfcac2.jpg',
                'ccb3dd62-1b30-4386-a6c0-782c97439ac1.jpg',
                'd6d95761-0e7e-4aea-9319-39415e422329.jpg',
                'dc74cd00-bcd7-4e39-a0b4-9adf0e4817f4.jpg',
                'e52c70db-283e-4887-b5ff-6ff77f00750a.jpg',
                'f3d1a9ce-1d06-4387-a59a-e9ae6e01db3e.jpg',
                'f86f1e19-976e-41fb-bfb4-8fb8b56ca234.jpg'
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
                '0799ece6-683e-4d7a-9dac-e45516b729ee.jpg',
                '0f7005f9-441f-4851-8928-9f7277529da7.jpg',
                '33eef747-1aba-4848-9135-8c4a4d56470a.jpg',
                '4325e44f-315a-417e-b6f3-1f5b4447c22b.jpg',
                '437e8aaf-865c-497b-a813-392c7abc2942.jpg',
                '56d97bcc-8132-4991-85c9-0cc0df09ddb1.jpg',
                '689e380b-c48f-4800-b68c-c5beb9e7c8d3.jpg',
                '8da92261-3309-482a-82b2-89cfa9d34795.jpg',
                '8e3c6f3b-326f-4480-a96f-035e93576e75.jpg',
                '8f3396c3-c748-4812-b1cb-02507e3fec5f.jpg',
                '98a1d42f-86c9-40bf-85b6-c2dccf9b5880.jpg',
                'a4824d73-712f-4073-8fbb-22ba90dad451.jpg',
                'cb85748d-6b71-4bcd-8ce0-4ced1f2ad8af.jpg',
                'd025678d-76bb-4a85-b26d-0ffe7968ca8d.gif'
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
                '19cb92cb-6bf8-4f82-9170-0550d8d8db39.jpg',
                '36ade9fa-9c47-43c8-8fe6-782910578083.jpg',
                '3adb0d0d-d13f-414c-92b9-767d66ecb8de.jpg',
                '3e86e010-dcfd-484d-a9e7-febeeed556d0.jpg',
                '5f43e2b6-85b3-4b7b-9ada-ea2288f42053 (1).jpg',
                '6218668a-5edb-41d9-9d79-7c94ddb5dfdd.jpg',
                '664b76ce-21ea-450f-9ec5-ebb111007f89.jpg',
                '68719aef-4b63-40a4-91e8-fb52f8852ffe.jpg',
                '68dbcb28-d435-4faf-9fb9-9a8fa4cbde01.jpg',
                '6912f787-6407-45ed-9ecb-4663ec00b804.jpg',
                '6bf406f5-0fa1-4dc7-a863-517afd37142b (1).jpg',
                '792ea2b8-f4f5-4d83-a33b-36991756aef8.jpg',
                '9012a60a-cd81-4821-9212-88b813d2eb77.jpg',
                '91b6833a-1eb3-4f68-837e-1bc6dd15acdd.jpg',
                '971950ae-85ef-46e6-85d0-540dee472fa4.jpg',
                '9b145df4-16a8-4de3-9591-2e4050caec71.jpg',
                '9dc4c7bf-5a24-4692-81b2-5948e9dbc8e9.jpg',
                'a1ddd3ed-23c0-4a53-bc9a-0faf81f16094.jpg',
                'a2db3aed-3010-4ee4-be2e-d4ab97321561.jpg',
                'c063332c-b223-4cd8-b401-e738104e0a7a.jpg',
                'c78f109c-37fc-44c2-b02c-dd3444468996.jpg',
                'd8c822a1-2f50-4018-902c-ab76a5237e1e.jpg',
                'd8c822a1-2f50-4018-902c-ab76a5237e1e.png',
                'e680ec62-1a9f-478c-b1d9-18be0a2e0bcb.jpg',
                'e7a654b0-dbdc-4ac5-ae0a-62b4dae853c1.jpg',
                'eb547de6-6bdd-4f8d-9227-d12dcd2fb895.jpg',
                'mikhail-odintsov-GHeU0qSKcsI-unsplash.jpg'
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
                '3f802280-5495-41a7-9b7c-8e0f5658d982.jpg',
                '55ea36cf-9711-41ee-9aa2-b16c3874df3c.jpg',
                '56b80a4c-6804-48a1-9dad-8150be036ba2.jpg',
                '68c24c53-5e5d-4cc5-be25-456156994dc1.jpg',
                '7c4f906d-0622-45b9-a508-b04b8be16cbe.jpg',
                '7dccf135-5ca0-49ad-a1dc-215802165859.jpg',
                '864e05be-e895-48e1-94d8-3d51a02a6907.jpg',
                '8f2960a6-3e39-4392-a842-f7947a4d8f05.jpg',
                '9257a5ac-2343-461d-9b41-412eb1624131.jpg',
                'a7f9c1b3-b4da-4bb1-9a67-c9665a66d325.jpg',
                'b5185288-52e1-46c2-b76c-cca8d7fe9d3e.jpg',
                'b6d033c7-5a4a-40c5-bec5-853315774d2e.jpg',
                'bd89e4a1-2122-4017-980d-1d57ae745c60.jpg',
                'c28f9f12-4f33-45a9-81c5-084e4c55e346.jpg',
                'c42b8d71-30d6-40e9-bef3-181aba1e42f1.jpg',
                'cefe96c2-58dd-45a1-989f-ce710de7132b.jpg',
                'dc9c7036-7b5b-4305-b992-bf473e8cb2b2.jpg',
                'e0f5b34c-f53f-44aa-9c4f-be274504a95d.jpg',
                'ef13efd1-ca56-41a8-92c7-dc61ba658c3b.jpg'
            ]
        },
        'The Fitted': {
            type: 'grid',
            paragraph: 'Bespoke tailoring at its finest. Every stitch, every seam — engineered for you.',
            h3: 'Precision in Every Thread',
            h2: '#The Fitted Collection',
            popup: null, // Showcase only — no pricing
            images: [
                '1db24eec-462f-41f6-a449-87a2dfb53d02.jpg',
                '3cf651a8-8a1b-49f5-99a9-22ad8ff69bd5.jpg',
                '4ad3dc85-f534-4685-a1f4-4a4b0c720cb7.jpg',
                '6743a26a-cdb8-482c-932b-a3026221e75c.jpg',
                '73d43d1c-bc99-438b-8de6-db54893a6c5a.jpg',
                '77edf140-688b-42eb-aeca-00789d32adef.jpg',
                '8f98bf72-3492-4f47-b261-891d8e4a7715.jpg',
                '9802421e-9a4e-4d95-9d9a-6fac3dad266f.jpg',
                '9ccaa662-a5fa-468c-8714-5ed1b20ee96a.jpg',
                'b56994eb-0df6-4444-992e-8d8bfa3110d7.jpg',
                'caa9856b-b2f1-4d5d-a944-71bf4c48ad66.jpg',
                'cc994ccf-81e1-4b92-9769-358955d4c3dd.jpg',
                'db2f945e-b002-4317-91ac-3dfd0be4c005.jpg',
                'ef7876c7-85bd-4896-9378-f177f8b22b78.jpg'
            ]
        },
        'Work of art': {
            type: 'track',
            paragraph: 'Fashion is a work of art and we are intricate about making you look the part.',
            h3: 'Photoshoped in illinois',
            h2: '#We are Art, we are Abstract',
            popup: {
                label: 'Dress Combo',
                description: 'Wearable art designed to transform you into a living masterpiece. Intricate, bold, unforgettable.',
                priceUSD: '$750',
                priceNGN: '₦1,125,000',
                priceSuffix: ''
            },
            images: [
                '2c41aea6-6ada-403f-a99a-d66f633afde0.jpg',
                '61b4e087-d26f-4eae-b43a-a6fdbdf279cb.jpg',
                '6bb8d359-85ad-436e-947e-f57e8f201dcc.jpg',
                '7cbdcb08-bf7c-4d39-bb6f-80be0e798602.jpg',
                '7f99db53-c109-4bf1-b4c3-2699213b0e62.jpg',
                '9df4e056-1b21-42da-aae4-7f0b5260452d.jpg',
                'b537bbf6-ffbf-4768-b0e1-2a3c74e861c9.jpg',
                'bb9cbe3d-e55d-4f91-83e2-2af611fb3f9f.jpg',
                'dbc2071c-82a1-4d6e-b4b3-a67d119a148a.jpg'
            ]
        }
    };

    // Build the info panel HTML for the popup
    function buildInfoPanel(categoryName) {
        const data = lookbookData[categoryName];
        if (!data) return '';

        const displayName = categoryName.replace(/_/g, ' ');

        // If no popup data (showcase only like The Fitted)
        if (!data.popup) {
            return `
                <p class="zoom-collection-label">Collection</p>
                <h2 class="zoom-collection-name">${displayName}</h2>
                <p class="zoom-description">${data.paragraph || 'A curated visual experience from Vantage Persona.'}</p>
                <p class="zoom-showcase-label">✦ Showcase Only ✦</p>
                <a href="/Apointment/Appointment.html" class="zoom-cta-btn">Book a Consultation →</a>
            `;
        }

        const p = data.popup;
        return `
            <p class="zoom-collection-label">Collection</p>
            <h2 class="zoom-collection-name">${displayName}</h2>
            <p class="zoom-description">${p.description}</p>
            <div class="zoom-pricing">
                <p class="zoom-price-label">${p.label} — Starting from</p>
                <p class="zoom-price-usd">${p.priceUSD}${p.priceSuffix}</p>
                <p class="zoom-price-ngn">${p.priceNGN}${p.priceSuffix}</p>
            </div>
            <a href="/Apointment/Appointment.html" class="zoom-cta-btn">Book a Consultation →</a>
        `;
    }

    function renderCategory(categoryName) {
        const data = lookbookData[categoryName];
        if (!data) return;

        activeCategory = categoryName;

        // Update Theme
        document.body.className = `lookbook-page theme-${categoryName.replace(/ /g, '_')}`;
        
        // Render Intro Text
        const introContainer = document.getElementById('category-intro');
        introContainer.innerHTML = ''; // Clear prior text
        
        if (data.paragraph) introContainer.innerHTML += `<p class="intro-paragraph">${data.paragraph}</p>`;
        if (data.h3) introContainer.innerHTML += `<h3 class="intro-subheading">${data.h3}</h3>`;
        if (data.h2) introContainer.innerHTML += `<h2 class="intro-heading">${data.h2}</h2>`;
        if (data.h4) introContainer.innerHTML += `<h4 class="intro-heading-small">${data.h4}</h4>`;

        displayContainer.innerHTML = ''; // Clear current images
        
        if (data.type === 'track') {
            const track = document.createElement('div');
            track.className = 'lookbook-track';
            data.images.forEach(img => {
                const item = document.createElement('div');
                item.className = 'track-item';
                item.innerHTML = `<img src="/pictures/LookBook/${categoryName}/${img}" loading="lazy">`;
                item.addEventListener('dblclick', () => openZoom(`/pictures/LookBook/${categoryName}/${img}`));
                track.appendChild(item);
            });
            displayContainer.appendChild(track);
        } 
        else if (data.type === 'cinematic') {
            const grid = document.createElement('div');
            grid.className = 'cinematic-grid';
            
            const totalSlots = data.images.length + 4;
            let totalRows = Math.ceil(totalSlots / 4);
            if (totalRows < 2) totalRows = 2;
            const middleRow = Math.max(1, Math.floor(totalRows / 2));

            const centerItem = document.createElement('div');
            centerItem.className = 'grid-item item-center';
            centerItem.style.gridRow = `${middleRow} / span 2`;
            centerItem.innerHTML = `<img src="/pictures/LookBook/${categoryName}/${data.video}" loading="lazy">`;
            centerItem.addEventListener('dblclick', () => openZoom(`/pictures/LookBook/${categoryName}/${data.video}`));
            grid.appendChild(centerItem);

            data.images.forEach(img => {
                const item = document.createElement('div');
                item.className = 'grid-item';
                item.innerHTML = `<img src="/pictures/LookBook/${categoryName}/${img}" loading="lazy">`;
                item.addEventListener('dblclick', () => openZoom(`/pictures/LookBook/${categoryName}/${img}`));
                grid.appendChild(item);
            });
            displayContainer.appendChild(grid);
        }
        else {
            const standardGrid = document.createElement('div');
            standardGrid.className = 'lookbook-grid';
            data.images.forEach(img => {
                const item = document.createElement('div');
                item.className = 'grid-item';
                if (img.endsWith('.mp4')) {
                    item.innerHTML = `<video src="/pictures/LookBook/${categoryName}/${img}" autoplay loop muted playsinline></video>`;
                } else {
                    item.innerHTML = `<img src="/pictures/LookBook/${categoryName}/${img}" loading="lazy">`;
                }
                item.addEventListener('dblclick', () => openZoom(`/pictures/LookBook/${categoryName}/${img}`));
                standardGrid.appendChild(item);
            });
            displayContainer.appendChild(standardGrid);
        }
    }

    function openZoom(src) {
        zoomedImage.src = src;
        zoomInfoPanel.innerHTML = buildInfoPanel(activeCategory);
        zoomOverlay.classList.add('active');
    }

    closeZoom.addEventListener('click', () => zoomOverlay.classList.remove('active'));
    zoomOverlay.addEventListener('click', (e) => {
        if (e.target === zoomOverlay) zoomOverlay.classList.remove('active');
    });

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCategory(category);
        });
    });

    // Initial Render
    renderCategory('Work of art');
});
