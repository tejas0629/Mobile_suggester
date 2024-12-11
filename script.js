const phones = [
    { 
        name: "Xiaomi Redmi Note 12", 
        price: 14999, 
        camera: 4, 
        processor: 3, 
        battery: 5,
        image: "IMG/redmi note 12.webp" 
    },
    { 
        name: "Samsung Galaxy M14", 
        price: 13999, 
        camera: 4, 
        processor: 4, 
        battery: 4,
        image: "IMG/M14.jpg" 
    },
    { 
        name: "iQOO Z7 5G", 
        price: 19999, 
        camera: 5, 
        processor: 5, 
        battery: 4,
        image: "IMG/IQ Z7.jpeg" 
    },
    { 
        name: "Realme Narzo 60", 
        price: 17999, 
        camera: 4, 
        processor: 4, 
        battery: 4,
        image: "IMG/Realme-Narzo-60-Pro.jpg" 
    },
    { 
        name: "Vivo T2", 
        price: 16999, 
        camera: 3, 
        processor: 4, 
        battery: 4,
        image: "IMG/VIVO t2.png" 
    },
    { 
        name: "Poco X5", 
        price: 15999, 
        camera: 4, 
        processor: 3, 
        battery: 5,
        image: "IMG/xiaomi-poco-x5-5g.jpg" 
    },
    { 
        name: "OnePlus Nord CE 3 Lite", 
        price: 19999, 
        camera: 4, 
        processor: 5, 
        battery: 5,
        image: "IMG/one plus nord CE 3 lite 5g.jpeg" 
    },
    { 
        name: "Motorola Edge 40", 
        price: 29999, 
        camera: 5, 
        processor: 5, 
        battery: 5,
        image: "IMG/moto edge 40.webp" 
    },
    { 
        name: "Samsung Galaxy A14", 
        price: 12999, 
        camera: 3, 
        processor: 3, 
        battery: 4,
        image: "IMG/samsung a14.jpeg" 
    },
    { 
        name: "Realme C55", 
        price: 10999, 
        camera: 3, 
        processor: 3, 
        battery: 4,
        image: "IMG/realmi c55.jpeg" 
    },
    { 
        name: "Iphone 16", 
        price: 70000, 
        camera: 5, 
        processor: 5, 
        battery: 5,
        image: "IMG/iphone16.webp" 
    }

];

document.getElementById("mobileForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const budget = parseInt(document.getElementById("budget").value);
    const priority = document.querySelector('input[name="priority"]:checked').value;

    const priorityScores = {
        camera: "camera",
        processor: "processor",
        battery: "battery"
    };

    const filteredPhones = phones
        .filter(phone => phone.price <= budget)
        .sort((a, b) => b[priorityScores[priority]] - a[priorityScores[priority]])
        .slice(0, 10);

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (filteredPhones.length === 0) {
        resultsDiv.innerHTML = "<p>No phones found within your budget and preferences.</p>";
    } else {
        const grid = document.createElement("div");
        grid.style.display = "grid";
        grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
        grid.style.gap = "20px";

        filteredPhones.forEach(phone => {
            const phoneCard = document.createElement("div");
            phoneCard.style.border = "1px solid #ddd";
            phoneCard.style.borderRadius = "8px";
            phoneCard.style.overflow = "hidden";
            phoneCard.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            phoneCard.style.transition = "transform 0.3s ease-in-out";

            phoneCard.addEventListener("mouseover", () => {
                phoneCard.style.transform = "scale(1.05)";
            });
            phoneCard.addEventListener("mouseout", () => {
                phoneCard.style.transform = "scale(1)";
            });

            const img = document.createElement("img");
            img.src = phone.image;
            img.alt = phone.name;
            img.style.width = "100%";
            img.style.height = "200px";
            img.style.objectFit = "cover";

            const info = document.createElement("div");
            info.style.padding = "10px";
            info.style.textAlign = "center";

            const name = document.createElement("h3");
            name.textContent = phone.name;
            name.style.fontSize = "1.2rem";
            name.style.margin = "10px 0";

            const price = document.createElement("p");
            price.textContent = `Price: ₹${phone.price}`;
            price.style.fontSize = "1rem";
            price.style.color = "#555";

            info.appendChild(name);
            info.appendChild(price);
            phoneCard.appendChild(img);
            phoneCard.appendChild(info);
            grid.appendChild(phoneCard);
        });

        resultsDiv.appendChild(grid);
    }
});
