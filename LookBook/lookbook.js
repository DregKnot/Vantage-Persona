document.addEventListener('DOMContentLoaded', () => {
    const displayContainer = document.getElementById('display-container');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const zoomOverlay = document.getElementById('zoom-overlay');
    const zoomedImage = document.getElementById('zoomed-image');
    const closeZoom = document.querySelector('.close-zoom');

    // Folder Data Mapping
    const lookbookData = {
        'Abstract': {
            type: 'grid',
            images: [
                '1621784b-7cbe-4cfd-8c92-82fac9435582.jpg',
                '2ba7c649-78c7-40e6-892a-a2a3d5486134.jpg',
                '2f1185a5-1d43-48b7-bafe-824325176b97.jpg',
                '7bc0acb4-d3fe-4bfa-9738-cea629090b3f.jpg',
                '9cbed864-3ac2-4e64-a04c-2fdec41da56e.jpg',
                'dcc35b2b-e66b-48a9-8bd1-2c2a8dc3f06d.jpg'
            ]
        },
        'Flower-present': {
            type: 'cinematic',
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
            images: [
                '0507323c-3444-4f63-91e0-8092d25d3ee5.jpg',
                '2a885903-24c6-445d-8a95-64f2a07326c2.jpg',
                '381525d8-5be9-4fc5-83ed-3d0ff6538dd1.jpg',
                '6a559f25-ef9b-4f68-be19-cb0638508bca.jpg',
                '8c9c763b-3eca-45da-b0c5-5cefd4aa4327.jpg',
                'ce5a0f0e-7ace-4347-8431-e4c68e943e5e.jpg'
            ]
        },
        'RedArt': {
            type: 'grid',
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
            images: [
                '074f1cba-ae9e-4fcd-985c-0ee9c4e57bd3.mp4',
                '0f7005f9-441f-4851-8928-9f7277529da7.jpg',
                '33eef747-1aba-4848-9135-8c4a4d56470a.jpg',
                '4325e44f-315a-417e-b6f3-1f5b4447c22b.jpg',
                '437e8aaf-865c-497b-a813-392c7abc2942.jpg',
                '689e380b-c48f-4800-b68c-c5beb9e7c8d3.jpg',
                '8e3c6f3b-326f-4480-a96f-035e93576e75.jpg',
                '8f3396c3-c748-4812-b1cb-02507e3fec5f.jpg',
                '98a1d42f-86c9-40bf-85b6-c2dccf9b5880.jpg',
                'a4824d73-712f-4073-8fbb-22ba90dad451.jpg'
            ]
        },
        'TechFits': {
            type: 'grid',
            images: [
                '36ade9fa-9c47-43c8-8fe6-782910578083.jpg',
                '3e86e010-dcfd-484d-a9e7-febeeed556d0.jpg',
                '5f43e2b6-85b3-4b7b-9ada-ea2288f42053 (1).jpg',
                '6218668a-5edb-41d9-9d79-7c94ddb5dfdd.jpg',
                '664b76ce-21ea-450f-9ec5-ebb111007f89.jpg',
                '68dbcb28-d435-4faf-9fb9-9a8fa4cbde01.jpg',
                '6bf406f5-0fa1-4dc7-a863-517afd37142b (1).jpg',
                '9012a60a-cd81-4821-9212-88b813d2eb77.jpg',
                '91b6833a-1eb3-4f68-837e-1bc6dd15acdd.jpg',
                'a1ddd3ed-23c0-4a53-bc9a-0faf81f16094.jpg',
                'a2db3aed-3010-4ee4-be2e-d4ab97321561.jpg',
                'c063332c-b223-4cd8-b401-e738104e0a7a.jpg',
                'c78f109c-37fc-44c2-b02c-dd3444468996.jpg',
                'd8c822a1-2f50-4018-902c-ab76a5237e1e.jpg',
                'd8c822a1-2f50-4018-902c-ab76a5237e1e.png',
                'e680ec62-1a9f-478c-b1d9-18be0a2e0bcb.jpg',
                'e7a654b0-dbdc-4ac5-ae0a-62b4dae853c1.jpg',
                'mikhail-odintsov-GHeU0qSKcsI-unsplash.jpg'
            ]
        },
        'TellingEyes': {
            type: 'grid',
            images: [
                '3f802280-5495-41a7-9b7c-8e0f5658d982.jpg',
                '68c24c53-5e5d-4cc5-be25-456156994dc1.jpg',
                '7c4f906d-0622-45b9-a508-b04b8be16cbe.jpg',
                '7dccf135-5ca0-49ad-a1dc-215802165859.jpg',
                '864e05be-e895-48e1-94d8-3d51a02a6907.jpg',
                '8f2960a6-3e39-4392-a842-f7947a4d8f05.jpg',
                '9257a5ac-2343-461d-9b41-412eb1624131.jpg',
                'b5185288-52e1-46c2-b76c-cca8d7fe9d3e.jpg',
                'b6d033c7-5a4a-40c5-bec5-853315774d2e.jpg',
                'bd89e4a1-2122-4017-980d-1d57ae745c60.jpg',
                'cefe96c2-58dd-45a1-989f-ce710de7132b.jpg',
                'dc9c7036-7b5b-4305-b992-bf473e8cb2b2.jpg',
                'ef13efd1-ca56-41a8-92c7-dc61ba658c3b.jpg'
            ]
        },
        'Work of art': {
            type: 'track',
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

    function renderCategory(categoryName) {
        const data = lookbookData[categoryName];
        if (!data) return;

        // Update Theme
        document.body.className = `lookbook-page theme-${categoryName.replace(/ /g, '_')}`;
        
        displayContainer.innerHTML = ''; // Clear current
        
        if (data.type === 'track') {
            const track = document.createElement('div');
            track.className = 'lookbook-track';
            data.images.forEach(img => {
                const item = document.createElement('div');
                item.className = 'track-item';
                item.innerHTML = `<img src="../pictures/LookBook/${categoryName}/${img}" loading="lazy">`;
                item.addEventListener('dblclick', () => openZoom(`../pictures/LookBook/${categoryName}/${img}`));
                track.appendChild(item);
            });
            displayContainer.appendChild(track);
        } 
        else if (data.type === 'cinematic') {
            const grid = document.createElement('div');
            grid.className = 'cinematic-grid';
            
            // Calculate total rows needed based on 4 columns
            // Video takes 4 slots (span 2x2). Total slots needed = images.length + 4.
            const totalSlots = data.images.length + 4;
            let totalRows = Math.ceil(totalSlots / 4);
            if (totalRows < 2) totalRows = 2; // minimum 2 rows
            
            // Find the perfect middle row for the video
            const middleRow = Math.max(1, Math.floor(totalRows / 2));

            // Add Centerpiece (GIF/Video)
            const centerItem = document.createElement('div');
            centerItem.className = 'grid-item item-center';
            centerItem.style.gridRow = `${middleRow} / span 2`;
            centerItem.innerHTML = `<img src="../pictures/LookBook/${categoryName}/${data.video}" loading="lazy">`;
            centerItem.addEventListener('dblclick', () => openZoom(`../pictures/LookBook/${categoryName}/${data.video}`));
            grid.appendChild(centerItem);

            // Add ALL surrounding images
            data.images.forEach(img => {
                const item = document.createElement('div');
                item.className = 'grid-item';
                item.innerHTML = `<img src="../pictures/LookBook/${categoryName}/${img}" loading="lazy">`;
                item.addEventListener('dblclick', () => openZoom(`../pictures/LookBook/${categoryName}/${img}`));
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
                // Handle mixed media like mp4
                if (img.endsWith('.mp4')) {
                    item.innerHTML = `<video src="../pictures/LookBook/${categoryName}/${img}" autoplay loop muted playsinline></video>`;
                } else {
                    item.innerHTML = `<img src="../pictures/LookBook/${categoryName}/${img}" loading="lazy">`;
                }
                item.addEventListener('dblclick', () => openZoom(`../pictures/LookBook/${categoryName}/${img}`));
                standardGrid.appendChild(item);
            });
            displayContainer.appendChild(standardGrid);
        }
    }

    function openZoom(src) {
        zoomedImage.src = src;
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
