            document.addEventListener('DOMContentLoaded', function() {
                const buttonData = {
                    button1: [
                        { image: '1f.jpg', name: 'Nox Coolbay', price: 121.71},
                        { image: '2f.jpg', name: '550W 80 Plus Bronze', price: 136.93},
                        { image: '3f.jpg', name: 'MSI B450M Pro-VDH', price: 266.25},
                        { image: '4f.jpg', name: 'AMD Ryzen 5 5600G', price: 513.47},
                        { image: '5f.jpg', name: 'DDR4 2666MHz 2x8GB', price: 152.14},
                        { image: '6f.PNG', name: '500GB M.2 SSD', price: 216.80},
                    ],
                    button2: [
                        { image: '1b.png', name: 'Nox Hummer TGM', price: 228.21},
                        { image: '2b.png', name: '650W 80 Plus Bronze', price: 239.62},
                        { image: '3b.png', name: 'Chipset AMD B450', price: 311.89},
                        { image: '4b.png', name: 'AMD Ryzen 5 5600', price: 456.42},
                        { image: '5b.png', name: 'AMD Radeon RX 6600', price: 859.59},
                        { image: '6b.png', name: 'DDR4 3200MHz 2x8GB', price: 193.98},
                        { image: '7b.png', name: '1 TB M.2 SSD', price: 300.48}, 
                    ],
                    button3: [
                        { image: '1mm.jpg', name: 'Cooler Master India', price: 251.03},
                        { image: '2mm.jpg', name: '750W 80 BRONZE', price: 327.10},
                        { image: '3mm.jpg', name: 'GIGABYTE B760', price: 570.52},
                        { image: '4mm.jpg', name: 'Intel Core i5-12600K', price: 772.11},
                        { image: '5mm.jpg', name: 'RX 6750 XT Mech 2X', price: 962.29},
                        { image: '6mm.jpg', name: 'DDR4 3600MHz 2x8GB', price: 228.21},
                        { image: '7mm.jpg', name: '1 TB M.2 SSD', price: 300.48},
                        { image: '8mm.png', name: 'Thermalright 120 SE', price: 72.27}
                    ],
                    button4: [
                        { image: '1a.png', name: 'Corsair RGB Airflow', price: 334.71},
                        { image: '2a.png', name: '850W 80 Plus Gold', price: 570.52},
                        { image: '3a.png', name: 'ASUS B650-PLUS', price: 867.20},
                        { image: '4a.png', name: 'AMD Ryzen 7 7800X3D', price: 1146.47},
                        { image: '5a.png', name: 'GeForce RTX 4070 Ti', price: 2662.45},
                        { image: '6a.png', name: 'DDR5 6000MHz 2x16GB', price: 749.29},
                        { image: '7a.png', name: '1 TB PRO M.2', price: 418.38},
                        { image: '8a.png', name: 'Noctua NH - D15', price: 452.62}
                    ],
                    button5: [
                        { image: '1m.jpg', name: 'Chasis Extended ATX', price: 699.84},
                        { image: '2m.png', name: '1600W 80 Plus Titanium', price: 1255.15},
                        { image: '3m.jpg', name: 'Chipset Intel Z790', price: 1742.00},
                        { image: '4m.jpg', name: 'Intel Core i9-13900k', price: 2088.12},
                        { image: '5m.jpg', name: 'GeForce RTX 4090', price: 9128.40},
                        { image: '6m.png', name: 'DDR5 6600MHz 4x16GB', price: 836.77},
                        { image: '7m.jpg', name: '2 TB PRO M.2 SSD', price: 418.38},
                        { image: '8m.jpg', name: 'Corsair Elite XT', price: 859.59}
                    ]
                };
                const customMessages = {
                    button1: 'Este es el PC más sencillo que deberías plantearte montar. Dado que usaremos una gráfica integrada, no está pensado para jugar más que a determinados juegos indie y retro. Eso sí, tendrás PC de sobras para navegar, ver películas, teletrabajar o realizar tareas de ofimática.',
                    button2: 'Esta sería la entrada low-cost, perfecta para aquellos que se inician en el mundo del gaming. Aquí ya usamos una gráfica dedicada. Estos equipos están diseñados para manejar juegos que no requieren demasiada potencia, permitiendo una experiencia de juego agradable sin hacer un gran desembolso.',
                    button3: 'Este PC sería la mejor recomendación calidad-precio. Un equipo así ofrece un equilibrio entre rendimiento y coste, haciéndolo una opción ideal para los gamers que buscan una experiencia de juego superior sin romper la hucha.',
                    button4: 'Con este PC ya estamos cerca de llamar a las puertas de la Master Race. Este equipo te permite jugar a cualquier juego casi con todas las opciones al máximo, y manteniendo una tasa de frames por segundo muy por encima de los 60.',
                    button5: 'El mejor PC posible del mercado, dirigido a entusiastas que buscan lo último en rendimiento y tecnología. Con este PC no hay nada que se te resista. Cualquier juego a 4k y con todo al máximo sin despeinarse. La auténtica Master Race.',
                };
                function mostrarImagenesYnombres(buttonId) {
                    const container = document.getElementById('image-container');
                    container.innerHTML = ''; 
                    const data = buttonData[buttonId];
                    let totalPrice = 0;

                    if (data) {
                        data.forEach(item => {
                            const div = document.createElement('div');
                            div.classList.add('image-item');

                            const img = document.createElement('img');
                            img.src = '../Imagenes/' + item.image; 
                            img.alt = item.name;

                            const pName = document.createElement('p');
                            pName.textContent = item.name;

                            const pPrice = document.createElement('p');
                            pPrice.textContent = item.price + ' soles' ;

                            div.appendChild(img);
                            div.appendChild(pName);
                            div.appendChild(pPrice);
                            container.appendChild(div);

                            totalPrice += item.price;
                        });
                    }
                    document.getElementById('total-price-value').textContent = totalPrice;
                    document.getElementById('custom-message').textContent = customMessages[buttonId];
                }

                document.getElementById('button1').addEventListener('click', function() {
                    mostrarImagenesYnombres('button1');
                });

                document.getElementById('button2').addEventListener('click', function() {
                    mostrarImagenesYnombres('button2');
                });

                document.getElementById('button3').addEventListener('click', function() {
                    mostrarImagenesYnombres('button3');
                });

                document.getElementById('button4').addEventListener('click', function() {
                    mostrarImagenesYnombres('button4');
                });

                document.getElementById('button5').addEventListener('click', function() {
                    mostrarImagenesYnombres('button5');
                });
            });

            document.addEventListener('DOMContentLoaded', function() {

                class Node {
                    constructor(data) {
                        this.data = data;
                        this.next = null;
                        this.prev = null;
                    }
                }
            
                class CircularLinkedList {
                    constructor() {
                        this.head = null;
                        this.tail = null;
                        this.size = 0;
                    }
            
                    addToEnd(data) {
                        const newNode = new Node(data);
            
                        if (!this.head) {
                            this.head = newNode;
                            this.tail = newNode;
                        } else {
                            newNode.prev = this.tail;
                            this.tail.next = newNode;
                            this.tail = newNode;
                        }
            
                        this.tail.next = this.head;
                        this.head.prev = this.tail;
                        this.size++;
                    }
            
                    getAll() {
                        const items = [];
                        let current = this.head;
                        if (current) {
                            do {
                                items.push(current.data);
                                current = current.next;
                            } while (current !== this.head);
                        }
                        return items;
                    }
                }
            
                const categories = {
                    case: new CircularLinkedList(),
                    psu: new CircularLinkedList(),
                    motherboard: new CircularLinkedList(),
                    cpu: new CircularLinkedList(),
                    gpu: new CircularLinkedList(),
                    ram: new CircularLinkedList(),
                    storage: new CircularLinkedList(),
                    cooler: new CircularLinkedList(),
                };
            
                const productList = new CircularLinkedList();

                //Case
                categories.case.addToEnd({ name: 'Nox Coolbay', price: 121.71 });
                categories.case.addToEnd({ name: 'Nox Hummer TGM', price: 228.21 });
                categories.case.addToEnd({ name: 'Cooler Master India', price: 251.03 });
                categories.case.addToEnd({ name: 'Corsair iCUE 220T RGB Airflow', price: 334.71 });
                categories.case.addToEnd({ name: 'Chasis Extended ATX GRAN TORRE', price: 699.84 });
                categories.case.addToEnd({ name: 'Kolink Void Midi Tower', price: 435.85 });
                categories.case.addToEnd({ name: 'Mag Forge 120A Airflow', price: 244.69 });
                categories.case.addToEnd({ name: 'Kolink Inspire MicroATX', price: 156.75 });
                categories.case.addToEnd({ name: 'Mars Gaming MC-ME', price: 137.64 });
                categories.case.addToEnd({ name: 'Nox Infinity Omega', price: 149.11 });
                //Fuente de Energía
                categories.psu.addToEnd({ name: 'Aerocool LUX550 550W 80 Plus Bronze', price: 136.93 });
                categories.psu.addToEnd({ name: 'Gigabyte Techology P650B 650W 80 Plus Bronze', price: 239.62 });
                categories.psu.addToEnd({ name: 'Cooler Master MWE 750W 80 BRONZE', price: 327.10 });
                categories.psu.addToEnd({ name: 'Corsair RM850 2021, RM Series, 850W 80 Plus Gold', price: 570.52 });
                categories.psu.addToEnd({ name: 'Corsair HX1500W ATX 80 Plus Titanium', price: 1255.15 });
                categories.psu.addToEnd({ name: 'Nox Urano VX 650W 80 Plus Bronze', price: 183.52 });
                categories.psu.addToEnd({ name: 'Corsair 750W ATX 80 Plus Bronze', price: 282.92 });
                categories.psu.addToEnd({ name: 'Corsair 850W ATX 80 Plus Gold', price: 539.08 });
                categories.psu.addToEnd({ name: 'Cooler Master 850W 80 Plus Gold', price: 477.90 });
                categories.psu.addToEnd({ name: 'ASUS TUF Gaming 1000W 80 Plus Gold', price: 703.48 });
                //Placa Madre
                categories.motherboard.addToEnd({ name: 'MSI B450M Pro-VDH', price: 266.25 });
                categories.motherboard.addToEnd({ name: 'ASROCK Chipset AMD B450', price: 311.89 });
                categories.motherboard.addToEnd({ name: 'GIGABYTE MB GBT B760', price: 570.52 });
                categories.motherboard.addToEnd({ name: 'ASUS TUF Gaming B650-PLUS WiFi', price: 867.20 });
                categories.motherboard.addToEnd({ name: 'ASUS ROG STRIX Chipset Intel Z790-F Gaming', price: 1742.00 });
                categories.motherboard.addToEnd({ name: 'PB GIGABYTE 1200 H510M H V2', price: 248.51 });
                categories.motherboard.addToEnd({ name: 'GIGABYTE B550M AORUS ELITE', price: 405.26 });
                categories.motherboard.addToEnd({ name: 'MSI B650 Gaming Plus WiFi', price: 688.18 });
                categories.motherboard.addToEnd({ name: 'ASUS PRIME B760M-A WiFi', price: 573.49 });
                categories.motherboard.addToEnd({ name: 'MSI B550 Gaming Gen3 ATX', price: 454.97 });
                //Procesador
                categories.cpu.addToEnd({ name: 'AMD Ryzen 5 5600G', price: 513.47 });
                categories.cpu.addToEnd({ name: 'AMD Ryzen 5 5600', price: 456.42 });
                categories.cpu.addToEnd({ name: 'Intel Core i5-12600K', price: 772.11 });
                categories.cpu.addToEnd({ name: 'AMD Ryzen 7 7800X3D', price: 1146.47 });
                categories.cpu.addToEnd({ name: 'Intel Core i9-13900k', price: 2088.12 });
                categories.cpu.addToEnd({ name: 'AMD Ryzen 9 7900', price: 1410.77 });
                categories.cpu.addToEnd({ name: 'AMD Ryzen 7 5800X', price: 745.53 });
                categories.cpu.addToEnd({ name: 'Intel Core i7-12700KF', price: 967.28 });
                categories.cpu.addToEnd({ name: 'Intel Core i5-13600KF', price: 963.46 });
                categories.cpu.addToEnd({ name: 'Intel Core i3-12100', price: 451.14 });
                //Tarjeta Gráfica
                categories.gpu.addToEnd({ name: 'AMD Radeon RX 6600', price: 859.59 });
                categories.gpu.addToEnd({ name: 'AMD RX 6750 XT Mech 2X', price: 962.29 });
                categories.gpu.addToEnd({ name: 'GeForce RTX 4060', price: 1296.08 });
                categories.gpu.addToEnd({ name: 'GeForce RTX 3060', price: 1078.15 });
                categories.gpu.addToEnd({ name: 'GeForce RTX 3050', price: 913.75 });
                categories.gpu.addToEnd({ name: 'AMD Radeon RX 6650 XT', price: 1009.33 });
                categories.gpu.addToEnd({ name: 'AMD Radeon RX 7600 XT', price: 1475.77 });
                categories.gpu.addToEnd({ name: 'GeForce RTX 4070 Ti', price: 2662.45 });
                categories.gpu.addToEnd({ name: 'AMD Radeon RX 7800 XT', price: 2213.65 });
                categories.gpu.addToEnd({ name: 'GeForce RTX 4090', price: 9128.40 });
                //RAM
                categories.ram.addToEnd({ name: 'DDR4 2666MHz 2x8GB', price: 152.14 });
                categories.ram.addToEnd({ name: 'DDR4 3200MHz 2x8GB', price: 193.98 });
                categories.ram.addToEnd({ name: 'DDR4 3600MHz 2x8GB', price: 228.21 });
                categories.ram.addToEnd({ name: 'DDR5 6000MHz 2x16GB', price: 749.29 });
                categories.ram.addToEnd({ name: 'DDR5 6600MHz 4x16GB', price: 836.77 });
                //Almacenamiento
                categories.storage.addToEnd({ name: '500GB M.2 SSD', price: 216.80 });
                categories.storage.addToEnd({ name: '1 TB M.2 SSD', price: 300.48 });
                categories.storage.addToEnd({ name: '1 TB PRO M.2', price: 418.38 });
                categories.storage.addToEnd({ name: '2 TB M.2 SSD', price: 562.02 });
                categories.storage.addToEnd({ name: '4 TB HDD', price: 451.14 });
                categories.storage.addToEnd({ name: '1 TB SSD', price: 221.75 });
                categories.storage.addToEnd({ name: '2 TB SSD', price: 497.02 });
                //Refrigerador CPU
                categories.cooler.addToEnd({ name: 'Thermalright 120 SE', price: 72.27 });
                categories.cooler.addToEnd({ name: 'Noctua NH - D15', price: 452.62 });
                categories.cooler.addToEnd({ name: 'Corsair Elite XT', price: 859.59 });
                categories.cooler.addToEnd({ name: 'Sin Refrigerador CPU', price: 0})
            
                 // Populate select options
                function populateSelectOptions(category, selectId) {
                    const selectElement = document.getElementById(selectId);
                    const products = categories[category].getAll();
                    products.forEach(product => {
                        const option = document.createElement('option');
                        option.value = product.price;
                        option.textContent = `${product.name} - ${product.price} soles`;
                        selectElement.appendChild(option);
                    });
                }


    populateSelectOptions('case', 'case-select');
    populateSelectOptions('psu', 'psu-select');
    populateSelectOptions('motherboard', 'motherboard-select');
    populateSelectOptions('cpu', 'cpu-select');
    populateSelectOptions('gpu', 'gpu-select');
    populateSelectOptions('ram', 'ram-select');
    populateSelectOptions('storage', 'storage-select');
    populateSelectOptions('cooler', 'cooler-select');

    function calculateTotalPrice() {
        let totalPrice = 0;
        const selects = document.querySelectorAll('#custom-form select');
        selects.forEach(select => {
            if (select.value) {
                totalPrice += parseFloat(select.value);
            }
        });
        document.getElementById('custom-total-price-value').textContent = totalPrice.toFixed(2);
    }

    document.querySelectorAll('#custom-form select').forEach(select => {
        select.addEventListener('change', calculateTotalPrice);
    });
});