/* =====================================================
   SAI KARTHIKEYA INFRA
   WEBSITE JAVASCRIPT
===================================================== */


/* ================= WORK DATA ================= */

const works = {

    cable: {

        number: "01 / OUR WORK",

        title: "Cable Works",

        image:
        "https://yfconnectivity.com/wp-content/uploads/2026/05/fiber-optic-in-smart-grid-1024x768.webp",

        sector: "Infrastructure",

        type: "Cable Infrastructure",

        focus: "Connectivity",

        description:
        "Sai Karthikeya Infra undertakes cable infrastructure works including cable installation, underground infrastructure and connectivity related activities.",

        longDescription:
        "Cable infrastructure plays an important role in modern communication and utility networks. Our work category includes cable installation and supporting infrastructure activities carried out according to project requirements."
    },


    dam: {

        number: "02 / OUR WORK",

        title: "Dam Works",

        image:
        "https://www.bic-iwhr.com/data/upload/ueditor/20250528/68366d311eb7c.png",

        sector: "Civil Infrastructure",

        type: "Dam & Earth Works",

        focus: "Construction",

        description:
        "Dam related civil infrastructure and earthwork activities form an important part of our project capabilities.",

        longDescription:
        "Dam projects require coordinated civil construction, earthwork and site activities. Sai Karthikeya Infra supports infrastructure requirements associated with dam and related civil works."
    },


    fiber: {

        number: "03 / OUR WORK",

        title: "Fiber Works",

        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbtVjqFJahX7PHkvQOvNVLGGpKZ-9q9zPdR0EXJc0GtmqQoCEe6KHKZw&s=10",

        sector: "Telecommunications",

        type: "Fiber Infrastructure",

        focus: "Connectivity",

        description:
        "Fiber works include fiber optic infrastructure, connectivity installation and supporting network activities.",

        longDescription:
        "Fiber infrastructure enables high-speed communication networks. Our work includes supporting fiber installation and infrastructure activities for connectivity projects."
    },


    "fiber-grid": {

        number: "04 / OUR WORK",

        title: "Fiber Grid",

        image:
        "https://www.nai-group.com/wp-content/uploads/2018/09/shutterstock_526546213.jpg",

        sector: "Digital Infrastructure",

        type: "Fiber Grid",

        focus: "Network Infrastructure",

        description:
        "Fiber grid works support large-scale connectivity infrastructure and network development.",

        longDescription:
        "Fiber grid infrastructure provides connectivity across multiple locations. The work requires systematic planning, installation and site coordination."
    },


    manure: {

        number: "05 / OUR WORK",

        title: "Organic Manure",

        image:
        "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1000&q=85",

        sector: "Agriculture",

        type: "Organic Manure",

        focus: "Agricultural Resources",

        description:
        "Organic manure activities focus on agricultural resource development and organic material management.",

        longDescription:
        "Organic manure can support soil improvement and sustainable agricultural practices. Our work category includes activities related to organic manure and agricultural resources."
    },


    house: {

        number: "06 / OUR WORK",

        title: "House Construction",

        image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",

        sector: "Construction",

        type: "Residential Construction",

        focus: "Building Works",

        description:
        "Residential construction works covering building development and supporting civil construction activities.",

        longDescription:
        "House construction requires coordinated civil, structural and finishing activities. Our residential construction work focuses on planned execution and quality construction practices."
    },


    panchayat: {

        number: "07 / OUR WORK",

        title: "Panchayat Raj",

        image:
        "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/05/01/Photos/Opinion/oped3-kwoF--621x414@LiveMint.jpg",

        sector: "Government Infrastructure",

        type: "Panchayat Raj Works",

        focus: "Rural Development",

        description:
        "Panchayat Raj related infrastructure works supporting rural development and public infrastructure.",

        longDescription:
        "Panchayat Raj infrastructure supports local communities through public facilities and development works. Our activities can include civil construction and supporting infrastructure works."
    },


    drain: {

        number: "08 / OUR WORK",

        title: "Drain & Building Works",

        image:
        "https://mtcopeland.com/wp-content/uploads/2021/12/shutterstock_1063804841-min-940x738.jpg",

        sector: "Civil Infrastructure",

        type: "Drainage & Buildings",

        focus: "Public Infrastructure",

        description:
        "Drainage infrastructure and building construction works supporting public and civil development.",

        longDescription:
        "Drainage systems and civil buildings are important components of local infrastructure. Our work includes drainage-related construction and supporting building activities."
    },


    steel: {

        number: "09 / OUR WORK",

        title: "Steel Plant",

        image:
        "https://tubepipeindia.com/wp-content/uploads/2025/01/Kalinganagar-Tata-steel.jpg",

        sector: "Industrial",

        type: "Steel Plant Works",

        focus: "Industrial Infrastructure",

        description:
        "Industrial infrastructure and civil support activities associated with steel plant environments.",

        longDescription:
        "Steel plant infrastructure requires coordinated civil and industrial support works. Our capabilities include construction and infrastructure activities associated with industrial project environments."
    }

};


/* ================= DETAILS PAGE ================= */

function loadWorkDetails() {

    const params =
        new URLSearchParams(window.location.search);

    const work =
        params.get("work");

    if (!work) {
        return;
    }


    const data =
        works[work];

    if (!data) {
        return;
    }


    const image =
        document.getElementById("workImage");

    const number =
        document.getElementById("workNumber");

    const title =
        document.getElementById("workTitle");

    const description =
        document.getElementById("workDescription");

    const sector =
        document.getElementById("workSector");

    const type =
        document.getElementById("workType");

    const focus =
        document.getElementById("workFocus");

    const longDescription =
        document.getElementById("longDescription");


    if (image) {

        image.src =
            data.image;

        image.alt =
            data.title;

    }


    if (number) {

        number.textContent =
            data.number;

    }


    if (title) {

        title.textContent =
            data.title;

    }


    if (description) {

        description.textContent =
            data.description;

    }


    if (sector) {

        sector.textContent =
            data.sector;

    }


    if (type) {

        type.textContent =
            data.type;

    }


    if (focus) {

        focus.textContent =
            data.focus;

    }


    if (longDescription) {

        longDescription.textContent =
            data.longDescription;

    }


    document.title =
        data.title +
        " | Sai Karthikeya Infra";

}


/* ================= CONTACT FORM ================= */

function sendEnquiry(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const phone =
        document.getElementById("phone").value;

    const service =
        document.getElementById("service").value;

    const message =
        document.getElementById("message").value;


    if (!name || !email || !phone || !message) {

        alert(
            "Please fill all required fields."
        );

        return;

    }


    alert(
        "Thank you " +
        name +
        "! Your enquiry has been received."
    );


    console.log({

        name: name,

        email: email,

        phone: phone,

        service: service,

        message: message

    });


    event.target.reset();

}


/* ================= START ================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadWorkDetails();

    }
);